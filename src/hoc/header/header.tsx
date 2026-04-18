import React, { useState, ReactNode, FC } from 'react';
import { makeStyles } from '@mui/styles';
import { appTheme } from '../../theme';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import { useLocation } from 'react-router-dom';
import { useThemeMode } from '../../context/ThemeContext';

/**
 * Type definitions for the Header component
 */
interface PageLabels {
  [key: string]: string;
}

interface PageItem {
  title: string;
  icon: ReactNode;
}

interface HeaderProps {
  click?: () => void;
}

/**
 * Page labels mapping
 */
const PAGE_LABELS: PageLabels = {
  Home: 'Home',
  About: 'About',
  Projects: 'Projects',
  Blog: 'Blog',
  Poetry: 'Poetry',
  PhillySchvitzers: 'The Philly Schvitzers',
  Contact: 'Contact',
};

/**
 * Helper function to determine the current page label based on pathname
 */
function currentPageLabel(pathname: string): string {
  const raw = pathname.replace(/^\//, '').split('/')[0] || 'Home';
  const lookup = raw.toLowerCase();
  const entry = Object.keys(PAGE_LABELS).find(
    (key) => key.toLowerCase() === lookup
  );
  return entry ? PAGE_LABELS[entry] : raw;
}

/**
 * Material-UI styles for the Header component
 */
const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#ffffff',
    },
    appBar: {
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    toolbar: {
      minHeight: 64,
    },
    brand: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#ffffff',
    },
    pageLabel: {
      flexGrow: 1,
      textAlign: 'right',
      fontWeight: 500,
      color: '#ffffff',
      fontSize: '0.95rem',
    },
  }),
  { defaultTheme: appTheme }
);

/**
 * Navigation pages configuration
 */
const pages: PageItem[] = [
  { title: 'Home', icon: <HomeIcon /> },
  { title: 'About', icon: <HomeIcon /> },
  { title: 'Projects', icon: <WorkIcon /> },
  { title: 'Blog', icon: <WorkIcon /> },
  { title: 'Poetry', icon: <WorkIcon /> },
  { title: 'PhillySchvitzers', icon: <DirectionsRunIcon /> },
  { title: 'Contact', icon: <EmailIcon /> },
];

/**
 * Header component - displays the application header with navigation and login dialog
 */
const Header: FC<HeaderProps> = ({ click }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useThemeMode();

  /**
   * Toggles the side drawer open/closed
   */
  const handleToggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent
  ): void => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(true);
    console.log('Drawer was open.');
  };

  /**
   * Get the current page label
   */
  const pageLabel = currentPageLabel(location.pathname);

  /**
   * Opens the login dialog
   */
  const handleClickLogin = (): void => {
    setLoginDialogOpen(true);
  };

  /**
   * Closes the login dialog and resets loading state
   */
  const handleLoginClose = (): void => {
    setIsLoading(false);
    setLoginDialogOpen(false);
  };

  /**
   * Handles login button click
   */
  const handleLogin = (): void => {
    setIsLoading(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar
          className={classes.toolbar}
          disableGutters
          sx={{ px: { xs: 2, sm: 3 } }}
        >
          <SideDrawer pages={pages} />

          <Typography
            variant="h6"
            component="div"
            className={classes.brand}
            sx={{ flexGrow: 0 }}
          >
            Ian Shinbrot
          </Typography>
          <Typography
            variant="body2"
            component="span"
            className={classes.pageLabel}
          >
            {pageLabel}
          </Typography>
          <IconButton
            onClick={toggleDarkMode}
            color="inherit"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            sx={{ ml: 1 }}
          >
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          {true ? (
            <div></div>
          ) : (
            <Button color="inherit" onClick={handleClickLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Dialog
        open={loginDialogOpen}
        onClose={handleLoginClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>

        <DialogContent>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div>
              <DialogContentText>
                Please enter the username and password below
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
            </div>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleLoginClose}
            disabled={isLoading}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleLogin} disabled={isLoading} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
