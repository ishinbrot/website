import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { openLink } from '../../assets/helperFunctions';
import GridComponent from '../../Components/GridComponent/GridComponent';
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';

const workExperienceSummary = <Box>
    <Typography variant="h4" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>Whitespace/World Services</Typography>
    <Typography variant="body1" paragraph>
    I currently work at Whitespace/World Services as a Senior Software Engineer and Product Incident Lead. We work in an Agile Scrum Environment (Kanban) and use JIRA for project management. The project utilizes Microservices architecture and is built with Spring Boot, React, and AWS. This project is in the public sector. I previously built a POC utilizing React, Spring Boot, and AWS to develop a web application. I additionally scraped data from a website and used it to populate a database using Java and Spring Boot.
    </Typography>

    <Typography variant="h4" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>CapTech Consulting</Typography>
    <Typography variant="body2" paragraph sx={{ mb: 2 }}>
      I previously worked at CapTech Consulting focusing on the Financial Services Sector as a Developer and Analyst.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I led a multi-year project in modernizing Authentication-based APIs from SOAP to REST in all areas, including development, requirement gathering, and working on quarterly roadmaps to ensure a successful delivery. The tools used were JIRA, Confluence, Java, Swagger, and Spring Boot.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I led the Fraud/Disputes initiatives in the integration space for a Dynamics 365 Application, Mulesoft, and VROL (Visa Resolve Online) with Restful Services.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I led the Microsoft Power Platform efforts utilizing services such as Power Virtual Agent, Power Automate, and Azure OpenAI toward implementing a conversational AI Chatbot.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I led the initiative to orchestrate engaging technical discussions with various SMEs to foster innovation and cultivate meaningful relationships for future implementation initiatives.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I optimized the onboarding process for multiple Account Management Teams by designing and implementing SharePoint pages to enhance knowledge accessibility and collaboration across all account projects.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I worked with Salesforce and Apex in integrating APIs into the Salesforce environment to allow for better data management and reporting.
    </Typography>
    <Typography variant="body1" paragraph>
      I led the initiative for the Systems Integration Practice Area on CapTech University to create a comprehensive curriculum for new hires and existing employees to learn about the various tools and technologies used in the Systems Integration space.
    </Typography>
    
    <Typography variant="h4" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>Equisoft</Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I worked at Equisoft as a consultant specializing in the Life Insurance Industry. I have worked with many clients in modernizing their infrastructure using technologies such as SAML, SSIS, Microsoft Azure, and XSLT to improve client performance by a minimum of 10%.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I led global teams with implementations and business processes in modernizing company infrastructure and integrating digital with the data-driven OIPA Application in a SaaS environment. I worked with SSIS and Azure Data Factory to generate hundreds of reports and enable quicker information gathering related to various types of claims.
    </Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I assisted in mentoring new hires and various client teams in utilizing the OIPA application. I also implemented SSO solutions utilizing both SAML and Microsoft Azure AD, as well as various RESTful and SOAP services.
    </Typography>
    <Typography variant="body1" paragraph>
      I designed and implemented a new migration strategy for multiple projects using Equisoft Design to improve environment configurations by 30%. The main languages and frameworks I worked with have been Azure, Spring, Hibernate, and Java.
    </Typography>
    
    <Typography variant="h4" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>Lockheed Martin</Typography>
    <Typography variant="body1" paragraph sx={{ mb: 2 }}>
      I worked at Lockheed Martin as an Associate Software Engineer on the LRDR radar system.
    </Typography>
    <Typography variant="body1" paragraph>
      I worked in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks with bash scripting. The project utilized GIT, Crucible, and Jenkins for our primary functions.
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
            <Box sx={{ mb: { xs: 4, sm: 6 } }}>
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '-0.03em',
                        mb: 2,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
            <Box sx={{ mb: { xs: 4, sm: 6 } }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
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
            <Box sx={{ mb: { xs: 4, sm: 6 } }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '1.3rem', md: '1.5rem' } }}>
                    Technical Skills
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                    <strong>Languages & Frameworks:</strong> Java, Spring Boot, TypeScript, React, C#, Bash<br/>
                    <strong>Cloud & Infrastructure:</strong> AWS, Microsoft Azure, Docker, Microservices Architecture<br/>
                    <strong>Integration & Data:</strong> Mulesoft, SSIS, Azure Data Factory, SQL, REST/SOAP APIs, SAML, APIM, JMS/SQS<br/>
                    <strong>Enterprise Tools:</strong> Salesforce/Apex, Power Platform (Power Automate, Power Virtual Agent, Power BI), Dynamics 365, Visio, Mural, OIPA (Oracle Insurance Policy Administration)<br/>
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

