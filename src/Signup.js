import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useCoin } from "./Context";

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   const { setAlert } = CryptoState();

  const handleSubmit = async () => {

  }



  const { setAlert } = useCoin()


  return (
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

      <button onClick={() => setAlert({ open: true })}>Show alert</button>
    </Box>
  );
};

export default Signup;