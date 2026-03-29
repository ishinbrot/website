import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
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
        <Card className={classes.root} variant="outlined" elevation={0}>
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