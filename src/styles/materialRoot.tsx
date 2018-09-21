import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[500],
      main: blue[500],
      dark: blue[700]
    }
  },
});

export default function materialRoot(Component: typeof React.Component) {
  return function MaterialRoot(props: object) {
    return <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  }
}
