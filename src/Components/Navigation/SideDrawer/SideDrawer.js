import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import navigationItems from '../navigationItems/navigationItems';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const SideDrawer = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({

        open: false
    });

    const toggleDrawer = open => event => {

        setState({ ...state, open: !state.open });
    };


    const list = () => (

        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                    <ListItem button key='Home'  onClick={() => props.click("Home")} component={Link} to="Home">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary='Home'
                            onClick={() => props.click("Home")} />
                    </ListItem>
                
                    <ListItem button key='About'  onClick={() => props.click("About")} component={Link} to="about">
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary='About'
                        />
                    </ListItem>
                
                    <ListItem button key='Projects'  onClick={() => props.click("Projects")} component={Link} to="Projects">
                        <ListItemIcon><WorkIcon /></ListItemIcon>
                        <ListItemText primary='Projects'
                        />
                    </ListItem>
            
                    <ListItem button key='Contact'  onClick={() => props.click("Contact")} component={Link} to="Contact">
                        <ListItemIcon><EmailIcon /></ListItemIcon>
                        <ListItemText primary='Contact'
                        />
                    </ListItem>
            </List>
        </div >
    );
    return (
        <div onClick={toggleDrawer(true)}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                <MenuIcon />
            </IconButton>
            <Drawer anchor={'left'} open={state.open} onClose={toggleDrawer(false)}>
                {list('left')}
            </Drawer>
        </div>
    );
}
export default SideDrawer;