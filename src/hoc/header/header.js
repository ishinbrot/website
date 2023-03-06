import React from 'react';
import { makeStyles } from '@mui/styles';
import { Toolbar, AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/ContactsOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooksOutlined';
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
// update for react hooks 
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