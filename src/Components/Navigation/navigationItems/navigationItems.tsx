import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

interface page  {
    title: any,
    icon: any
}
interface pages extends Array<page>{}

const navigationItems = (props: pages) => {
    return (
        <List>
                 {props.map((item, index) => {
                    return (
                    <ListItemButton key={item.title} component={Link} to={item.title}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title}
                             />
                                    </ListItemButton>
                    )
                })}
        </List>
    )
}

export default navigationItems;