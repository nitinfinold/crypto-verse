import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar'
import { useCoin } from "./Context";
import { Tabs, Tab, Box, Button, TextField, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { useState } from 'react';
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    color: "white",
    borderRadius: 10,
  },
  google: {
    padding: 24,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 20,
    fontSize: 20,
  },
}));

export default function BuyModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { user, setAlert } = useCoin();
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cardExpiry, setcardExpiry] = useState("");
  const [cvv, setcvv] = useState("");


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if(firstName==="" && lastName==="" && cardnumber==="" && cardExpiry==="" && cvv==="" && email===""){
      setAlert({
        open: true,
        message: "All fields must be filled!!",
        type: "error",
      });
      return
    }
    if(cardnumber.length !== 16 || isNaN(Number(cardnumber))
    ){
      setAlert({
        open: true,
        message: "Please enter a valid card number.",
        type: "error",
      });
      return
    }
    if(isNaN(Number(cardExpiry))
    ){
      setAlert({
        open: true,
        message: "Please enter a valid expiry!!",
        type: "error",
      });
      return
    }
    if(cvv.length !== 3 || isNaN(Number(cvv))
    ){
      setAlert({
        open: true,
        message: "CVV should be 3 digit number.",
        type: "error",
      });
      return
    }

    // setAlert({
    //   open: true,
    //   message: "Thank you for placing an Order!! We will mail you the additional information via your registered E-mail.",
    //   type: "success",
    // });
    
    addToOrders();
    setOpen(false)
  };

  const addToOrders = async () => {
    const orderRef = doc(db, "Orders", user.uid);
    try {
      await setDoc(
        orderRef,
        { firstName: firstName,  lastName: lastName,  cardnumber: cardnumber,  cardExpiry: cardExpiry,  cvv: cvv,  email: email, },
        { merge: true }
      );

      setAlert({
        open: true,
        message: "Thank you for placing an Order!! We will mail you the additional information via your registered E-mail.",
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: 105,
          height: 40,
          backgroundColor: "#fff",
          color: '#0d6efd',
        }}
        onClick={handleOpen}>BUY NOW</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <AppBar position="static" style={{ backgroundColor: "transparent", color: "white" }}>
              <Tabs value={value} onChange={handleChange} variant="fullWidth" style={{ borderRadius: 10, color: "#0d6efd" }}>
                <Tab label="Purchase" />
              </Tabs>

            </AppBar>
            <Box
              p={3}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <TextField
                variant="outlined"
                type="text"
                label="Enter First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                fullWidth
              />
              <TextField
                variant="outlined"
                type="text"
                label="Enter Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                fullWidth
              />
              <TextField
                variant="outlined"
                type="email"
                label="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="debit"
                name="radio"
              >
                <FormControlLabel value="debit" control={<Radio />} label="Debit" />
                <FormControlLabel value="credit" control={<Radio />} label="Credit" />
              </RadioGroup>
              <TextField
                variant="outlined"
                type="text"
                label="Enter Card Number"
                value={cardnumber}
                onChange={(e) => setCardnumber(e.target.value)}
                fullWidth
              />
              <TextField
                variant="outlined"
                type="text"
                label="Enter Card Expiry"
                value={cardExpiry}
                onChange={(e) => setcardExpiry(e.target.value)}
                fullWidth
              />
              <TextField
                variant="outlined"
                type="text"
                label="Enter Card CVV"
                value={cvv}
                onChange={(e) => setcvv(e.target.value)}
                fullWidth
              />
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "#0d6efd" }}
                onClick={handleSubmit}
              >
                Confirm Order
              </Button>

            </Box>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
