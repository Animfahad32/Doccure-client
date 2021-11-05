import { Menu as MenuIcon } from "@material-ui/icons";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {

  const {user, logout} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{textDecoration:"none", color: "white"}}>
               Doccure
               </NavLink>
            </Typography>
            <Link to="/appointment"> <Button color="inherit">Appointment</Button> </Link>
            {
              user?.email ? 
             
              <Button onClick={logout} color="inherit">Log Out</Button>
              :
               <NavLink to="/login" style={{textDecoration:"none", color: "white"}}>
               <Button color="inherit">Login</Button>
               </NavLink>
            }
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;