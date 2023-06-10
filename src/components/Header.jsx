import { useContext } from "react"
import Nav from "./Nav"
import { UserContext } from "./Users"


function Header() {

  const user = useContext(UserContext)

    return (
  <>
  <h1>NC Games Reviews</h1>
  <Nav/>
  <p>{user}</p>
  </>
    )
  }
  
  export default Header
  