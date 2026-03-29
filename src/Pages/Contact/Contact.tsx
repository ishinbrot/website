import React from 'react';
import classes from './Contact.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import { openLink } from '../../assets/helperFunctions';

type CardItem = {
  title: string;
  description: string;
  linkTitle: string;
  click: () => void;
}

const summary = <p className={classes.Summary}>
My email address is ianshinbro@gmail.com
Feel free to click the button below to email me.</p>;

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
      <div>
          {summary}
          <GridComponent cards={ContactCard as any}/>
      </div >
  );
}
export default Contact;




