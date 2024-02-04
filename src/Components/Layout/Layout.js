import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../../hoc/header/header'
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import Poetry from '../../Pages/Poetry/Poetry';
import Blog from '../../Pages/Blog/Blog';

const Layout = () => {


  return (
  //  <HashRouter basename='/Home'>
      <BrowserRouter  basename="/website">
        <Header />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>}  />
          <Route path="/Projects" element={<Projects/>}  />
          <Route path="/Poetry" element={<Poetry/>}  /> 
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Contact" element={<Contact/>}  />
          <Route element={<Home/>} />
        </Routes>
      </BrowserRouter>
 //   </HashRouter>
  )
}

export default Layout;
