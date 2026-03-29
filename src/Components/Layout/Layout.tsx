import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../../hoc/header/header';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import Poetry from '../../Pages/Poetry/Poetry';
import Blog from '../../Pages/Blog/Blog';
import PhillySchvitzers from '../../Pages/PhillySchvitzers/PhillySchvitzers';

/** Empty in `npm start` so http://localhost:3000/ works; `/website` on production build for GitHub Pages. */
const routerBasename = (process.env.PUBLIC_URL || '').replace(/\/$/, '');

const Layout: React.FC = () => {
  return (
      <BrowserRouter basename={routerBasename}>
        <Header />
        <Box
          component="main"
          sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            pt: { xs: 10, sm: 11 },
            pb: 6,
          }}
        >
          <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Projects" element={<Projects/>} />
              <Route path="/Poetry" element={<Poetry/>} /> 
              <Route path="/Blog" element={<Blog/>} />
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/PhillySchvitzers" element={<PhillySchvitzers/>} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
  );
}

export default Layout;

