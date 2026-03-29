import { createTheme } from '@mui/material/styles';

/** Single theme instance for ThemeProvider and @mui/styles defaultTheme (avoids missing theme.spacing). */
export const appTheme = createTheme();
