import React, { FC } from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, Divider } from '@mui/material/';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { appTheme } from '../../theme';

const useStyles = makeStyles(
  (theme: any) => ({
    footer: {
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid rgba(15, 23, 42, 0.08)',
      marginTop: 'auto',
      mt: 8,
    },
    socialIcon: {
      fontSize: '1.5rem',
      color: theme.palette.text.primary,
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  }),
  { defaultTheme: appTheme }
);

/**
 * Footer component - displays footer with social links, navigation, and copyright
 */
const Footer: FC = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" className={classes.footer} sx={{ py: 6 }}>
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Social Links */}
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          <MuiLink
            href="https://github.com/ishinbrot"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <GitHubIcon className={classes.socialIcon} />
          </MuiLink>
          <MuiLink
            href="https://www.linkedin.com/in/ianshinbrot/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <LinkedInIcon className={classes.socialIcon} />
          </MuiLink>
          <MuiLink
            href="mailto:ianshinbro@gmail.com"
            title="Send Email"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <EmailIcon className={classes.socialIcon} />
          </MuiLink>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Quick Links */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          <MuiLink component={RouterLink} to="/" className={classes.link}>
            Home
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <MuiLink component={RouterLink} to="/About" className={classes.link}>
            About
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <MuiLink component={RouterLink} to="/Projects" className={classes.link}>
            Projects
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <MuiLink component={RouterLink} to="/Contact" className={classes.link}>
            Contact
          </MuiLink>
        </Stack>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ fontSize: '0.85rem' }}
        >
          © {currentYear} Ian Shinbrot. All rights reserved.
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          align="center"
          sx={{ display: 'block', mt: 1, fontSize: '0.8rem' }}
        >
          Built with React, TypeScript, and Material UI
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
