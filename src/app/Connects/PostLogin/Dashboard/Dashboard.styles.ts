import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
export const NavContainer = styled(Box)(({ theme }) => ({
    '& .MuiBox-root.css-19kzrtu':{
        padding:theme.spacing(0),
    },
    '& .MuiToolbar-root':{
        backgroundColor:theme.palette.info.light,
        color:theme.palette.info.dark,
        fontFamily:'Montserrat, sans-serif',
        height:70,
      
        '& .css-130f8nx':{
            '& .MuiButtonBase-root.MuiButton-root ':{
                color:theme.palette.info.dark,
                fontFamily:'Montserrat, sans-serif',
                whiteSpace: 'nowrap',
                '&:hover':{
                    color:theme.palette.primary.main,
                }
            }
        },
        '& .navlogo ':{
            fontFamily:'Montserrat, sans-serif',
        }
    },
    '& img':{
        maxWidth:'30%',
        padding:'10px 0',
        cursor:'pointer',
    },
    '& .navlogo':{
    [theme.breakpoints.down('md')]: {
        display:'none',
    },
}
}))
export const DashboardContainer = styled(Box)(({ theme }) => ({
    // backgroundColor:'red',
}))   
