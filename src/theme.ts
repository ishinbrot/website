import { createTheme } from '@mui/material/styles';

/** Light theme for portfolio */
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e3a5f',
      light: '#2c5282',
      dark: '#152a45',
    },
    secondary: {
      main: '#0d9488',
    },
    background: {
      default: '#f0f2f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },
  typography: {
    fontFamily: '"DM Sans", "Source Sans 3", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { lineHeight: 1.6 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

lightTheme.typography.h1 = {
  ...lightTheme.typography.h1,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.h2 = {
  ...lightTheme.typography.h2,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.h3 = {
  ...lightTheme.typography.h3,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.h4 = {
  ...lightTheme.typography.h4,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.h5 = {
  ...lightTheme.typography.h5,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.h6 = {
  ...lightTheme.typography.h6,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.subtitle1 = {
  ...lightTheme.typography.subtitle1,
  color: lightTheme.palette.text.secondary,
};
lightTheme.typography.body1 = {
  ...lightTheme.typography.body1,
  color: lightTheme.palette.text.primary,
};
lightTheme.typography.body2 = {
  ...lightTheme.typography.body2,
  color: lightTheme.palette.text.secondary,
};

/** Dark theme for portfolio */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa',
      light: '#93c5fd',
      dark: '#3b82f6',
    },
    secondary: {
      main: '#14b8a6',
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
    divider: 'rgba(148, 163, 184, 0.12)',
  },
  typography: {
    fontFamily: '"DM Sans", "Source Sans 3", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 600, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    subtitle1: { lineHeight: 1.6 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

darkTheme.typography.h1 = {
  ...darkTheme.typography.h1,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.h2 = {
  ...darkTheme.typography.h2,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.h3 = {
  ...darkTheme.typography.h3,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.h4 = {
  ...darkTheme.typography.h4,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.h5 = {
  ...darkTheme.typography.h5,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.h6 = {
  ...darkTheme.typography.h6,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.subtitle1 = {
  ...darkTheme.typography.subtitle1,
  color: darkTheme.palette.text.secondary,
};
darkTheme.typography.body1 = {
  ...darkTheme.typography.body1,
  color: darkTheme.palette.text.primary,
};
darkTheme.typography.body2 = {
  ...darkTheme.typography.body2,
  color: darkTheme.palette.text.secondary,
};

/** Portfolio-style theme: restrained palette, readable type, light cards with borders. */
export const appTheme = lightTheme;

export { lightTheme, darkTheme };
