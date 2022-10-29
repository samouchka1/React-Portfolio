import React from 'react'
import {
    Container,
    Box,
    Typography
} from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Slide } from "react-awesome-reveal";


const welcomeTextAreaStyle = {
    // position: 'relative',
    // top: '33%',
    width: {
        md: '50%',
        sm: '75%',
        xs: '95%'
    },
    margin: '0 auto',
    textAlign: 'center',
    padding: '.5rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(30, 30, 30, 0.85)',
    '&:hover': {
        animationName: 'zoom',
        animationDuration: '1s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.04)'}
        }
    }
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

const Banner = () => {
  return (
    <Container maxWidth={false}>
        <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
            <ParallaxBannerLayer image={process.env.PUBLIC_URL + 'welcome.jpg'} speed={-40} />
            <Slide direction="up" style={{position: 'relative', top: '36%'}}>
                <Box sx={welcomeTextAreaStyle}>
                    <Typography sx={welcomeTextStyle}>
                        Greetings, I am Miguel.<br />
                        <Typography sx={welcomeSubTextStyle}>
                            Web Developer for Hire
                        </Typography>
                    </Typography>
                </Box>
            </Slide>
        </ParallaxBanner>
    </Container>
  )
}

export default Banner;
