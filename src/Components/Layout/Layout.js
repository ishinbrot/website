import React, {useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Header from '../../hoc/header/header'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';

const Layout = (props) => {


  return (
    <BrowserRouter className="App">
      <Header/>
      <Switch>
      <Route path="/Home" component={Home} exact />
        <Route path="/About" component={About} exact/>
        <Route path="/Projects" component={Projects} exact />
        <Route path="/Contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Layout;
