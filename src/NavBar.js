import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  Toolbar, 
  Typography,
  List,
  ListItem,
  // Link
} from '@mui/material';
import { 
    // grey
} from '@mui/material/colors';

const pages = [
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'My Work',
    path: '#projects'
  },
  {
    name: 'Contact',
    path: 'https://www.upwork.com/freelancers/~01c3683d82db31cfe6'
  }
]

//===STYLES===

const navBar = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: {
    md: 'right',
    sm: 'right',
    xs: 'center'
  },
  height: {
    md: 108,
    xs: 75
  },
  backgroundColor : 'primary',
  width: '100%',
  margin: {
    md: '1rem 0 1rem 0',
    xs: '.5rem 0 .5rem 0'
  }
}

const navLinks = {
  fontWeight: '600',
  // textDecoration: 'none',
  color: 'white',
  fontSize : {
    xs: '1.1rem',
    md: '1.3rem'
  }
}

const navLinksBorder = {
  padding: '2.2rem .5rem 2.2rem .5rem',
  border: 'solid rgba(0, 0, 0, 0) 3px',
    '&:hover': {
      border: 'solid white 3px',
      transition: '.3s'
    }
}

const NavBar = () => {
  
  return (
  <Container maxWidth={false} sx={{justifyContent: 'center'}}>
      <AppBar sx={navBar}>
        <Toolbar>
          <List sx={{ display: 'flex'}}>
            {pages.map((page) => (
                <ListItem key={page}>
                  <Typography noWrap sx={navLinksBorder}>
                      <HashLink
                        style={{textDecoration: 'none'}}
                        scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                        to={page.path}
                      >
                        <Typography sx={navLinks}>
                          {page.name}
                        </Typography>
                      </HashLink>
                  </Typography>
                </ListItem>
              ))}
          </List>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;