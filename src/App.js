
import React from 'react'
import {
  ThemeProvider,
} from '@material-ui/core';
//import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertDialog from 'react-alert-template-mui'
import routes, { CustomRoutes } from 'src/routes.js';
import { createTheme } from 'src/theme';
const history = createBrowserHistory();


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const App = () => {
  const theme = createTheme({
    theme: 'LIGHT'
  });

  return (
    <ThemeProvider theme={theme}>
        <SnackbarProvider
          dense
          maxSnack={3}
        >
          <AlertProvider template={AlertDialog} {...options}>
            <Router history={history}>
              <CustomRoutes routes={routes}/>
            </Router>
          </AlertProvider>
        </SnackbarProvider>
    </ThemeProvider>

  )
}


export default App;
