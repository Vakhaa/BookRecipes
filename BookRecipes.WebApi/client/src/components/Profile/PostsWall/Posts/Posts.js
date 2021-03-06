import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    posts: {
        maxWidth:545,
    }
});


const Posts = (props) => {
    const classes = useStyles();

    return (
            <>
                {props.posts.map((post) => (
                    <Card className={classes.posts} key={post.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="340"
                                //image={post.photo}
                                image={"https://source.unsplash.com/random"}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.main}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Like
                            </Button>
                        </CardActions>
                    </Card>
                    ))}
            </>
        )
}

export default Posts;
