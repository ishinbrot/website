import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Header from '../../hoc/header/header'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import Poetry from '../../Pages/Poetry/Poetry';

const Layout = () => {


  return (
    <HashRouter basename='/Home'>
      <BrowserRouter  basename="/website">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About}  />
          <Route path="/Projects" component={Projects}  />
          <Route path="/Poetry" component={Poetry}  /> 
          <Route path="/Contact" component={Contact}  />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </HashRouter>
  )
}

export default Layout;
