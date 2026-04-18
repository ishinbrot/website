import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import type { Theme } from '@mui/material/styles';
import { appTheme } from '../../../theme';

type NavigationItem = {
  title: string;
  icon?: React.ReactNode;
};

type SideDrawerProps = {
  pages: NavigationItem[];
};

const useStyles = makeStyles(
    (theme: Theme) => ({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: theme.palette.text.primary,
        },
        activeListItem: {
            backgroundColor: theme.palette.action.selected,
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            '&:hover': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
    { defaultTheme: appTheme }
);

const SideDrawer: React.FC<SideDrawerProps> = ({ pages }) => {
    const classes = useStyles();
    const location = useLocation();
    const [state, setState] = React.useState({
        open: false
    });

    /**
     * Determine if a page is the active page based on current location
     */
    const isActivePage = (pageTitle: string): boolean => {
        const currentPath = location.pathname.replace(/^\/$/, 'Home').replace(/^\//, '');
        return currentPath.toLowerCase() === pageTitle.toLowerCase();
    };

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        setState({ ...state, open: !state.open });
    };

    const list = (anchor: 'left' | 'right' | 'top' | 'bottom', items: NavigationItem[]) => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {items.map((item) => {
                    const isActive = isActivePage(item.title);
                    return (
                    <ListItemButton 
                        key={item.title} 
                        component={Link} 
                        to={item.title}
                        className={isActive ? classes.activeListItem : ''}
                        selected={isActive}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
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
                {list('left', pages)}
            </Drawer>
        </div>
    );
}
export default SideDrawer;


