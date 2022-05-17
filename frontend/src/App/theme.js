import { createMuiTheme } from '@material-ui/core/styles';

const NCCTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#99cc00',
      light: '#DDE89B',
      dark: '#99CC00',
      contrastText: '#333333',
    },
    secondary: {
      main: '#333333',
      dark: '#333333',
      light: '#A7A9AC',
      contrastText: '#FFFFFF',
    },
  },
});

export default NCCTheme;
