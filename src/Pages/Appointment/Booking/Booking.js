import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';




const Booking = ({booking , date, setBookingSuccess}) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const color = teal[600];
    const {name, time, space, price} = booking;
    return (
        
           <>
            <Grid item xs={12} sm={2} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}> 
                <Typography variant="h6" gutterBottom component="div" sx={{color: color, fontWeight: 'bold'}}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                   {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} Spaces Available
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    Price ${price}
                </Typography>
                <Button onClick={handleBookingOpen}  variant="contained" sx={{mt:2}}>BOOK APPOINTMENT</Button>

                </Paper>
            </Grid>
            <BookingModal 
                booking={booking}
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        
           </>
            
    );
};

export default Booking;