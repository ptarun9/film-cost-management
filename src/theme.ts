import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main:  '#2596be',
      light: '#eb262b',
      dark: '#f39423',
    },
    secondary: {
      main: '#FEE123',
      light: '#FFF9D3',
    },
    error: {
      main: '#C73F0E'
    },
    success: {
      main: '#DDF0EB',
      light: '#F1FCF9',
      dark: 'rgba(221, 240, 235, 0.5)'

    },
    info: {
      main: '#2467B6',
      light:'#ffffff',
      dark:'#000',
    },
    warning: {
      main: '#2E2E2E'
    },
    text: {
      primary: '#202020',
      secondary: '#414544'

    }
  },
  typography: {
    fontWeightLight: 'bold',
    fontFamily:'Montserrat, sans-serif',
    h1: {
      fontWeight: '600',
      fontSize: '22px',
      lineHeight: '28px',
      fontFamily:'Montserrat, sans-serif',

    },
    h2: {
      fontWeight: 'bold',
      fontSize: '20px',
      lineHeight: '26px',
      fontFamily:'Montserrat, sans-serif',
    },
    h3: {
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '26px',
      fontFamily:'Montserrat, sans-serif',
    },
    h4: {
      fontWeight: '600',
      fontSize: '12px',
      lineHeight: '16px',
      fontFamily:'Montserrat, sans-serif',
    },
    subtitle1: {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '22px',
      fontFamily:'Montserrat, sans-serif',
    },
    subtitle2: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily:'Montserrat, sans-serif',
    },
    body1: {
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '20px',
      fontFamily:'Montserrat, sans-serif',
    },
    body2: {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '20px',
      fontFamily:'Montserrat, sans-serif',

    },
    button: {
      fontWeight: '600',
      textTransform: 'capitalize',
      fontFamily:'Montserrat, sans-serif',
    }

  },
//   components: {
//     MuiSelect:{
//       styleOverrides:{
//         select:{
//           zIndex:1
//         }
//       }
//     },
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           '& img': {
//             position: 'absolute',
//             right: '10px',

//           }
//         }
//       }
//     },
//     MuiDivider: {
//       styleOverrides: {
//         root: {
//           borderColor: '#BCBCBC'
//         }
//       }
//     },
//     MuiButton: {
//       defaultProps: {
//         disableRipple: true,
//         disableTouchRipple: true,
//       },

//     },
//     MuiButtonBase: {
//       styleOverrides: {
//         root: {
//           textTransform: 'capitalize',
//         }
//       },
//       defaultProps: {
//         disableRipple: true,
//         disableTouchRipple: true,
//       }
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         multiline: {
//           paddingLeft: '8px',
//           paddingRight: '8px',
//           '& textarea': {
//             paddingLeft: '0px',
//             paddingRight: '0px',
//           }
//         },
//         input: {
//           paddingLeft: '8px',
//           paddingRight: '8px',
//           fontWeight: 500,
//           color: '#414544',
//         }
//       }
//     },
//     MuiBadge: {
//       styleOverrides: {
//         badge: {
//           fontWeight: 600
//         }
//       }
//     }
//   },


})