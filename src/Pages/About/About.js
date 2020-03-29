import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import classes from './About.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently an Software Developer at Equisoft.
<br/>
I graduated from Drexel in June 2016 with a bachelors degree in Computer Science. At Drexel, I have completed three different co-ops, 6-month internships.
My first co-op was at Independence Blue Cross, while my second and third co-op were both at NextDocs, which was acquired by Aurea during my third co-op.
Please click one of the below links to learn more information.</p>;

const AboutList = [
    {
        title: 'Work Experience',
        description: ' \I have worked at many companies throughout the years. Click to see more information.',
        linkTitle: 'More Information'
    }, {
        title: 'Projects',
        description: 'Click to view my projects',
        linkTitle: 'Projects'
    }, {
        title: 'Resume',
        description: 'Please Check out my updated Resume',
        linkTitle: 'RESUME'
    }
]
const Contact = props => {
    return (
        <div>
            {summary}
            <GridComponent cards={AboutList}/>
        </div >
    );
}
export default Contact;