import {  createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main:'#093170'
      },
      secondary: {
        light: '#0d47a1',
        main: '#3d6bb3',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

export default theme;