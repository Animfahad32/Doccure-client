import { Container, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import React from 'react';
import Booking from '../Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 am - 9:00 am',
        space: 10,
    },
    {
        id: 2,
        name: 'Costmetic Dentistry',
        time: '10:05 am - 11:30 am',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 pm - 6:30 pm',
        space: 10 ,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 am - 8:30 am',
        space: 10 ,
    },
    {
        id: 5,
        name: 'Dental Crowns',
        time: '9:00 am to 10:30 am',
        space: 10,
    },
    {
        id: 6,
        name: 'Dental Veneers',
        time: '11:50 am to 1:30 pm',
        space: 10 ,
    }
]
const AvailableAppointments = ({date}) => {
 
    return (
        <Container>
            <Typography sx={{color: 'info.main', mb: 5, fontWeight: 'bold'}} variant="h4">Available Appointments On {date.toDateString()}</Typography>
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Booking
                   key={booking.id}
                   booking={booking}
                   ></Booking>)
               }
                
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;