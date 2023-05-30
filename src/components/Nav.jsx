import { Link } from "react-router-dom"

function Nav() {

    return (
        <>
        <nav>
            <li key="home"><Link to="/">Home   </Link></li>
            <li key="reviews"><Link to="/reviews">Reviews </Link></li>
            <li key="categories"><Link to="/categories">Categories   </Link></li>
        </nav>
        </>
    )
  }
  
  export default Nav
  