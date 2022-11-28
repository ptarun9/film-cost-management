import React from 'react';
import './App.css';
import {ThemeProvider } from '@mui/material/styles';
import {theme} from './theme';
import Login from './app/Connects/PreLogin/Login/Login';
import Register from './app/Connects/PreLogin/Register/Register';
import Dashboard from './app/Connects/PostLogin/Dashboard/Dashboard';
function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <Login/>  */}
   {/* <Register/>  */}
    <Dashboard/> 
    </ThemeProvider>
  );
}

export default App;
