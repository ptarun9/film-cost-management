import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
export const LoginContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(180deg, rgba(234, 7, 11, 0.78) 0%, rgba(242, 146, 33, 0.7398) 52.08%, rgba(64, 152, 211, 0.53) 100%)',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Montserrat',
    '& .MuiCard-root': {
        width: 450,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        gap: 24,
        fontFamily:'Montserrat',

    },
    // '& .MuiTypography-root.MuiLink-root MuiLink-underlineAlways':{
    //     '&:hover':{
    //         textDecorationColor:theme.palette.primary.dark,
    //     }
    // }
}))