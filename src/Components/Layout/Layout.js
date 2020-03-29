import React, {useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../../hoc/header/header'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';

const Layout = (props) => {

  const [currentPage, setCurrentPage] = useState('About - Ian Shinbrot')

  const pageHandler = (PageName) => {
    setCurrentPage(PageName + ' - Ian Shinbrot');
  }
  return (
    <BrowserRouter className="App">
      <Header currentPage={currentPage} click={pageHandler} />
      <Switch>
      <Route path="/Home" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Projects" component={Projects} exact />
        <Route path="/Contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Layout;
