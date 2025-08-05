import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
export const NavContainer = styled(Box)(({ theme }) => ({
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(0),
    },
    '& .MuiBox-root.css-19kzrtu': {
        padding: theme.spacing(0),
    },
    '& .css-fl082i-MuiPaper-root-MuiAppBar-root': {
        paddingRight: '0px !important',
    },
    '& .MuiToolbar-root': {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.dark,
        fontFamily: 'Montserrat, sans-serif',
        height: 70,

        '& .css-130f8nx': {
            '& .MuiButtonBase-root.MuiButton-root ': {
                color: theme.palette.info.dark,
                fontFamily: 'Montserrat, sans-serif',
                whiteSpace: 'nowrap',
                letterSpacing: '3px',
                '&:hover': {
                    color: theme.palette.primary.main,
                }
            }
        },
        '& .navlogo ': {
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '3px',
        }
    },
    '& img': {
        maxWidth: '30%',
        padding: '10px 0',
        cursor: 'pointer',
    },
    '& .navlogo': {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    }
}))
export const DashboardContainer = styled(Box)(({ theme }) => ({
    '& .cst-dashboard': {
        height: 'calc(100vh - 70px)',
        overflowY: 'auto',
        paddingBottom: theme.spacing(5),
        '& .img-section': {
            padding: '30px 0 50px',
            [theme.breakpoints.down('sm')]: {
                padding: '20px 0'
            },
            '& > img ': {
                width: '30%'
            }
        }
    },
    '& .MuiTypography-h1': {
        letterSpacing: 3,
        fontWeight: 800,
        color: theme.palette.primary.light,
        [theme.breakpoints.down('sm')]: {
            letterSpacing: 1,
        },
    },
    '& .MuiTypography-h3': {
        letterSpacing: 3,
        [theme.breakpoints.down('sm')]: {
            letterSpacing: 1,
        },
    },
    '& .MuiCard-root': {
        maxWidth: 350,
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            marginRight: theme.spacing(3),
            marginLeft: theme.spacing(4),
        },
        '& .MuiCardMedia-media': {
            height: 432,
            objectFit: 'fill',
            [theme.breakpoints.down('sm')]: {
                height: 300,
            },
        },

    },
    '& .slick-slider': {
        '& .slick-prev': {
            history: 40,
            width: 40,
            left: -60,
            zIndex: 1,
            '&:before': {
                fontSize: 40,
                color: theme.palette.primary.light,
                [theme.breakpoints.down('sm')]: {
                    fontSize: 20,
                },
            },
            [theme.breakpoints.down('md')]: {
                left: -10,
            },
            [theme.breakpoints.down('sm')]: {
                left: -10,
            },
        },
        '& .slick-next': {
            history: 40,
            width: 40,
            zIndex: 1,
            [theme.breakpoints.down('sm')]: {
                right: -20,
            },
            '&:before': {
                fontSize: 40,
                color: theme.palette.primary.light,
                [theme.breakpoints.down('sm')]: {
                    fontSize: 20,
                },
            }
        }
    }
}))
export const CardButtons = styled(Box)(({ theme }) => ({
    '& .MuiButtonBase-root': {
        width: '100%',
        padding: theme.spacing(0),
        '&:hover':{
        padding: theme.spacing(0),
        },
        '& .MuiPaper-root': {
            width: '100%',
            filter:'drop-shadow(0px 0px 10px rgba(187, 189, 191, 0.5))',
            boxShadow:'none',
            '& .MuiCardMedia-root': {
                height: 200,
                width: 'auto',
                margin: '0 auto',
                padding: theme.spacing(3),
            }
        }
    }
}))