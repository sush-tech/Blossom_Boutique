import Auth from "../../utils/auth";
import { Link } from "react-router-dom";



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
        <div>
        <ul>
          <li> <Link to="/signup">
                   <span>Signup</span> 
                </Link></li>
       
               
              <li><Link to="/login">
                    Login
                </Link></li>
                
                </ul>
        </div>
      );
    }
  }

  return (
    <div>
    <header>
      
              <Link to="/">
                  Home
              </Link>
        
    
    
      <nav>
        {showNavigation()}
      </nav>
    </header>
    
     </div>
  );
}

export default Nav;
