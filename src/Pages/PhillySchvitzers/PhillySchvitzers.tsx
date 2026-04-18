import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import classes from './PhillySchvitzers.module.css';
import phillySchvitzersLogo from '../../PhillySchvitzersInstagramLogo.png';

const PhillySchvitzers: React.FC = () => {
  return (
    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
      <Grid item xs={12} md={5}>
        <Box className={classes.mediaColumn}>
          <Box
            component="figure"
            className={classes.mediaSlot}
            aria-label="Featured images — logo and rotating club photos"
          >
            <img
              src={phillySchvitzersLogo}
              alt="The Philly Schvitzers"
              className={classes.logoImage}
            />
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            component="p"
            className={classes.mediaCaption}
          >
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Box className={classes.textColumn}>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            <strong>The Philly Schvitzers</strong> is a running club I started in Philadelphia—built
            around group runs, good company, and embracing the schvitz (the sweat that comes with putting
            in the miles). Whether you are training for Broad Street, a half marathon, or just want a
            regular crew to run with, you are welcome to join us.
          </Typography>
          <Box component="section" sx={{ mb: 3 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 600 }}>What we are about</Typography>
            <Typography variant="body1" paragraph>
              We meet up to run together, hold each other accountable, and enjoy Philly's neighborhoods on
              foot. The vibe is supportive: show up as you are, run your pace, and stay for the post-run
              stories when the schedule allows.
            </Typography>
          </Box>
          <Box component="section">
            <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 600 }}>Get in touch</Typography>
            <Typography variant="body1" paragraph>
              Follow{' '}
              <Link
                href="https://www.instagram.com/thephillyschvitzers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Philly Schvitzers on Instagram
              </Link>{' '}
              for updates, runs, and photos.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PhillySchvitzers;
