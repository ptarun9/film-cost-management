import React from 'react'
import { DashboardContainer } from './Dashboard.styles'
import { CardButtons } from './Dashboard.styles'
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Container, Card, CardMedia, CardContent, Typography, Stack } from '@mui/material'
// import Grid from '@mui/material/Grid'
import MYTHRI_LOGO from '../../../../assets/images/logo1.svg'
import Navbar from './Navbar'
import CardSlider from './CardSlider';
import PROPERTY_ICON from '../../../../assets/images/movie.png'
import PROFILE_ICON from '../../../../assets/images/user.png'
import location_ICON from '../../../../assets/images/location.png'
const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Box className='cst-dashboard'>
        <Stack direction='row' justifyContent='center' className='img-section'>
          <img src={MYTHRI_LOGO} alt='Mythri Logo'  />
        </Stack>
        <CardButtons>
          <Container maxWidth={'lg'}>
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={12}>
                <Button sx={{ maxWidth: '100%' }}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Sarkaru vari pata"
                     image={PROPERTY_ICON}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">Properties</Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <Button sx={{ maxWidth: '100%' }}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Sarkaru vari pata"
                     image={location_ICON}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">Locations</Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
              <Grid item lg={4} md={4} sm={12}>
                <Button sx={{ maxWidth: '100%' }}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Sarkaru vari pata"
                     image={PROFILE_ICON}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">Profile Management</Typography>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </CardButtons>
        <CardSlider />
      </Box>
    </DashboardContainer>
  )
}

export default Dashboard