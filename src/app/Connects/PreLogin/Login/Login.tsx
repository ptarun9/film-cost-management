import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { LoginContainer } from './Login.styles'
import MYTHRI_LOGO from '../../../../assets/images/logo1.svg'
const Login = () => {
    return (
        <LoginContainer>
            <Card>
                <Box>
                    <img src={MYTHRI_LOGO} alt='logo' />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth required label="Email" id="Email" />
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth required label="Password" id="Password" />
                    <Box>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    </FormGroup>
                    <Link href="#">
                        Forget password?
                    </Link>
                    </Stack>
                </Box>
                </Box>
           
                <Box width='100%'>
                    <Button variant="contained"  disableElevation sx={{width:'100%'}}>
                        Login
                    </Button>
                    <Button variant="contained"  disableElevation sx={{width:'100%'}}>
                        Login
                    </Button>
                </Box>
                
                    <Link href="#">
                        Don't have an account? Sign Up
                    </Link>
            </Card>
        </LoginContainer>
    )
}
export default Login
