import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";;


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <Box  w='100%'>
        <ul>
          <li>
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
         </Box>
      );
    }
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" border='1px' borderColor='gray.200'>
    <header>
      {/* <img src="./images/sakura.png"alt="image"/>  */}
      <h1>
        <Link to="/">
        Home
        </Link>
      </h1>
    
      <nav>
        {showNavigation()}
      </nav>
    </header>
     </Box>
  );
}

export default Nav;
