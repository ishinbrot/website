import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import { Card } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import classes from './Projects.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import Divider from '@material-ui/core/Divider';
const webProjectsSummary = <div>
    <h2>Web Projects</h2><p className={classes.Summary}>Please check out some of my projects below</p>
</div>;


const WebProjectList = [
    {
        title: 'Virtual Pest',
        description: "The Virtual Pest is very similar to a Tamagotchi. The 'pest' has 5 different states that it can show based on the actions the user chooses.",
        linkTitle: 'Virtual Pest'
    }, {
        title: 'CollegeSearch',
        description: "This is my senior project. I worked on the front-end of the application using both HTML and Angular Material 1.0."
            + "It is a college search application that allows you to search for colleges. It currently doesn't run on github pages."
            + "This links to the github location of the repository.",
        linkTitle: 'CollegeSearch'
    }, {
        title: 'Resume',
        description: 'Please Check out my updated Resume',
        linkTitle: 'RESUME'
    }
]

const reactNavtiveProjectSummary = <div>
    <h2>ReactNative Applications</h2>
    <p className={classes.Summary}>These are reactNative apps meant to be compatible with the iOS and Android OS. Only the Android APK will be able to be downloaded
</p></div>;
const reactNativeProjectList = [
    {
        title: 'GuessANumber',
        description: "This application is a basic game that is two players. On the initial screen you are prompted to enter a number. On the second screen you can guess if the number is greater or lower",
        linkTitle: 'Download'
    }, 
]

const androidProjects = <div>
    <h2>Android Applications</h2>
    <p className={classes.Summary}>These Android Applications must be downloaded and installed on an Android phone to run. Make sure you check 'Unknown Sources' in the Security Settings so the applications can be installed.
</p></div>;

const AndroidProjectList = [
    {
        title: 'Septa Train Finder',
        description: "This application allows a user to find upcoming trains between two Septa stations. Septa is the Philadelphia Subway System. The user will select a starting station and ending station. Hitting TrainInfo will display the upcoming trains between the two stations. Long pressing a train will also inform you of the estimated arrival time, and actual time..",
        linkTitle: 'CS275_A2'
    }, {
        title: 'Parking Lot Database',
        description: "This program allows a user to add a custom parking lot to a database stored on cloudmine. The application can also display the list of lots added, edit the already existing lots, or find lots within 100 miles of the current location..",
        linkTitle: 'CS275_LAB3'
    }, {
        title: 'trackerBat',
        description: 'This program allows a user to track a baseball players progress. The application allows a player to have multiple games, and multiple at bats. As of January 2017 the application supports saving and full database functionality. If you download my application please leave any comments for the app from the contact page.',
        linkTitle: 'TRACKERBAT'
    }
]

const Projects = props => {
    return (
        <div>
            <p>This page is under active development. Please click the following button to be directed to my github page</p>
            <Button variant="outlined" onClick={()=>{return window.location.href="https://github.com/ishinbrot"}}>LINK TO GITHUB</Button>
            {webProjectsSummary}
            <GridComponent cards={WebProjectList} />
            <Divider />

            {reactNavtiveProjectSummary}
            <GridComponent cards={reactNativeProjectList} />
            <Divider />


            {androidProjects}
            <GridComponent cards={WebProjectList} />
            <Divider />
        </div >
    );
}
export default Projects;