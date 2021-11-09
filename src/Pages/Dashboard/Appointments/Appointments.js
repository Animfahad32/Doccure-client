import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Appointments = ({date}) => {
    const {user,token} = useAuth();
    const [appointments, setAppointments] =useState([])

    useEffect(()=>{
        const url= `https://sheltered-dusk-10770.herokuapp.com/appointments?email=${user.email}&date=${date}`
      fetch(url, {
        header: {
          'authorization': `Bearer ${token}`
        }
      })
      .then(res =>res.json())
      .then(data => setAppointments(data))
    },[date, user.email, token])
    return (
        <div>
            <h2>Appointments {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.serviceName}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;