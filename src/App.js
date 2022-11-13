import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { 
  green 
} from '@mui/material/colors';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Signature from './components/Signature';
import Emails from './components/Emails';

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
      <Banner />
      <About />
      <Projects />
      <Emails />
      <Signature />
    </ThemeProvider>
  );
}

export default App;