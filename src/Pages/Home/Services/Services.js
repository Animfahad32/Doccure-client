import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../../images/cavity.png';
import flouride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: "Fluoride Treatment",
        description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
        img: flouride
    },
    {
        name: "Cavity Filling",
        description: "Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.",
        img: cavity
    },
    {
        name: "teeth whitening",
        description: "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.",
        img:  whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" style={{ color: "#26a69a" }}sx={{ fontWeight: 500, m:2 }}>
                           OUR SERVICES 
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 600,m:2  }}>
                           Services We Provide
                </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                  services.map(service => <Service
                  key={service.name}
                  service={service}
                  ></Service>)
              }
                </Grid>
            </Container>
      </Box>
    );
};

export default Services;