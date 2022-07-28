import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { 
  green 
} from '@mui/material/colors';
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Signature from './Signature';

const theme =  createTheme({
  palette: {
    primary: {
      main: 'rgb(10, 33, 77)' //test
    },
    secondary: {
      main: green[200] //test
    }
  },
  typography: {
    fontFamily: 'sans-serif'
  }
}) 

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Welcome />
      <About />
      <Projects />
      <Signature />
    </ThemeProvider>
  );
}

export default App;