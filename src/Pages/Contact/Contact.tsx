import React from 'react';
import { Box, Typography } from '@mui/material';
import classes from './Contact.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import { openLink } from '../../assets/helperFunctions';

type CardItem = {
  title: string;
  description: string;
  linkTitle: string;
  click: () => void;
}

const summary = <Typography variant="body1" paragraph sx={{ ml: 2, mr: 2 }}>
My email address is ianshinbro@gmail.com
<br />
Feel free to click the button below to email me.</Typography>;

const ContactCard: CardItem[] = [
    {
        title: 'Contact Information',
        description: 'Please click the link below to send me an email.',
        linkTitle: 'Email',
        click: () => openLink('mailto:ianshinbro@gmail.com?Subject=Website Feedback')
        
    }
]

const Contact: React.FC = () => {
  return (
      <Box>
          {summary}
          <GridComponent cards={ContactCard as any}/>
      </Box >
  );
}
export default Contact;




