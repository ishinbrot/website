import React, { useState } from 'react';
import classes from './Poetry.module.css'
import { openLink } from '../../assets/helperFunctions'
import GridComponent from '../../Components/GridComponent/GridComponent'
import CustomModal from '../../Components/Layout/CustomModal/CustomDialog';
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';

const summary = <p className={classes.Summary}>Here are some poems I created  during the 2020 coronavirus quarantine. </p>

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

const NewNormalPoemText = <p>Welcome to the New Normal<br />
    Social Distancing and wearing face masks<br />
    Luckily we dont have to dress so formal<br />
    We can get through this, we just have to watch our tracks<br />
    After all we are all just mortal<br />
    Hopefully soon, we can give this virus the ax<br />
    But for now We are stuck unless we find a portal</p>

const CoronavirusSpringPoemText = <p>
    Welcome to Coronavirus Spring<br />
    Enjoy the weather getting hot<br />
    But be careful, of what going outside may bring<br />
    Go close to someone you should not<br />
    6 feet away you, keeping the distance may sting<br />
    But within 6 feet coronavirus may star it’s plot<br />
</p>

const NurseCoronavirusPoemText = <p>
    Thank you to the nurses<br />
    The front-line workers who treat this bad disease<br />
    You are preventing this from getting any worse<br />
    Unfortunately this isn’t a breeze<br />
    But we will get through this, we just have to believe<br />
</p>
const NewDayPoemText = <p>
    Welcome to a new day<br />
    If you go outside don’t forget a Mask<br />
    What other options, there is nothing to weigh<br />
    Why is everything still closed, don’t even ask<br />
    After all, we are only still in May<br />
    Just don’t forget to wear a mask, your one task<br />
</p>

const haircutPoemText = <p>
    What has Coronavirus done<br />
    All of my hair has grown out<br />
    I can put all of my hair in a bun<br />
    It has grown thick all throughout<br />
    Let me try and go for a run<br />
    Will my hair get in my face, I highly doubt</p>

const Poetry = props => {

    const displayNormalPoem = () => {
        setShowNormalModal(!ShowNormalPoem);
    }
    const displayCoronavirusSpringPoem = () => {
        setShowCoronavirusSpringPoem(!ShowCoronavirusSpringPoem);
    }
    const displayNursesPoem = () => {
        setshowNursesPoem(!showNursesPoem);
    }
    const displayNewDayPoem = () => {
        setshowNewDayPoem(!showNewDayPoem);
    }
    const displayHaircutPoem = () => {
        setshowHaircutPoem(!showHaircutPoem);
    }

    const [ShowNormalPoem, setShowNormalModal] = useState(false)
    const [ShowCoronavirusSpringPoem, setShowCoronavirusSpringPoem] = useState(false)
    const [showNursesPoem, setshowNursesPoem] = useState(false)
    const [showNewDayPoem, setshowNewDayPoem] = useState(false)
    const [showHaircutPoem, setshowHaircutPoem] = useState(false)

    const PoemList = [
        {
            title: 'The New Normal',
            description: ' ',
            linkTitle: 'Read Poem',
            click: () => { displayNormalPoem() }
        },
        {
            title: 'Coronavirus Spring',
            description: ' ',
            linkTitle: 'Read Poem',
            click: () => { displayCoronavirusSpringPoem() }
        },
        {
            title: 'Thank you to the Nurses',
            description: ' ',
            linkTitle: 'Read Poem',
            click: () => { displayNursesPoem() }
        },
        {
            title: 'New Day',
            description: ' ',
            linkTitle: 'Read Poem',
            click: () => { displayNewDayPoem() }
        },
        {
            title: 'Coronavirus Haircut',
            description: ' ',
            linkTitle: 'Read Poem',
            click: () => { displayHaircutPoem() }
        },
    ]



    return (
        <div>

            {summary}
            <GridComponent cards={PoemList} />
            <CustomDialog display={ShowNormalPoem} click={displayNormalPoem} text={NewNormalPoemText} title="The New Normal" />
            <CustomDialog display={ShowCoronavirusSpringPoem} click={displayCoronavirusSpringPoem} text={CoronavirusSpringPoemText} title="Coronavirus Spring" />
            <CustomDialog display={showNursesPoem} click={displayNursesPoem} text={NurseCoronavirusPoemText} title="Thank you to the Nurses" />
            <CustomDialog display={showNewDayPoem} click={displayNewDayPoem} text={NewDayPoemText} title="New Day" />
            <CustomDialog display={showHaircutPoem} click={displayHaircutPoem} text={haircutPoemText} title="Coronavirus Haircut" />

        </div >


    );
}
export default Poetry;