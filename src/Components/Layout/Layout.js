import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Header from '../../hoc/header/header'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';

const Layout = (props) => {


  return (
    <HashRouter basename='/Home'>
      <BrowserRouter className="App" basename="/website">
        <Header />
        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Projects" component={Projects} exact />
          <Route path="/Contact" component={Contact} exact />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </HashRouter>
  )
}

export default Layout;
