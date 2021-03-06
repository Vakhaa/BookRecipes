import React from 'react'
import { Route } from "react-router-dom";

import ProfileContainer from '../containers/ProfileContainer';
import MessagesContainer from '../containers/MessagesContainer';
import RecipeContainer from '../containers/RecipeContainer';
import RecipesContainer from '../containers/RecipesContainer';

const FriendsContainer = React.lazy(() => import('../containers/FriendsContainer'))
const IngredientsContainer = React.lazy(() => import('../containers/IngredientsContainer'))

export default function RouteComponent (props){ 


    return (
        <>
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
                <Route exact path="/friends/:profileId?">
                    <FriendsContainer />
                </Route>
                <Route path="/ingredients">
                    <IngredientsContainer />
                </Route>
            </React.Suspense>

        </>
    )
} 
