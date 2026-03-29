import React from 'react';
import { createRoot } from 'react-dom/client';
import { StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { appTheme } from './theme';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* ThemeProvider must wrap StylesProvider so JSS sees the same theme; injectFirst keeps JSS before Emotion */}
    <ThemeProvider theme={appTheme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <App />
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

serviceWorker.unregister();
