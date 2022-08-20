import React from 'react';
import { 
    Grid, 
    Link,
    Box,
    Typography, 
} from '@mui/material';

const emails = [
    {
        name: 'Responsive Email',
        path: 'https://samouchka1.github.io/HTML-email-responsive/',
        thumbnail: 'responsive-thumbnail.JPG'
    },
    {
        name: 'Elite Charters',
        path: 'https://samouchka1.github.io/HTML-email-elite-charters/',
        thumbnail: 'charters-thumbnail.JPG'
    },
    {
        name: 'Paypal Clone',
        path: 'https://samouchka1.github.io/HTML-email-paypal-clone/',
        thumbnail: 'paypal-thumbnail.JPG'
    },
    {
        name: 'GNC Clone',
        path: 'https://samouchka1.github.io/HTML-email-gnc-clone/',
        thumbnail: 'gnc-thumbnail.JPG'
    },
]

const Emails = () => {

    const containerStyle = {
        width: '99%',
        textAlign: 'center',
        margin: '6rem auto 2rem'
    }

    const emailsHeaderStyle = {
        position: 'relative',
        width: {
            md: '75%',
            xs: '90%'
        },
        textAlign: 'center',
        caretColor: 'transparent',
        color: 'white',
        backgroundColor: 'rgb(10, 33, 77)', //primary - doesn't want to import
        fontSize: '1.5rem',
        fontFamily: 'sans-serif',
        fontWeight: '600',
        textTransform: 'none',
        borderRadius: 0,
        padding: '1.9rem 0',
        margin: {
            md: '1rem auto 0',
            xs: '.5rem auto 0'
        },
        border: 'solid rgb(0, 0, 0) 3px',
            '&:hover': {
                backgroundColor: 'rgb(10, 33, 77)',
                border: 'solid white 3px',
                transition: '.3s'   
            }
    }

    const gridStyle = {
        margin: '0 auto',
        justifyContent: 'center',
        gap: '1.1rem'
    }
    
    const gridItemTextStyle = {
        position: 'relative',
        color: 'white',
        textAlign: 'left',
        textShadow: '2px 2px 2px black',
        top: '88%',
        left: '3%',
        fontSize: '1.3rem',
        fontWeight: '600',
        zIndex: '1'
    }
    
    const gridItemImageStyle = {
        width: '100%',
        height: {
            md: 270,
            sm: 330,
            xs: 225
        },
        opacity: '.9',
        '&:hover': {
            opacity: '1',
            animationName: 'zoom',
            animationDuration: '1s',
            animationFillMode: 'forwards',
            '@keyframes zoom' : {
                '0%': { transform: 'scale(1.0035)'},
                '100%' : { transform: 'scale(1.05)'}
            }
        }
    }

    return (
        // Container maxWidth={false}
        <Box sx={containerStyle}  id="emails">
            <Box sx={emailsHeaderStyle}>Emails</Box>

            <Grid container sx={gridStyle}>
                {emails.map((email) => (
        
                    <Grid item xs={8} md={3} key={email}>
                            <Typography sx={gridItemTextStyle}>
                                {email.name}
                            </Typography>
                            <Link href={email.path} target='_blank'>
                                <Box
                                    component="img" 
                                    src={process.env.PUBLIC_URL + '/project-images/emails/' + email.thumbnail} 
                                    alt={email.name}
                                    sx={gridItemImageStyle}
                                />
                            </Link>
                    </Grid>
        
                ))}
            </Grid>
        </Box>
    )}
    
    export default Emails;