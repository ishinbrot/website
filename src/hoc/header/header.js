import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'
import {useLocation} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

// update for react hooks 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  let location = useLocation();
  function handleClick(e) {
    e.preventDefault();
  
  }
  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(true);

    console.log('Drawer was open.');
  };

  const pageName = (location.pathname.length===1) ? "Home - Ian Shinbrot" : (location.pathname.substring(1,location.pathname.length)) + " - Ian Shinbrot";
  //const pageName = (location.pathname).includes('/')  ? 'Home   -   Ian Shinbrot'
  //: location.pathname.replace("/",'') +"  -   Ian Shinbrot";

  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickLogin = () => {
    setLoginDialogOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoading(false);
    setLoginDialogOpen(false);

  };
  const handleLogin = () => {
    setIsLoading(true);
  };
  return (
    
    <div className={classes.root}>
      
      <AppBar position="fixed">
        <Toolbar>
          <SideDrawer click={props.click}/>
         
          <Typography variant="h6" className={classes.title}>
           {pageName}
          </Typography>
  {true ?   <div></div>:   <Button color="inherit" onClick={setLoginDialogOpen}>Login</Button> }
        </Toolbar>
        
      </AppBar>
      <Dialog open={loginDialogOpen} onClose={handleLoginClose} aria-labelledby="form-dialog-title">
    /*  <DialogTitle id="form-dialog-title">Login</DialogTitle>
        
        <DialogContent>
        {isLoading ? <CircularProgress/>
        :
        <div> 
          <DialogContentText>
            Please enter the username and password below
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
             <TextField
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          /> </div>
        }
        </DialogContent>

        <DialogActions>
          <Button onClick={handleLoginClose} disabled={isLoading} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} disabled={isLoading} color="primary">
            Login
          </Button>
        </DialogActions>
        
      </Dialog>
      
    </div>
  );
}
// update for react hooks 
/*
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  title: {
    flexGrow: 1,
    textAlign: "right"
  },
  tabs: {
    textAlign: "center",
  },

}));


export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    
    <div className={classes.root}>
      
      <AppBar position="fixed" >
        <Toolbar>
        <Tabs value={value} onChange={handleChange}  className={classes.Tabs} indicatorColor="secondary">
        <Tooltip title="Home"><Tab icon={<HomeIcon  sx={{color:"white"}} />} component={Link} to="Home"/></Tooltip>
        <Tooltip title="About"><Tab icon={ <InfoIcon sx={{color:"white"}} /> }   component={Link} to="About"/></Tooltip>
        <Tooltip title="Projects"><Tab icon={<WorkIcon  sx={{color: "white"}}/>}  component={Link} to="Projects"/></Tooltip>
        <Tooltip title="Poetry"><Tab icon={<LibraryBooksIcon  sx={{color: "white"}}/>}   component={Link} to="Poetry"/></Tooltip>
        <Tooltip title="Contact"><Tab icon={<ContactsIcon  sx={{color: "white"}}/>}   component={Link} to="Contact"/></Tooltip>
      </Tabs>
    <Typography variant="h6" className={classes.title}>
           Ian Shinbrot
          </Typography>

        </Toolbar>
        
      </AppBar>
    </div>
  );
}
*/