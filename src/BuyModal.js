import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar'
import { useCoin } from "./Context";
import { Tabs, Tab,Box, Button, TextField } from "@material-ui/core";
import { useState } from 'react';


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
  const { setAlert } = useCoin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
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
                type="email"
                label="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                fullWidth
              />
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "#0d6efd" }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>

            </Box>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
