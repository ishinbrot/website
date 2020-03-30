import React, { useState } from 'react';


import { openLink } from '../../assets/helperFunctions'
import classes from './About.module.css'
import GridComponent from '../../Components/GridComponent/GridComponent'
import CustomModal from '../../Components/Layout/CustomModal/CustomModal';


const summary = <p className={classes.Summary}>Hello, My name is Ian Shinbrot. I am currently an Software Developer at Equisoft.
<br />
I graduated from Drexel in June 2016 with a bachelors degree in Computer Science. At Drexel, I have completed three different co-ops, 6-month internships.
My first co-op was at Independence Blue Cross, while my second and third co-op were both at NextDocs, which was acquired by Aurea during my third co-op.
Please click one of the below links to learn more information.</p>;

const workExperienceSummary = <div>
    <h4>Equisoft</h4>
              I currently work at Equisoft as a Software Developer working as a software consultant on various clients for the OIPA (Oracle Insurance Administration for Life and Annuitites) product.
              I assist in mentoring new hires, as well as the various client teams in utilizing the OIPA application.
              I have assisted of SSO implementations utilizing both SAML and Microsoft Azure AD, as well as various RESTful and Soap services.
              I assist in managing the Nexus and ProGet
              The main languages and frameworks I worked on have been Spring, Hibernate, Java.

<h4>Lockheed Martin</h4>
              I currently work at Lockheed Martin as an Associate Software Engineer working on the LRDR radar system.
              I work in an Agile Scrum Environment utilizing C++ as the primary language, while performing some tasks
              with bash scripting. My project utilizing GIT, Crucible, and Jenkins for our primary functions
   <h4>NextDocs</h4>
              I worked  at NextDocs for two of my co-ops, between March-September 2014-2015.
              NextDocs was acquired by Aurea during my third co-op in June 2015.
              At NextDocs I worked on the NextDocs Suite of Applications consisting of the Regulatory, SOP, and eTMF platforms.
              I was able to quickly learn C#, SQL, and improve my Javascript skills there. as well as my scripting skills.

              <h4>Independence Blue Cross</h4>
              I worked at Independence Blue Cross for 6 months where I performed manual testing of their mobile IBX application,
              used Adobe Photoshop to design Drug Labels to be used in the application,
              as well as initiate the move toward automated testing using a program called SeeTest.
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
            click: () => openLink('https://github.com/ishinbrot/website/raw/master/src/ianShinbrot_resume.pdf')
        }
    ]



    return (
        <div>
            {summary}
            <GridComponent cards={AboutList} />
            <CustomModal display={showModal} click={displayModal} text={workExperienceSummary} title="Work Experience" />
        </div >
    );
}
export default About;