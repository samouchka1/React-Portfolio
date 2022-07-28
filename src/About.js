import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Container
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { CSSTransition } from 'react-transition-group';

const aboutContentAreaStyle = { 
    height: {
        md: 420,
        sm: 750,
        xs: 850
    },
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    margin: '.85rem 0 .7rem 0',
    backgroundColor: 'rgb(10, 33, 77)', //primary - doesn't want to import -- 
    width: '100%',
}

const aboutContentStyle = {
    display: 'flex',
    flexDirection: {
        md: 'row',
        xs: 'column'
    },
    justifyContent: 'center',
    alignItems: 'center'

}

const aboutContentTextStyle = {
    color: 'white',
    padding: '2rem',
    fontSize: '1.2rem'
}

const aboutButtonStyle = {
    position: 'relative',
    width: '100%',
    caretColor: 'transparent',
    color: 'white',
    backgroundColor: 'rgb(10, 33, 77)', //primary - doesn't want to import
    fontSize: '1.5rem',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    textTransform: 'none',
    borderRadius: 0,
    padding: '1.6rem',
    margin: {
        md: '1rem 0 0 0',
        xs: '.5rem 0 0 0'
    },
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            backgroundColor: 'rgb(10, 33, 77)',
            border: 'solid white 3px',
            transition: '.3s'   
        },
}

const aboutImageStyle = {
    position: 'relative',
    height: {
        md: '34vh',
        sm: '24vh',
        xs: '34vh'
    },
    width: 'auto',
    borderRadius: '50%',
    margin: '2rem',
    caretColor: 'transparent',
    boxShadow: 'rgb(173, 173, 173) 1px 1px 7px',
}

const closeButtonAreaStyle = {
    textAlign: 'center',
    position: 'relative',
    top: '5%',
    left: {
        xs: '42%',
        sm: '45%',
        md: '49%'
    }
}

const closeButtonStyle ={
    transform: 'rotate(90deg)',
    height: '2.4rem',
    width: '2.4rem',
    caretColor: 'transparent',
    color: 'white',
        '&:hover': {
            color: 'rgb(250, 12, 12)',
            borderWidth: '0 5px 5px 0'
        }
}

const About = () => {

    const [showAboutButton, setAboutButton] = useState(true)
    const [showAboutContent, setAboutContent] = useState(false)

    const AboutButton = () => {
        return (
            <Button
                sx={aboutButtonStyle}
                onClick={()=>{
                setAboutButton(false);
                setAboutContent(true);
            }}
            >
                About Me
            </Button>
        )
    }
    
    const AboutContent = () => {
        return (
            <Box sx={aboutContentAreaStyle}>
                <Box>
                    <Button  sx={closeButtonAreaStyle}
                        onClick={()=>{
                            setAboutButton(true);
                            setAboutContent(false);
                        }}
                    >
                    
                        <ArrowBackIosNewIcon sx={closeButtonStyle} />
                    </Button>
                </Box>
                {/* <CSSTransition 
                    in={showAboutContent} 
                    timeout={4000}
                    unmountOnExit
                > */}
                    <Box sx={aboutContentStyle}>
                        <Box 
                            component="img"
                            src={process.env.PUBLIC_URL + 'about-image.jpg'}
                            alt="About Me Image"
                            sx={aboutImageStyle}    
                        />
                        <Typography sx={aboutContentTextStyle}>
                            Thank you for stopping by!<br/> <br/> I like to develop functional, responsive websites. Strongly familiar with HTML, CSS, JavaScript and PHP. Experience with MySQL, MongoDB/Mongoose, Node/ExpressJS. Knowledge in ReactJS, PHP Laravel, WordPress and installing, working with frameworks and libraries. <br/>I'm always looking forward to a new project to
                            tackle. Let me help your business grow! <br/> <br/>Professional and reliable.
                        </Typography>
                    </Box>
                {/* </CSSTransition> not working */}
            </Box>
        )
    }

    return (

        <Container>
                <Box id="about">
                    {showAboutButton ? <AboutButton /> : null}
                    {showAboutContent ? <AboutContent /> : null}
                </Box>
        </Container>
    );
};

export default About;