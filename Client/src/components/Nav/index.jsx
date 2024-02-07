import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from 'react';


function Nav() {

  function showNavigation() {


    const [currentTabIndex, setCurrentTabIndex] = useState(0);
 
    const handleTabChange = (e, tabIndex) => {
      console.log(tabIndex);
      setCurrentTabIndex(tabIndex);
    };

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
          {/* TODO: Also we need to send Home as we removed it from over all return statement  */}
        </ul>
      );
    } else {
      return (
        <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
              <Tab label="Login"> Login  </Tab>
              <Tab label="Signup">  Signup</Tab>
              <Tab label="Home"> Home </Tab>
            </Tabs>
        </Box>
        {/* TAB Login Contents */}
        {currentTabIndex === 0 && (
          <Box sx={{ p: 3 }}>
            <Link to="/login"></Link>
          </Box>
        )}
 
        {/* TAB Signup Contents */}
        {currentTabIndex === 1 && (
          <Box sx={{ p: 3 }}>
            <Link to="/signup"></Link>
          </Box>
        )}
 
        {/* TAB Home Contents */}
        {currentTabIndex === 2 && (
          <Box sx={{ p: 3 }}>
            <Link to="/"></Link>
          </Box>
        )}
        </div>
      );
    }
  }

  return (
    <div>
    <header>
      <nav>
        {showNavigation()}
      </nav>
    </header>
    
     </div>
  );
}

export default Nav;
