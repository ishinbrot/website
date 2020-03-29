import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const navigationItems = (props) => {
    return (
        <List>
            <ListItem button key='Home'>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Home' />
            </ListItem>
            <ListItem button key='About'>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary='About' />
            </ListItem>
            <ListItem button key='Projects'>
                <ListItemIcon><WorkIcon /></ListItemIcon>
                <ListItemText primary='Projects' />
            </ListItem>
            <ListItem button key='Contact'>
                <ListItemIcon><EmailIcon /></ListItemIcon>
                <ListItemText primary='Contact' />
            </ListItem>
        </List>
    )
}

export default navigationItems;