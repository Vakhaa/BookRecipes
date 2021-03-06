import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import PostForm from './PostForm/PostForm';
import Posts from './Posts/Posts';

const useStyles = makeStyles({
    createPost: {
        border: "outset"
    },
});


const PostsWall = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid container item>
                <PostForm onSubmit={props.onSubmit} />
            </Grid>
            <Grid container item>
                <Posts posts={props.posts} />
            </Grid>
        </>
        )
}

export default PostsWall;
