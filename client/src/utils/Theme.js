import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#EB50DB',
      main: '#B500A9',
      dark: '#810079',
      contrastText: '#FAFAFA'
    },
    secondary: {
      light: '#B0FF57',
      main: '#76FF03',
      dark: '#32CB00',
      contrastText: '#424242'
    }
  }
});