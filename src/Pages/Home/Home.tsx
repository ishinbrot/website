import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GridComponent from '../../Components/GridComponent/GridComponent';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const homeCards = [
    {
      title: 'Projects',
      description: 'Explore software projects and applications I have built.',
      linkTitle: 'View Projects',
      path: '/Projects',
    },
    {
      title: 'About Me',
      description: 'Learn more about my experience, skills, and background.',
      linkTitle: 'About Me',
      path: '/About',
    },
    {
      title: 'Blog',
      description: 'Read articles about technology, projects, and things I am learning.',
      linkTitle: 'Read Articles',
      path: '/Blog',
    },
    {
      title: 'Poetry',
      description: 'Browse poems I have written over the years.',
      linkTitle: 'Read Poetry',
      path: '/Poetry',
    },
    {
      title: 'Philly Schvitzers',
      description: 'Find out about the Philadelphia running group I started.',
      linkTitle: 'Meet the Group',
      path: '/PhillySchvitzers',
    },
    {
      title: 'Contact',
      description: 'Get in touch with me.',
      linkTitle: 'Contact Me',
      path: '/Contact',
    },
  ].map(({ path, ...card }) => ({
    ...card,
    link: () => {},
    click: () => navigate(path),
  }));

  return (
    <Box>
      <Box sx={{ mb: { xs: 4, sm: 6 } }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: '-0.03em',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Ian Shinbrot
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, mb: 3, lineHeight: 1.8 }}
        >
          Vice President at BNY · Full-Stack Engineer · Philadelphia
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
          I build and lead software projects across financial services and enterprise technology.
          Outside of work, I write, run, and organize the Philly Schvitzers running group.
        </Typography>
        <Divider />
      </Box>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
        Explore
      </Typography>
      <GridComponent cards={homeCards} />
    </Box>
  );
};

export default Home;
