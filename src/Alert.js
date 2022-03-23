import { Snackbar } from "@material-ui/core"
import { useCoin } from "./Context"
import MuiAlert from "@material-ui/lab/Alert";

export const Alert = () => {
  const { alert,setAlert } = useCoin()

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };


  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  )
}