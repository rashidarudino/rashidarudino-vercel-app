// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f5f5f5', 
    },
    text: {
      primary: '#333', 
      secondary: '#777', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
    },
  },
});

export default theme;
