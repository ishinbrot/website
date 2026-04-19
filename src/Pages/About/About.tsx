import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { openLink } from '../../assets/helperFunctions';
import classes from './About.module.css';
import GridComponent from '../../Components/GridComponent/GridComponent';
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';

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
        <Box>
            {/* Intro Section */}
            <Box sx={{ mb: 6 }}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        mb: 2,
                    }}
                >
                    About Me
                </Typography>
                <Typography
                    variant="h5"
                    component="p"
                    sx={{
                        color: 'text.secondary',
                        fontWeight: 400,
                        mb: 4,
                        lineHeight: 1.8,
                    }}
                >
                    Software Engineer & Consultant with a passion for building scalable systems, leading teams, and solving complex problems across the insurance and financial services sectors.
                </Typography>
                <Divider sx={{ mb: 4 }} />
            </Box>

            {/* Professional Summary */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                    Professional Summary
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 2 }}>
                    I'm a Senior Software Engineer and Consultant currently at Whitespace/World Services, specializing in microservices architecture, Java, Spring Boot, React, and AWS. With over a decade of professional experience, I've worked on mission-critical systems across the United States, Australia, and Canada—helping organizations modernize their infrastructure and solve complex business problems.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, mb: 2 }}>
                    I hold an MBA from Villanova University with a focus on Strategic Management, which has shaped my approach to balancing technical excellence with business impact. Throughout my career, I've led cross-functional teams, conducted pre-sales technical consultations, and delivered transformative projects for some of the industry's leading firms.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    Beyond work, I'm an avid runner (part of the Philly Schvitzers running community), writer of poetry, and passionate about exploring new technologies through reading, online courses, and hands-on experimentation.
                </Typography>
            </Box>

            {/* Skills & Technologies */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                    Technical Skills
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    <strong>Languages & Frameworks:</strong> Java, Spring Boot, TypeScript, React, C++, Bash<br/>
                    <strong>Cloud & Infrastructure:</strong> AWS, Microsoft Azure, Docker, Microservices Architecture<br/>
                    <strong>Integration & Data:</strong> Mulesoft, SSIS, Azure Data Factory, REST/SOAP APIs, SAML<br/>
                    <strong>Enterprise Tools:</strong> Salesforce/Apex, Power Platform (Power Automate, Power Virtual Agent, Power BI), Dynamics 365, Azure OpenAI<br/>
                    <strong>Project Management:</strong> JIRA, Confluence, Agile/Scrum, Kanban<br/>
                </Typography>
            </Box>

            {/* Quick Access Section */}
            <Divider sx={{ my: 4 }} />
            <GridComponent cards={AboutList} />
            <CustomDialog display={showModal} click={displayModal} text={workExperienceSummary} title="Work Experience" />
        </Box>
    );
}
export default About;

