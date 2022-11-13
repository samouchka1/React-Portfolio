import React from 'react';
import { 
    Grid, 
    Link,
    Box,
    Typography,
    Tooltip, 
} from '@mui/material';
import { Slide, Fade } from "react-awesome-reveal";


const projects = [
    {
        name: 'PHP CRUD App',
        path: 'http://crudproject.great-site.net/index.php',
        thumbnail: 'php-crud.jpg',
        source: 'https://github.com/samouchka1/PHP-CRUD-app'
    },
    {
        name: 'PHP Login System',
        path: 'http://loginsystem.great-site.net/',
        thumbnail: 'php-login.jpg',
        source: 'https://github.com/samouchka1/PHP-login-system'
    },
    {
        name: 'React Quote Machine',
        path: 'https://lively-hotteok-e6caba.netlify.app/', //check name
        thumbnail: 'quotes.jpg',
        source: 'https://github.com/samouchka1/react-quote-machine'
    },
    {
        name: 'React To-do App',
        path: 'https://astounding-cat-dc4355.netlify.app/', //check name
        thumbnail: 'react-todo-bg.jpg',
        source: 'https://github.com/samouchka1/todo-app-mui'
    },
    {
        name: 'React Market App',
        path: 'https://lustrous-cucurucho-b00d3d.netlify.app/',
        thumbnail: 'marketapp.jpg',
        source: 'https://github.com/samouchka1/marketApp'
    },
    {
        name: 'React eCommerce Site',
        path: 'https://beamish-sfogliatella-2eb23a.netlify.app/',
        thumbnail: 'StoreSite.png',
        source: 'https://github.com/samouchka1/storesite'
    },
    {
        name: 'WordPress Site',
        path: 'http://wordpress-site-1.great-site.net/',
        thumbnail: 'wp-1.jpg',
        source: null
    },
    {
        name: 'Github',
        path: 'https://github.com/samouchka1',
        thumbnail: 'github.jpg',
        source: null
    }
]


const gridStyle = {
    justifyContent: 'center',
    gap: '1.1rem',
    marginTop: '1.5rem'
}

const gridItemTextStyle = {
    position: 'relative',
    color: 'white',
    // textShadow: '3px 3px 4px black',
    // top: {
    //     md: '70%',
    //     sm: '75%',
    //     xs: '67%'   
    // },
    // left: '3%',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '500',
    zIndex: '1'
}

const gridItemNoSrcTextStyle = { //Project name text position for no-source list
    position: 'relative',
    color: 'white',
    // textShadow: '3px 3px 4px black',
    // top: { // this
    //     md: '86%',
    //     sm: '90%',
    //     xs: '86%'
    // },
    // left: '3%',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '500',
    zIndex: '1'
}

const gridItemImageStyle = {
    width: '100%',
    height: {
        md: 270,
        sm: 330,
        xs: 225
    },
    opacity: '.8',
    '&:hover': {
        opacity: '1',
        animationName: 'zoom',
        animationDuration: '1s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.04)'}
        }
    }
}

const sourceButtonAreaStyle = {
    position: 'relative',
    width: '100&',
    textAlign: 'center',
    margin: '.5rem auto'
}

const sourceButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: '.9',
    '&:hover': {
        opacity: '1'
    }
}

const Projects = () => {

// filter projects with no source
const sources = projects.filter(yes => yes.source !== null);
const noSources = projects.filter(no => no.source === null);

return (

    <Grid container sx={gridStyle} id="projects">

        {sources.map((project) => (

            <Grid item xs={8} md={3} key={project} sx={{maxWidth: '80%', flexGrow: 1}}>
                <Fade cascade 
                    damping={0}
                    triggerOnce
                >
                    <Slide direction="up" 
                        triggerOnce
                    >
                        <div>
                            <Link href={project.path} target='_blank'>
                                <Box
                                    component="img" 
                                    src={process.env.PUBLIC_URL + '/project-images/' + project.thumbnail} 
                                    alt={project.name}
                                    sx={gridItemImageStyle}
                                />
                            </Link>
                            <Typography sx={gridItemTextStyle}>
                                {project.name}
                            </Typography>

                            {/* <br/> */}
                            <Box sx={sourceButtonAreaStyle}>
                                <Tooltip title={'Source code for ' + project.name} placement="bottom">
                                    <Link href={project.source} target='_blank' sx={sourceButtonStyle}>
                                        <Box component="img" 
                                            src={process.env.PUBLIC_URL + '/project-images/source-icon.png'}
                                            sx={{width: '60px'}}    
                                        />
                                    </Link>
                                </Tooltip>
                            </Box>
                        </div>

                    </Slide>
                </Fade>
            </Grid>
        ))}

        {noSources.map((project) => (

            <Grid item xs={8} md={3} key={project} sx={{maxWidth: '80%', flexGrow: 1}}>
                <Fade cascade 
                    damping={0}
                    triggerOnce
                >
                    <Slide direction="up" 
                        triggerOnce
                    >
                        <div>
                            <Link href={project.path} target='_blank'>
                                <Box
                                    component="img" 
                                    src={process.env.PUBLIC_URL + '/project-images/' + project.thumbnail} 
                                    alt={project.name}
                                    sx={gridItemImageStyle}
                                />
                            </Link>
                            <Typography sx={gridItemNoSrcTextStyle}>
                                {project.name}
                            </Typography>
                        </div>
                    </Slide>
                </Fade>
            </Grid>
        ))}

    </Grid>
)}

export default Projects;