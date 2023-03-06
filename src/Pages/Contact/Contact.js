import React from 'react';
import classes from './Contact.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import { openLink } from '../../assets/helperFunctions'

const summary = <p className={classes.Summary}>
My email address is ianshinbro@gmail.com
Feel free to click the button below to email me.</p>;

const ContactCard = [
    {
        title: 'Contact Information',
        description: "Please click the link below to send me an email.",
        linkTitle: 'Email',
        click: () => openLink("mailto:ianshinbro@gmail.com?Subject=Website Feedback")
        
    }
]

const Contact = props => {
    return (
        <div>
            {summary}
            <GridComponent cards={ContactCard}/>
        </div >
    );
}
export default Contact;