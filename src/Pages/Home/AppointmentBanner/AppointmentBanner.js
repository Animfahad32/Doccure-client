import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBanner= {
    background: `url(${bg})`,
    backgroundColor: 'rgba(19, 38, 77,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{width: '400px', marginTop: '-110px'}} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ justifyContent: 'flex-start', display: 'flex', textAlign: 'left', alignItems: 'center'}}>
            <Box>
                    <Typography
                variant="h6"
                sx={{mb:3}}
                style={{color: '#26a69a'}}
                >Appointment</Typography>
                <Typography
                variant="h4"
                style={{color: 'white', }}
                >Make An Appointment Today</Typography>
                <Typography
                variant="h6"
                sx={{my:3}}
                style={{color: 'white', fontSize: 14}}
                >Ask for an appointment of the doctor quickly with almost a single click. We take care of the rest.</Typography>
                <Button variant="contained">Learn More</Button>
            </Box>
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;