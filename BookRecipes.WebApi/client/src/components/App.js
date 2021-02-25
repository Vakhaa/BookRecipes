import React from 'react'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import SideBarContainer from '../containers/SideBarContainer';

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Route } from "react-router-dom";

import ProfileContainer from '../containers/ProfileContainer';
import MessagesContainer from '../containers/MessagesContainer';
import RecipeContainer from '../containers/RecipeContainer';
import RecipesContainer from '../containers/RecipesContainer';

const FriendsContainer = React.lazy(() => import('../containers/FriendsContainer'))
const IngredientsContainer = React.lazy(() => import('../containers/IngredientsContainer'))

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        //marginTop: theme.spacing(3),
    },
}));

export default function App (props){ 
    ///TODO: init users here 
    const classes = useStyles();

    return (
        <Paper>
            <Header title="This is book of recipes" />
            <main>
                <Grid direction="row" container spacing={2} className={classes.mainGrid}>
                    <Grid container item md={2}>
                        <SideBarContainer />
                    </Grid>
                    <Grid container item md={10}>
                        <Route path="/profile/:userId?">
                            <ProfileContainer />
                        </Route>
                        <Route path="/messages">
                            <MessagesContainer />
                        </Route>
                        <Route path="/recipes">
                            <RecipesContainer />
                        </Route>
                        <Route path="/recipe/:recipeId">
                            <RecipeContainer />
                        </Route>
                        
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Route path="/friends">
                                <FriendsContainer />
                            </Route>
                            <Route path="/ingredients">
                                <IngredientsContainer />
                            </Route>
                        </React.Suspense>
                    </Grid>
                </Grid>
            </main>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Paper>
        )
} 
