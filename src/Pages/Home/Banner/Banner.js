import { Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter ={
    display: 'flex',
    alignItems: 'center',
     height:400
    
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter,textAlign: 'left'}} xs={12} md={6}>
                <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{my:3, fontSize:13, color:'text.secondary'}}>
                        Your Great Smile Begins With A Great Dentist
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter} >
            <img style={{width: '350px'}} src={chair} alt="" />
          </Grid>
          
        </Grid>
      </Container>
    );
};

export default Banner;