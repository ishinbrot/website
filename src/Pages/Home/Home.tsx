import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Home: React.FC = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 600,
          letterSpacing: '-0.03em',
          mb: 1,
        }}
      >
        Ian Shinbrot
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ mb: 3, maxWidth: 520 }}
      >
        Consultant · Philadelphia · projects, writing & running
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        Hello — welcome to my portfolio site. I am currently a Technical Lead at World Services.
        This site highlights projects, blog snippets, poetry, and the Philly Schvitzers running group.
      </Typography>
      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        The site is built with React, TypeScript, and Material UI (last updated August 2026). Many posts
        link out to full articles on Medium. GitHub projects are fetched from GitHub's API and displayed here. The poetry section is powered by Supabase, which serves as a backend database for storing and retrieving poems.
        Use the menu to explore, and reach out via Contact if you
        have feedback.
      </Typography>
    </Box>
  );
};

export default Home;
