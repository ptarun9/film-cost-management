import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  BALAYYA from '../../../../assets/images/vsr.jpeg'
import  CHIRU from  '../../../../assets/images/vv.jpeg'
import  VD from  '../../../../assets/images/kushi.jpeg'
import  NTR from  '../../../../assets/images/NTR.jpeg'
import  NKR from  '../../../../assets/images/NKR.jpeg'
import AA from '../../../../assets/images/aa.jpeg'
import DC from '../../../../assets/images/vd1.jpeg'
import SSMB from '../../../../assets/images/mb.jpeg'
import RAM from '../../../../assets/images/ram.jpeg'
import GL from '../../../../assets/images/nani.jpeg'
const CardSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <Box>
            <Box>
          <Typography variant='h1' align='center' sx={{padding:5}}>Ongoing Projects</Typography>
            <Container maxWidth="lg">
                <Slider {...settings}>
                    <Box>
                        <Card variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="Veera Simha"
                                image={BALAYYA}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Veera Simha Reddy
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="valtheru Veeraiah"
                                image={CHIRU}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    valtheru Veeraiah
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'> 
                            <CardMedia
                                component="img"
                                alt="kushi"
                                image={VD}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Kushi
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="NTR 31"
                                image={NTR}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    NTR 31
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="Amigos"
                                image={NKR}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Amigos
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Slider>
            </Container>
            </Box>
        <Box>
        <Typography variant='h1' align='center' sx={{padding:5}}>Previous Projects</Typography>
            <Container maxWidth="lg">
                <Slider {...settings}>
                <Box>
                        <Card  variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="Sarkaru vari pata"
                                image={SSMB}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Sarkaru Vari Paata
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="Pushpa"
                                image={AA}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Pushpa
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="Gang Leader"
                                image={GL}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Gang Leader
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'>
                            <CardMedia
                                component="img"
                                alt="Ranga Sthalam"
                                image={RAM}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Ranga Sthalam
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box>
                        <Card  variant='outlined'> 
                            <CardMedia
                                component="img"
                                alt="Dear Comrade"
                                image={DC}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Dear Comrade
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                   
                </Slider>
            </Container>
        </Box>
</Box>
      
    )
}

export default CardSlider