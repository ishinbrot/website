import React, { FC } from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, Divider } from '@mui/material/';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

/**
 * Footer component - displays footer with social links, navigation, and copyright
 */
const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        marginTop: 'auto',
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Social Links */}
        <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
          <MuiLink
            href="https://github.com/ishinbrot"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.primary',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: '1.5rem' }} />
          </MuiLink>
          <MuiLink
            href="https://www.linkedin.com/in/ianshinbrot/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.primary',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: '1.5rem' }} />
          </MuiLink>
          <MuiLink
            href="mailto:ianshinbro@gmail.com"
            title="Send Email"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.primary',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <EmailIcon sx={{ fontSize: '1.5rem' }} />
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
          <MuiLink
            component={RouterLink}
            to="/"
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Home
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/About"
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            About
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/Projects"
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Projects
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            •
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/Contact"
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
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
