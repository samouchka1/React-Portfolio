import React from 'react';
import {
    Container, Typography
} from '@mui/material';
import welcome from './welcome.jpg';

const welcomeStyle = {
    height: '78vh',
    width: '100%',
    // margin: '0 .5rem 0 .5rem',
    margin: 'auto',
    backgroundImage:`url(${welcome})`,
    backgroundSize: 'cover'
}

const welcomeTextStyle = {
    position: 'relative',
    top: '33%',
    textAlign: 'center',
    fontFamily: 'Monda',
    fontWeight: '600',
    color: 'rgb(185, 253, 121)',
    caretColor: 'transparent'
}

const Welcome = () => {
    return (
        <Container
            sx={welcomeStyle}
            maxWidth={false} //this takes off default width limit
        >
            <Typography
                variant="h3"
                sx={welcomeTextStyle}
            >
            Greetings, I am Miguel.<br />
                <Typography variant="h5" sx={{paddingTop: '2rem'}}>
                    Web Developer for Hire
                </Typography>
            </Typography>
        </Container>
    )
}

export default Welcome;
