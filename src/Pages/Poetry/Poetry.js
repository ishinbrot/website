import React, { useState, useEffect } from 'react';
import classes from './Poetry.module.css'
import { openLink } from '../../assets/helperFunctions'
import GridComponent from '../../Components/GridComponent/GridComponent'
import CustomDialog from '../../Components/Layout/CustomModal/CustomDialog';
import Poems from './poem-data';

const summary = <p className={classes.Summary}>Here are some poems I started during the 2020 coronavirus quarantine, and have continued throughout 2021.
<br/> I have recently expanded into poetry un-related to the coronavirus pandemic.
<br/> I hope you enjoy reading them!</p>


const Poetry = () => {
    // these will be set in a function
    Poems.map(el  => {
        el.click = () => { displayShowPoem(el)}});
    

    const displayShowPoem = (el) => {
        
     setPoemText(el.text);
     setPoemTitle(el.title);
     setShowPoem(!showPoem);

    }

    
    const [showPoem, setShowPoem] = useState(false);
    const [poemText, setPoemText] = useState("");
    const [poemTitle, setPoemTitle] = useState("");
    
    return (
        <div>

            {summary}
            
            <GridComponent cards={Poems} />
            {poemText === undefined ? "" :
                            <CustomDialog display={showPoem} click={displayShowPoem} text={<p>
                                {poemText.split("\n").map( el=>{
                            return <div>{el}</div>
                            })}</p>}
                                 title={poemTitle}/>}

        </div >
    );
}
export default Poetry;