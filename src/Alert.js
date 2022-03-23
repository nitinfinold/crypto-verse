import { Snackbar } from "@material-ui/core"
import { useCoin } from "./Context"

export const Alert = () => {
  const { alert } = useCoin()

  return (
    <Snackbar open={alert.open}>
      <div>123</div>
    </Snackbar>
  )
}