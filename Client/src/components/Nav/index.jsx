import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Cart from "../Cart";
function Nav() {

  function showNavigation() {
 
    if (Auth.loggedIn()) {
      return (
          <AppBar position = 'static'>
            <Toolbar>
              <IconButton size = 'large' edge = 'start' color ='inherit' aria-label='logo'>
                <AcUnitIcon/>
              </IconButton>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                BLOSSOM BOUTIQUE
              </Typography>
              <Stack direction='row' spacing={2}>
                <Button color='inherit' component={Link} to="/" >Home</Button>
                <Button color='inherit' component={Link} to="/aboutUs" >About Us</Button>
                <Button color='inherit'component={Link} to="/orderHistory" >Order History</Button>
                {/* <ToggleColorMode></ToggleColorMode> */}
                {/* <Button color='inherit' ><Cart /></Button> */}
                <Button color='inherit' component={Link} to="/" onClick={() => Auth.logout()}>Log Out</Button>
              </Stack>
            </Toolbar>
          </AppBar>
      );
    } else {
      return(

      <AppBar position = 'static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'> 
          <AcUnitIcon/>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
            BLOSSOM BOUTIQUE
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button color='inherit' component={Link} to="/" >Home</Button>
            <Button color='inherit' component={Link} to="/aboutUs" >About Us</Button>
            <Button color='inherit' component={Link} to="/login">Login</Button>
            {/* <Button color='inherit'><Cart /></Button> */}
            {/* todo: cart placement */}
          </Stack>
        </Toolbar>
      </AppBar>
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
