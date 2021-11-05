import { Container } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../images/login.png";



const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth() 
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
      
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history)
       
    }
    return (
      <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                  Login
                </Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="Email" 
                name="email"
                onChange={handleOnChange}
                variant="standard" />
                <TextField 
                sx={{width:'75%', m:1}}
                id="standard-basic" 
                type="password" 
                label="Password" 
                name="password"
                onChange={handleOnChange}
                variant="standard" />
                
                <Button sx={{width:'75%', m:1}} type="submit" variant="contained">Login</Button>
                 <NavLink style={{textDecoration: 'none'}} to="/register"> 
                <Button sx={{width:'75%', m:1}} type="submit" variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <LinearProgress />}
                        {user?.email &&  <Alert severity="success">Thank you for Login.</Alert> }
                        {authError &&  <Alert severity="error">{authError}</Alert>}

                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={login} alt="" />
            </Grid>
            
        </Grid>
      </Container>
    );
};

export default Login;