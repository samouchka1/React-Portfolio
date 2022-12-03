import React from 'react';
import {
    Box,
    Container, 
    Typography
} from '@mui/material';

const welcomeStyle = {
    height: '85vh',
    width: '100%',
    // margin: '0 .5rem 0 .5rem',
    margin: {
        md: '0 auto',
        xs: '.7rem auto .15rem'   
    },
    backgroundImage:`url(${process.env.PUBLIC_URL + 'welcome.jpg'})`,
    backgroundSize: 'cover'
}

const welcomeTextAreaStyle = {
    position: 'relative',
    top: '33%',
    width: {
        md: '50%',
        sm: '75%',
        xs: '95%'
    },
    margin: '0 auto',
    textAlign: 'center',
    padding: '.5rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(30, 30, 30, 0.85)'
}

const welcomeTextStyle = {
    fontFamily: 'Monda',
    fontWeight: '600',
    fontSize: {
        md: '3rem',
        xs: '2rem'
    },
    color: 'rgb(185, 253, 121)',
    caretColor: 'transparent'
}

const welcomeSubTextStyle = {
    paddingTop: '2rem',
    fontWeight: '600',
    fontSize : {
        md: '1.5rem',
        xs: '1.2rem'
    },
    textShadow: 'black 3px 3px 2px'
}

const Welcome = () => {

    return (
        <Container
            sx={welcomeStyle}
            maxWidth={false}
        >
            <Box sx={welcomeTextAreaStyle}>
                <Typography sx={welcomeTextStyle}>
                    Greetings, I am Miguel.<br />
                    <Typography sx={welcomeSubTextStyle}>
                        Web and Email Developer for Hire
                    </Typography>
                </Typography>
            </Box>
        </Container>
    )
}

export default Welcome;
