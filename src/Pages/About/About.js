import React, { useState } from 'react';


import { openLink } from '../../assets/helperFunctions'
import classes from './About.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';


const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently a Senior Consultant at CapTech Ventures.
<br />
I graduated from Drexel in June 2016 with a bachelors degree in Computer Science. I received a certification in Amazon Web Services Cloud Architect as of March 2021.
I received a certification in Amazon Cloud Practicioner in December 2020.  <br/>
I am curently purusing my Masters of Business Administration at Villanova and expect to graduate in 2024.</p>;

const workExperienceSummary = <div>
    <h4>CapTech Ventures</h4>
            I have recently started working at CapTech Ventures as a Senior Consultant. I will update in the near future.
    <h4>Equisoft</h4>
              I worked at Equisoft as a Software Developer working as a software consultant on various clients for the OIPA (Oracle Insurance Administration for Life and Annuitites) product.
              I assisted in mentoring new hires, as well as the various client teams in utilizing the OIPA application.
              I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services.
              The main languages and frameworks I worked on have been Spring, Hibernate, Java.

<h4>Lockheed Martin</h4>
              I worked at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system.
              I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks
              with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions
   <h4>NextDocs</h4>
              I worked at NextDocs  during the summers of March-September 2014-2015.
              NextDocs was acquired by Aurea during my third co-op in June 2015.
              At NextDocs I worked on the NextDocs Suite of Applications consisting of the Regulatory, SOP, and eTMF platforms.
              I was able to quickly learn C#, SQL, and improve my Javascript skills there. as well as my scripting skills.
</div>
const About = props => {

    const displayModal = () => {
        setShowModal(!showModal);
    }

    const [showModal, setShowModal] = useState(false)
    const AboutList = [
        {
            title: 'Work Experience',
            description: ' \I have worked at many companies throughout the years. Click to see more information.',
            linkTitle: 'More Information',
            click: () => { displayModal() }
        },{
            title: 'Resume',
            description: 'Please Check out my updated Resume',
            linkTitle: 'RESUME',
            click: () => openLink('https://github.com/ishinbrot/website/raw/master/src/IanShinbrotResume.pdf')
        }
    ]



    return (
        <div>
            {summary}
            <GridComponent cards={AboutList} />
            <CustomDialog display={showModal} click={displayModal} text={workExperienceSummary} title="Work Experience" />
        </div >
    );
}
export default About;