import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import classes  from './CardComponent.module.css';


interface cardAttributes  {
    title: string;
    description: string;
    linkTitle: string;
    link: () => void;
    click: () => void;
    className: any
}

const CardComponent = ( props: cardAttributes) : any  => {
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" ref={props.link} onClick={props.click}>{props.linkTitle}</Button>
            </CardActions>
        </Card>
    );
};

export default CardComponent;