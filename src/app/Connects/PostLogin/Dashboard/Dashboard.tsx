import React from 'react'
import { DashboardContainer } from './Dashboard.styles'
import Box from '@mui/material/Box';
// import ReactCardSlider from 'react-card-slider-component';
import Navbar from './Navbar'
const Dashboard = () => {
  return (
  <DashboardContainer>
    <Navbar/>
    <Box className='cst-dashboard'>hello</Box>
  </DashboardContainer>
  )
}

export default Dashboard