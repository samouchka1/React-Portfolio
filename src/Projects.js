import React from 'react';
import { 
    Grid, 
    Link,
    Box,
    Typography, 
} from '@mui/material';

const projects = [
    {
        name: 'Sample Site',
        path: 'https://samouchka1.github.io/model-site/index.html',
        thumbnail: 'template-site-bg.png'
    },
    {
        name: 'Dragon Theme Site',
        path: 'https://samouchka1.github.io/dragon-site/index.html',
        thumbnail: 'three-headed.jpg'
    },
    {
        name: 'PHP using \'includes\'',
        path: 'http://samouchka.great-site.net/index.php',
        thumbnail: 'php.jpg'
    },
    {
        name: 'PHP CRUD App',
        path: 'http://crudproject.great-site.net/index.php',
        thumbnail: 'php-crud.jpg'
    },
    {
        name: 'PHP Login System',
        path: 'http://loginsystem.great-site.net/',
        thumbnail: 'php-login.jpg'
    },
    {
        name: 'React To-do App',
        path: 'https://todo-list-react-12.netlify.app/',
        thumbnail: 'react-todo-bg.jpg'
    },
    {
        name: 'Wordpress Site',
        path: 'http://wordpress-site-1.great-site.net/',
        thumbnail: 'wp-1.jpg'
    },
    {
        name: 'Github',
        path: 'https://github.com/samouchka1',
        thumbnail: 'github.jpg'
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
    <Grid container sx={gridStyle} id="projects">
        {projects.map((project) => (

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
            </Grid>

        ))}

    </Grid>
)}

export default Projects;