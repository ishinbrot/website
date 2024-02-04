import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
                    <ListItem button key={item.title}  component={Link} to={item.title}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title}
                             />
                                    </ListItem>
                    )
                })}
        </List>
    )
}

export default navigationItems;