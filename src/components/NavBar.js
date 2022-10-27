import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  Toolbar, 
  Typography,
  List,
  ListItem,
  Link
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
    name: 'Projects',
    path: '#projects'
  },
  {
    name: 'Emails',
    path: '#emails'
  },
  {
    name: 'Contact',
    path: 'https://www.linkedin.com/in/mchio-7a68a3236'
    // path: 'https://www.upwork.com/freelancers/~01c3683d82db31cfe6'
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
    xs: 'space-around'
  },
  height: 108,
  backgroundColor : 'primary',
  width: '100%',
  margin: {
    md: '1rem auto',
    xs: '.5rem auto'
  }
}

const navLinks = {
  fontWeight: '600',
  // textDecoration: 'none',
  color: 'white',
  fontSize : {
    xs: '.95rem',
    md: '1.3rem'
  }
}

const navLinksBorder = {
  padding: {
    md: '2.2rem .5rem',
    xs: '2.4rem .35rem'  
  },
  border: 'solid rgba(0, 0, 0, 0) 3px',
    '&:hover': {
      border: 'solid white 3px',
      transition: '.3s'
    },
}

const NavBar = () => {

  const hashLinks = pages.filter(hash => hash.path.includes('#')); //filter hashlinks
  const links = pages.filter(link => link.path.includes('https'));
  
  return (
  <Container maxWidth={false} sx={{justifyContent: 'center'}}>
      <AppBar sx={navBar}>
        <Toolbar disableGutters>
          <List sx={{ display: 'flex'}}>
            {hashLinks.map((page) => (
                <ListItem key={page} sx={{padding: '0 .55rem'}}>
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

            {links.map((page) => (
              <ListItem key={page}>
              <Typography noWrap sx={navLinksBorder}>
                  <Link
                    style={{textDecoration: 'none'}}
                    href={page.path}
                    target="_blank"
                  >
                    <Typography sx={navLinks}>
                      {page.name}
                    </Typography>
                  </Link>
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