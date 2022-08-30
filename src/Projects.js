import React from 'react';
import { 
    Grid, 
    Link,
    Box,
    Typography,
    Tooltip, 
} from '@mui/material';

const projects = [
    {
        name: 'Sample Site',
        path: 'https://samouchka1.github.io/model-site/index.html',
        thumbnail: 'template-site-bg.png',
        source: 'https://github.com/samouchka1/model-site'
    },
    {
        name: 'Dragon Theme Site',
        path: 'https://samouchka1.github.io/dragon-site/index.html',
        thumbnail: 'three-headed.jpg',
        source: 'https://github.com/samouchka1/dragon-site'
    },
    {
        name: 'jQuery Quote Machine',
        path: 'https://random-quote-machine-jquery.netlify.app/',
        thumbnail: 'quotes.jpg',
        source: 'https://github.com/samouchka1/quote-machine'
    },
    {
        name: 'PHP CRUD App',
        path: 'http://crudproject.great-site.net/index.php',
        thumbnail: 'php-crud-warning.jpg',
        source: 'https://github.com/samouchka1/PHP-CRUD-app'
    },
    {
        name: 'PHP Login System',
        path: 'http://loginsystem.great-site.net/',
        thumbnail: 'php-login-warning.jpg',
        source: 'https://github.com/samouchka1/PHP-login-system'
    },
    {
        name: 'React To-do App',
        path: 'https://todo-list-react-12.netlify.app/',
        thumbnail: 'react-todo-bg.jpg',
        source: 'https://github.com/samouchka1/React-Todo-App'
    },
    {
        name: 'WordPress Site',
        path: 'http://wordpress-site-1.great-site.net/',
        thumbnail: 'wp-1-warning.jpg',
        source: null
    },
    {
        name: 'Github',
        path: 'https://github.com/samouchka1',
        thumbnail: 'github.jpg',
        source: null
    }
]

const Projects = () => {

const gridStyle = {
    justifyContent: 'center',
    gap: '1.1rem'
}

const gridItemTextStyle = {
    position: 'relative',
    color: 'white',
    textShadow: '3px 3px 4px black',
    top: {
        md: '70%',
        sm: '75%',
        xs: '67%'   
    },
    left: '3%',
    fontSize: '1.3rem',
    fontWeight: '600',
    zIndex: '1'
}

const gridItemNoSrcTextStyle = { //Project name text position for no-source list
    position: 'relative',
    color: 'white',
    textShadow: '3px 3px 4px black',
    top: { // this
        md: '86%',
        sm: '90%',
        xs: '86%'
    },
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
    opacity: '.8',
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

const sourceButtonAreaStyle = {
    position: 'relative',
    width: '100&',
    textAlign: 'center',
    margin: '1rem auto'
}

const sourceButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: '.9',
    '&:hover': {
        opacity: '1'
    }
}

// filter projects with no source
const source = projects.filter(yesSource => yesSource.source !== null);
const noSrc = projects.filter(noSource => noSource.source === null);

return (

    <Grid container sx={gridStyle} id="projects">

        {source.map((project) => (

            <Grid item xs={8} md={3} key={project}>
                    <Typography sx={gridItemTextStyle}>
                        {project.name}
                    </Typography>
                    <Link href={project.path} target='_blank'>
                        <Box
                            component="img" 
                            src={process.env.PUBLIC_URL + '/project-images/' + project.thumbnail} 
                            alt={project.name}
                            sx={gridItemImageStyle}
                        />
                    </Link>

                    <br/>
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
            </Grid>
        ))}

        {noSrc.map((project) => (

            <Grid item xs={8} md={3} key={project}>
                    <Typography sx={gridItemNoSrcTextStyle}>
                        {project.name}
                    </Typography>
                    <Link href={project.path} target='_blank'>
                        <Box
                            component="img" 
                            src={process.env.PUBLIC_URL + '/project-images/' + project.thumbnail} 
                            alt={project.name}
                            sx={gridItemImageStyle}
                        />
                    </Link>
            </Grid>
        ))}

    </Grid>
)}

export default Projects;