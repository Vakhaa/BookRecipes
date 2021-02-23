import RecipesContainer from '../containers/RecipesContainer';
import RecipeContainer from '../containers/RecipeContainer';
import IngredientsContainer from '../containers/IngredientsContainer'
import SideBarContainer from '../containers/SideBarContainer';

import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'

import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import {Route} from "react-router-dom";
import ProfileContainer from '../containers/ProfileContainer';
import MessagesContainer from '../containers/MessagesContainer';
import FriendsContainer from '../containers/FriendsContainer';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        //marginTop: theme.spacing(3),
    },
}));

export default function App (props){ 

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
                        <Route path="/friends">
                            <FriendsContainer />
                        </Route>
                        <Route path="/recipes">
                            <RecipesContainer />
                        </Route>
                        <Route path="/recipe/:recipeId">
                            <RecipeContainer />
                        </Route>
                        <Route path="/ingredients">
                            <IngredientsContainer />
                        </Route>
                    </Grid>
                </Grid>
            </main>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </Paper>
        )
} 
