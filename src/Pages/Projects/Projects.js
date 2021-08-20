import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { openLink } from '../../assets/helperFunctions'
import classes from './Projects.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import Divider from '@material-ui/core/Divider';

let projectList;
const webProjectsSummary = <div className={classes.Summary}>
    <h2>Web Projects</h2><p>Please check out some of my projects below</p>
</div>;


const WebProjectList = [
    {
        title: 'Virtual Pest',
        description: "The Virtual Pest is very similar to a Tamagotchi. The 'pest' has 5 different states that it can show based on the actions the user chooses. This utilizes REACT.",
        linkTitle: 'Virtual Pest',
        click: () => openLink("https://ishinbrot.github.io/virtual_pest/")
    }, {
        title: 'CollegeSearch',
        description: "This is my senior project. I worked on the front-end of the application using both HTML and Angular Material 1.0 based in Angular-JS."
            + "It is a college search application that allows you to search for colleges. It currently doesn't run on github pages."
            + "This links to the github location of the repository.",
        linkTitle: 'CollegeSearch',
        click: () => openLink('https://github.com/DrexelSeniorDesign2016Team8/FrontEnd')
    }
]

const reactNavtiveProjectSummary = <div className={classes.Summary}>
    <h2>ReactNative Applications</h2>
    <p className={classes.Summary}>These are reactNative apps meant to be compatible with the iOS and Android OS. Only the Android APK appears below
</p></div>;
const reactNativeProjectList = [
    {
        title: 'SHOP',
        description: "This application allows you to add items to a shopping list and create new orders. The application supports multiple users and everything is stored on firebase.",
        linkTitle: 'Download',
        click: () => openLink('https://github.com/ishinbrot/website/blob/master/src/Pages/Projects/SHOP.apk')
    },
    {
        title: 'Places',
        description: "This application allows you to take a picture and specify a location where the picture was taken. The phone is able to locate you by GPS, or you are able to select a location from google maps.",
        linkTitle: 'Download',
        click: () => openLink('https://github.com/ishinbrot/website/blob/master/src/Pages/Projects/SHOP.apk')
    },
]

const Projects = props => {
    return (
        <div>
            <div className={classes.Header}>
                <p>This page is under active development. Please click the following button to be directed to my github page</p>
                <Button className={classes.Header} variant="outlined" onClick={() => { return window.location.href = "https://github.com/ishinbrot" }}>LINK TO GITHUB</Button>
            </div>
            {webProjectsSummary}
            <GridComponent cards={WebProjectList} />
            {reactNavtiveProjectSummary}
            <GridComponent cards={reactNativeProjectList} />
            <Divider />

         

        </div >
    );
}
export default Projects;