import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Posts from './Posts/Posts';

import PostForm from './PostForm/PostForm';
import PostsContainer from '../../../containers/PostsContainer';

const useStyles = makeStyles({
    createPost: {
        border: "outset"
    },
});


const PostsWall = (props) => {
    const classes = useStyles();

    const onSubmit = (formData) => {
        props.addPost(formData)
    }

    return (
        <>
            <Grid container item>
                <PostForm onSubmit={onSubmit} />
            </Grid>
            <Grid container item>
                <PostsContainer userId={props.userId} />
            </Grid>
        </>
        )
}

export default PostsWall;
