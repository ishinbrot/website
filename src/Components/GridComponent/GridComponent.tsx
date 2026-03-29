import React from 'react'
import Grid from '@mui/material/Grid';
import classes from './GridComponent.module.css';
import CardComponent from '../CardComponent/CardComponent'


interface gridMember  {
    title: string;
    description: string;
    linkTitle: string;
    link: () => void;
    click: () => void
}

interface gridElements  {
    cards: any
}


const GridComponent = (props: gridElements) :any => {
    return (
        <div>
            <Grid container spacing={4} className={classes.container}>
                {props.cards.map((el :  gridMember) : any=> (
                    <Grid item xs={12} sm={6} md={4}>
                        <CardComponent className={classes.cardComponent}
                         title={el.title} description={el.description} linkTitle={el.linkTitle} click={el.click} link={el.link}/>
                    </Grid>
                ))

                }
            </Grid>
        </div>
    );
}

export default GridComponent;