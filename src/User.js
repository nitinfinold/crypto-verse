import { useEffect, useState } from "react";
import { useCoin } from "./Context";
import { updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";

export default function User() {
  const { user, setAlert } = useCoin();
  const email = user?.email
  const [name, setName] = useState();

  const history = useHistory()
  useEffect(() => {
    const href = window.location.href
    console.log(!!user, "href", href[href.length - 1])
    if (user) {
      setName(user?.displayName)
      if (href[href.length - 1] === '?') {
        history.replace(history.location.pathname)
      }
    }
    else {
      if (href[href.length - 1] !== '?') {
        history.replace('/')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  console.log({ user, history })

  return (
    <div className="container-xxl" style={{padding: "0 20px"}}>
      <p className="fs-1 pt-5 pb-2">User Info</p>
      <form>
        Email:<br /> {email}<br /><br />
        Name: <input className="form-control" style={{maxWidth: "500px"}} value={name} onChange={(e) => setName(e.target.value)} /><br />
        <button className="btn btn-primary" onClick={() => {
          history.push(history.location.pathname)
          updateProfile(user.auth.currentUser, {
            displayName: name
          }).then(() => {
            setAlert({
              open: true,
              message: `Update Successful.`,
              type: "success",
            });
          }).catch((error) => {
            setAlert({
              open: true,
              message: error.message,
              type: "error",
            });
          });
        }}>Update</button>
      </form>
    </div>
  )
}