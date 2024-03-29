import React, { useState } from 'react';


import { openLink } from '../../assets/helperFunctions'
import classes from './About.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';


const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently a Consultant at CapTech Consulting focusing in the Financial Services sector.
<br />
Throughout my profesional career I have worked as a consultant in global projects that took me all over the Globe, from the United States, Australia, and Canada.<br/>
I've had many opportunities to work with with Senior Leadership and various stakeholders in solving complex problems in the implementation, and pre-sales cycle for many projects.
I have a proven and consistent track record of leading cross-funtional teams to ensure alignment with strategic initiatives, technical direction, and delivery to Senior Leadership at various firms in the Insurance and Financial Services sector.  <br/>
While leading projects as a consultant, I have completed my MBA at Villanova Unviersity with a focus in Strategic Management.<br/>
In addition to my work and studies, I have also continue to run various races, write a variety of poetry, and maintain an active blog of my many travels.
Throughout my career I have dabbled in many technologies ranging from Java, Spring Boot, Hibernate, Power Platform, SSIS, SAML, Visio, Power Virtual Agent, Dynamics 365, Weblogic, Websphere, Confluence and XSLT. <br/>
I am always on the lookout for new technologies and tools by reading blogs such as CNET, Engadget, Udemy, Medium, etc.
</p>


const workExperienceSummary = <div>
    <h4>CapTech Consulting</h4>
            I currently work at CapTech Consulting and focus on the Financial Services Sector as a Developor and Analyst. <br/>
            I led a multi-year project in modernizing Authentication-based API's from SOAP to REST in all areas, including development, requirement gathering, and working on quarterly roadmaps to ensure a successful delivery.
          <br/>
          The tools used in this project were JIRA, Confluence, JAVA, Swagger, and Spring Boot
            I led the Fraud/Disputes initiatves in the integration space in the communication of a Dynamics 365 Appliaction, Mulesoft, and VROL (Visa Resolve Online) with Restful Services. <br/>
            I led the Microsoft Power Platform efforts in the utilization of various services such as Power Virtual Agent, Power Automate, and Azure OpenAI toward the implementation of a conversational AI Chatbot. <br/>
            I led the initiative to orchestrate engaging technical discussions with various SMEs to foster innovation and cultivate meaningful relationships for future implementation initiatives. <br/>
            I optimized the onboarding process for multiple Account Management Teams by designing and implementing Sharepoint pages to enhance knowledge accessbility and collobration across all account projects.
    <h4>Equisoft</h4>
    I worked at Equisoft as a consultant specializing in the Life Insurance Industry. I have worked with many clients in modernizing their infrastructure using technologies such as SAML, SSIS, Microsoft Azure, and XSLT to improve clients performance by a minimum of 10%.
I have led global teams with implementations and business processes in modernizing companies infrastructure and integrate digital with the data driven OIPA Application in a Saas environment. I worked with SSIS and Azure Data Factory to generate 100s of reports and view data and allow for quicker information gathering related to gathering many different types of claims
I assisted in mentoring new hires, as well as the various client teams in utilizing the OIPA application. I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services.
I designed and implemented a new migration strategy for multiple projects using Equisoft Design to improve environment configurations by 30%. The main languages and frameworks I worked on have been Azure, Spring, Hibernate, and Java.
<h4>Lockheed Martin</h4>
              I worked at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system. <br/>
              I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks <br/>
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