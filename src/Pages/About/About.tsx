import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { openLink } from '../../assets/helperFunctions';
import classes from './About.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';

const summary = <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, p: 2, ml: 1, mr: 1 }}>
Hello, My name is Ian Shinbrot. I am currently a Consultant at World Services working with Micro services, Java, Spring Boot, React, and AWS.
<br />
Throughout my profesional career I have worked as both a software developer and consultant in  projects that took me all over the Globe, from the United States, Australia, and Canada.<br/>
I've had many opportunities to work with with Senior Leadership and various stakeholders in solving complex problems in the implementation, and pre-sales cycle for many projects.
I have a proven and consistent track record of leading cross-funtional teams to ensure alignment with strategic initiatives, technical direction, and delivery to Senior Leadership at various firms in the Insurance and Financial Services sector.  <br/>
While leading projects as a consultant, I have completed my MBA at Villanova Unviersity with a focus in Strategic Management.<br/>
In addition to my work and studies, I have also continue to run various races, write a variety of poetry, and maintain an active blog of my many travels.
Throughout my career I have dabbled in many technologies ranging from Java, Spring Boot, Hibernate, Typescript, AWS, Azure, Power Platform, SSIS, SAML, Visio, Power Virtual Agent, Dynamics 365, Weblogic, Websphere, Confluence and XSLT. <br/>
I am always on the lookout for new technologies and tools by reading blogs such as CNET, Engadget, Udemy, Medium, etc.
</Typography>;

const workExperienceSummary = <Box>
    <Typography variant="h5" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>Whitespace/World Services</Typography>
    <Typography variant="body1" paragraph>
    I currently work at Whitespace/World Services as a Senior Software Engineer and Product Incident Lead.
    We work in an Agile Scrum Environment (Kanban) and use JIRA for project management.
    The project utilizes Microservices architecture and is built with Spring Boot, React, and AWS. This project is in the public sector.
    I previously build a POC utilizng React, Spring Boot, and AWS to develop a web application.
    I additionally scraped data from a website and used it to populate a database using Java and Spring Boot.
    </Typography>

    <Typography variant="h5" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>CapTech Consulting</Typography>
    <Typography variant="body1" paragraph>
            I previously worked at CapTech Consulting and focus on the Financial Services Sector as a Developor and Analyst. <br/>
            I led a multi-year project in modernizing Authentication-based API's from SOAP to REST in all areas, including development, requirement gathering, and working on quarterly roadmaps to ensure a successful delivery.
          <br/>
          The tools used in this project were JIRA, Confluence, JAVA, Swagger, and Spring Boot
            I led the Fraud/Disputes initiatves in the integration space in the communication of a Dynamics 365 Appliaction, Mulesoft, and VROL (Visa Resolve Online) with Restful Services. <br/>
            I led the Microsoft Power Platform efforts in the utilization of various services such as Power Virtual Agent, Power Automate, and Azure OpenAI toward the implementation of a conversational AI Chatbot. <br/>
            I led the initiative to orchestrate engaging technical discussions with various SMEs to foster innovation and cultivate meaningful relationships for future implementation initiatives. <br/>
            I optimized the onboarding process for multiple Account Management Teams by designing and implementing Sharepoint pages to enhance knowledge accessbility and collobration across all account projects.
            I worked with Salesforce and Apex in Integrating APIs into the Salesforce environment to allow for better data management and reporting. <br/>
            I led the initiative for the Systems Integration Practice Area on CapTech University to create a comprehensive curriculum for new hires and existing employees to learn about the various tools and technologies used in the Systems Integration space. <br/>
    </Typography>
    
    <Typography variant="h5" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>Equisoft</Typography>
    <Typography variant="body1" paragraph>
    I worked at Equisoft as a consultant specializing in the Life Insurance Industry. I have worked with many clients in modernizing their infrastructure using technologies such as SAML, SSIS, Microsoft Azure, and XSLT to improve clients performance by a minimum of 10%.
I have led global teams with implementations and business processes in modernizing companies infrastructure and integrate digital with the data driven OIPA Application in a Saas environment. I worked with SSIS and Azure Data Factory to generate 100s of reports and view data and allow for quicker information gathering related to gathering many different types of claims
I assisted in mentoring new hires, as well as the various client teams in utilizing the OIPA application. I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services.
I designed and implemented a new migration strategy for multiple projects using Equisoft Design to improve environment configurations by 30%. The main languages and frameworks I worked on have been Azure, Spring, Hibernate, and Java.
    </Typography>
    
    <Typography variant="h5" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>Lockheed Martin</Typography>
    <Typography variant="body1" paragraph>
              I worked at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system. <br/>
              I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks <br/>
              with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions
    </Typography>
</Box>;

type CardItem = {
  title: string;
  description: string;
  linkTitle: string;
  click: () => void;
}

const About: React.FC = () => {
    const displayModal = () => {
        setShowModal(!showModal);
    }

    const [showModal, setShowModal] = useState(false)
    const AboutList: CardItem[] = [
        {
            title: 'Work Experience',
            description: ' I worked at many companies throughout the years. Click to see more information.',
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




