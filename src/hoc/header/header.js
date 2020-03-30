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

  const pageName = (location.pathname).includes('/')  ? 'Home   -   Ian Shinbrot'
  : location.pathname.replace("/",'') +"  -   Ian Shinbrot";

  
  return (
    
    <div className={classes.root}>
      
      <AppBar position="fixed">
        <Toolbar>
          <SideDrawer click={props.click}/>
         
          <Typography variant="h6" className={classes.title}>
           {pageName}
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}