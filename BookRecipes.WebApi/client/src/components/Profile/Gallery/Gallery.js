import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Gallery() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Typography gutterBottom variant="body1" color="textSecondary" component="h4"> Gallery </Typography>
                <CardContent>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://source.unsplash.com/random"
                        title="Contemplative Reptile"
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
