import React, { useState } from 'react';


import { openLink } from '../../assets/helperFunctions'
import classes from './About.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';


const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently a Senior Consultant at CapTech Ventures.
<br />
I am a passionate consultant with 7 years of experience focused on digital transformations and integrations in the insurance and financial services industry. 
I bring strong relationship building skills to influence and motivate teams. Effectively communicated and presented complex messages to clients at the executive level.
I am curently purusing my Masters of Business Administration with a focus in Strategic Management at Villanova and expect to graduate in May 2023.</p>;

const workExperienceSummary = <div>
    <h4>CapTech Ventures</h4>
I currently work as a Senior Consultant in the Financial Services Industry. I have been working in the Information Security Space and have been working with the client on modernizing their API's with requirements gathering, API development, and quarterly roadmaps.<br></br>
The API's are designed using modern REST technologies, such as Spring-boot and use Swagger for documentation.<br></br>
I faciliated the application deployment strategy for the new modernized applications with the Middleware and Testing Teams.
   <h4>Equisoft</h4>
              I worked at Equisoft as an Integration Consultant specializing in the Life Insurance Industry.
              I have worked with many clients in modernizing their infrastructure using technologies such as SAML, SSIS, Microsoft Azure, and XSLT to improve clients performance by a minimum of 10%.<br></br>
              I have led global teams with implementations and business processes in modernizing companies infrastructure and integrate digital with the data driven OIPA Application in a Saas environment.
              I worked with SSIS and Azure Data Factory to generate 100s of reports and view data and allow for quicker information gathering related to gathering many different types of claims<br/>
              I assisted in mentoring new hires, as well as the various client teams in utilizing the OIPA application.
              I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services.<br/>
              I designed and implemented a new migration strategy for multiple projects using Equisoft Design to improve environment configurations by 30%.
              The main languages and frameworks I worked on have been Azure, Spring, Hibernate, and Java.

<h4>Lockheed Martin</h4>
              I worked at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system.
              I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks
              with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions
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