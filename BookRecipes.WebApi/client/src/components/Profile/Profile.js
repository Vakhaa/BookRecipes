import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Avatar } from '@material-ui/core';

import PostsWall from './PostsWall/PostsWall'
import Description from './Description/Description';
import Gallery from './Gallery/Gallery';
import MyRecipes from './MyRecipes/MyRecipes';
import FriendsContainer from './Friends/Friends';
import ProfileFriendsContainer from '../../containers/ProfileFriendsContainer';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    rounded: {
        width: 300,
        height:300
    },
});

const Profile = (props) => {
    const classes = useStyles();

    //TODO: push status on store
    
        return (
            <>
                <Grid container>
                    <Grid container item>
                        <Grid container item md={4}>
                            <Avatar variant="rounded" className={classes.rounded}>
                                <img alt="avatar" src={props.profile.photos.largePhoto} />
                                N
                            </Avatar>
                        </Grid>
                        <Grid direction="column" container item md={8}>
                            <Description name={props.profile.name} description={props.profile.description} userStatus={props.profile.status} />            
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid direction="column" container item xs={12} lg={6}>
                            <Grid container>
                                <Grid item xs={12} lg={12}>
                                    <ProfileFriendsContainer userId={props.profile.id}/>
                                </Grid>
                                <Grid item xs={6} lg={12}>
                                    <Gallery />
                                </Grid>
                                <Grid item xs={6} lg={12}>
                                    <MyRecipes />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} lg={6}>
                            <PostsWall userId={props.profile.id} addPost={props.addPost} />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
}

export default Profile;
