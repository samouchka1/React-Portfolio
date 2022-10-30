import React, { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Container,
    Fade,
    Grid,
    Stack
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const aboutContentAreaStyle = { 
    height: 'auto',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    margin: '.85rem 0 .7rem 0',
    padding: '.5rem 0 1.3rem',
    backgroundColor: 'rgb(10, 33, 77)', //primary - doesn't want to import
    width: '100%',
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            backgroundColor: 'rgb(10, 33, 77)',
            border: 'solid white 3px',
            transition: '.3s'   
        }
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

const aboutBioStyle = {
    width: {
        md: '45%',
        sm: '75%',
        xs: '90%'   
    },
    textAlign: 'center',
    margin: '0 0 1rem'
}

const aboutContentTextStyle = {
    color: 'white',
    padding: '1rem', //padding
    fontSize: '1.2rem',
    textAlign: 'center'
}

//=========================================SKILLS=========

const aboutContentIconStyle = {
    width: '50px'
}

const aboutContentBackendIconStyle ={
    width: '35px'
}

const skillsGridStyle = {
    justifyContent: 'center',
    gap: '1.1rem',
    margin: '0 auto 1.6rem'
}

const sectionSkillStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: {
        md: '2rem',
        xs: '1rem'
    },
    margin: '2rem 0', 
    padding: '2rem 0',
    borderTop: 'solid 1px rgb(220, 220, 220)', 
    borderBottom: 'solid 1px rgb(220, 220, 220)'
}

//=========================================================

const aboutButtonStyle = {
    position: 'relative',
    width: '100%',
    caretColor: 'transparent',
    color: 'white',
    backgroundColor: 'rgb(10, 33, 77)', //primary - doesn't want to import
    fontSize: {
        md: '1.5rem',
        xs: '1.1rem'
    },
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
        }
}

const aboutImageStyle = {
    position: 'relative',
    height: {
        md: '40vh',
        sm: '30vh',
        xs: '30vh'
    },
    width: 'auto',
    borderRadius: '50%',
    margin: {
        md: '2rem 0',
        xs: '2rem 0 1.2rem'
    },    
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
            <Fade in={showAboutContent} timeout={650}>
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
                
                    <Box sx={aboutContentStyle}>
                        <Box sx={aboutBioStyle}>
                            <Box 
                                component="img"
                                src={process.env.PUBLIC_URL + 'about-image.jpg'}
                                alt="About Me Image"
                                sx={aboutImageStyle}    
                            /><br />
                            <Typography sx={aboutContentTextStyle}>
                                I am a Self-Taught Developer that likes to build functional, responsive Web Sites and Apps.
                                Always looking forward to a new challenge. Professional and reliable.
                            </Typography>
                        </Box>
                        <Typography sx={aboutContentTextStyle}>
                            <Typography sx={{fontSize: '1.5rem', fontWeight: '600'}}>SKILLS</Typography><br/>
                            <Grid container sx={skillsGridStyle} xs={8} md={12}>
                                <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/html-5.png'} 
                                        alt="HTML"
                                        sx={aboutContentIconStyle} 
                                    /><br/>HTML
                                </Grid>
                                <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/css-3.png'} 
                                        alt="CSS"
                                        sx={aboutContentIconStyle} 
                                    /><br/>CSS
                                </Grid>
                                <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/js.png'} 
                                        alt="JavaScript"
                                        sx={aboutContentIconStyle} 
                                    /><br/>JavaScript
                                </Grid>
                                {/* <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/jquery.png'} 
                                        alt="jQuery"
                                        sx={aboutContentIconStyle} 
                                    /><br/>jQuery
                                </Grid> */}
                                <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/react.png'} 
                                        alt="React.js"
                                        sx={aboutContentIconStyle} 
                                    /><br/>React
                                </Grid>
                                <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/php.png'} 
                                        alt="PHP"
                                        sx={aboutContentIconStyle} 
                                    /><br/>PHP
                                </Grid>
                                <Grid item>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/wordpress.png'} 
                                        alt="WordPress"
                                        sx={aboutContentIconStyle} 
                                    /><br/>WordPress
                                </Grid>
                            </Grid>

                            <Box sx={sectionSkillStyle}>
                                {/* <div>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/email.png'}
                                        alt="HTML Emails"
                                        sx={aboutContentIconStyle}
                                    />
                                    <br/>
                                    HTML Email Development
                                </div> */}
                                <div>
                                    <Box component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/skills/g-analytics.png'}
                                        alt="Google Analytics"
                                        sx={{width: '45px'}}
                                    />
                                    <br/>
                                    Google Analytics
                                </div>
                            </Box>
                            
                            <Box>
                                Familiarity with API's and back-end programming<br />
                                <Stack direction="row" spacing={2} justifyContent="center" sx={{margin: '.75rem 0 0', fontSize: '.96rem'}}>
                                    <div>
                                        <Box component="img"
                                            alt="MySQL"
                                            src={process.env.PUBLIC_URL + '/project-images/skills/mysql.png'}
                                            sx={aboutContentBackendIconStyle}
                                        /><br />mySQL
                                    </div>
                                    {/* <div>
                                        <Box component="img"
                                            alt="MongoDB"
                                            src={process.env.PUBLIC_URL + '/project-images/skills/mongodb.png'}
                                            sx={aboutContentBackendIconStyle}
                                        /><br />MongoDB
                                    </div> */}
                                    <div>
                                        <Box component="img"
                                            alt="ExpressJS"
                                            src={process.env.PUBLIC_URL + '/project-images/skills/express-js.png'}
                                            sx={aboutContentBackendIconStyle}
                                        /><br />Express
                                    </div>
                                </Stack>
                            </Box>
                        </Typography>
                    </Box>
                    
                </Box>
            </Fade>
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