import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { RegisterContainer } from './Register.styles'
import MYTHRI_LOGO from '../../../../assets/images/logo1.svg'
const Register = () => {
    return (
        <RegisterContainer>
            <Card>
                <Box>
                    <img src={MYTHRI_LOGO} alt='logo' />
                </Box>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth required label="First name" id="first name" />
                    </Box>
                    </Grid>
                <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField required fullWidth label="Last name" id="lastname" />
                   </Box>
                </Grid>
                </Grid>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField required fullWidth label="Email" id="Email" />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="Password" id="Password" />
                </Box>

                <Box width='100%'>
                    <Button variant="contained" disableElevation sx={{width:'100%'}}>
                        Register
                    </Button>
                </Box>

                <Link href="#">
                    Already have an account? Sign in
                </Link>
            </Card>
        </RegisterContainer>
    )
}
export default Register
