import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { openLink } from '../../assets/helperFunctions';
import classes from './Projects.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import Divider from '@mui/material/Divider';

type CardItem = {
  title: string;
  description: string;
  linkTitle: string;
  click: () => void;
}

const webProjectsSummary = <Box sx={{ mb: 4 }}>
    <Typography variant="h4" component="h2" sx={{ mb: 1, fontWeight: 600 }}>Web Projects</Typography>
    <Typography variant="body1">Please check out some of my programming projects below</Typography>
</Box>;

const WebProjectList: CardItem[] = [
    {
        title: 'Virtual Pest',
        description: "The Virtual Pest is very similar to a Tamagotchi. The 'pest' has 5 different states that it can show based on the actions the user chooses. This utilizes REACT.",
        linkTitle: 'Virtual Pest',
        click: () => openLink("https://ishinbrot.github.io/virtual_pest/")
    }, {
        title: 'CollegeSearch',
        description: "This is my senior project. I worked on the front-end of the application using both HTML and Angular Material 1.0 based in Angular-JS." +
            "It is a college search application that allows you to search for colleges. It currently doesn't run on github pages." +
            "This links to the github location of the repository.",
        linkTitle: 'CollegeSearch',
        click: () => openLink('https://github.com/DrexelSeniorDesign2016Team8/FrontEnd')
    }
]

const reactNavtiveProjectSummary = <Box sx={{ mb: 4 }}>
    <Typography variant="h4" component="h2" sx={{ mb: 1, fontWeight: 600 }}>ReactNative Applications</Typography>
    <Typography variant="body1">These are reactNative apps meant to be compatible with the iOS and Android OS. Only the Android APK appears below</Typography>
</Box>;
const reactNativeProjectList: CardItem[] = [
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

const Projects: React.FC = () => {
  return (
      <Box>
          <Box sx={{ mb: 4 }}>
              <Typography variant="body1" paragraph>This page show-cases the many programming projects I have done throughout my undergraduate and early career.</Typography>
              <Button variant="outlined" onClick={() => { return window.location.href = "https://github.com/ishinbrot" }}>LINK TO GITHUB</Button>
          </Box>
          {webProjectsSummary}
          <GridComponent cards={WebProjectList} />
          {reactNavtiveProjectSummary}
          <GridComponent cards={reactNativeProjectList} />
          <Divider />
      </Box >
  );
}
export default Projects;




