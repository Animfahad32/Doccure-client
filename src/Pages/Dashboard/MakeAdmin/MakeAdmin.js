import { Alert, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const {token} = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email}
        e.preventDefault();
        fetch('https://sheltered-dusk-10770.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: { 
                'authorization': `Bearer ${token} ` ,
                'content-type': 'application/json'
                
            },
            body: JSON.stringify(user)
            
        })
        .then(response =>response.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data)
               
                setSuccess(true)
            }
        })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width:'50%'}} label="Email" variant="standard" type="email" onBlur={handleOnBlur}/>
            <Button variant="contained" type="submit">Submit</Button>
            {success &&  <Alert severity="success">Admin Added</Alert> }
            </form>
        </div>
    );
};

export default MakeAdmin;