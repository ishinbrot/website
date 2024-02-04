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
const pages = [
    {title: 'Home', icon: <HomeIcon/>},
    {title:'About',icon: <HomeIcon/>}, 
{title: 'Projects',icon: <WorkIcon/>}, 
{title: 'Blog', icon: <WorkIcon/>},
{title:'Poetry',icon:<WorkIcon />}, 
{ title:'Contact', icon: <EmailIcon />}, 
];

const SideDrawer = () => {
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
                
                {pages.map((item, index) => {
                    return (
                    <ListItem button key={item.title}  component={Link} to={item.title}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title}
                             />
                                    </ListItem>
                    )
                })}
            
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