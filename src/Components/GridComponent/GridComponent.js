import React from 'react'
import { Grid } from '@material-ui/core';
import classes from './GridComponent.module.css'
import CardComponent from '../CardComponent/CardComponent'

const GridComponent = props => {
    return (
        <div className={classes.container}>
            {props.cards.map(el => (
                <Grid container spacing={1} className={classes.container}>
                    <Grid container item xs={12} spacing={3}>
                        <CardComponent title={el.title} description={el.description} linkTitle={el.linkTitle} click={el.click} />
                    </Grid>
                </Grid>
            ))

            }
        </div>
    );
}

export default GridComponent;