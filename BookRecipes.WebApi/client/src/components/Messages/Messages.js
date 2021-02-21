import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper} from '@material-ui/core';

import SideBar from './SideBar/SideBar';
import Chat from './Chat/Chat';
import { Route } from 'react-router-dom';
import Notes from './Notes/Notes';


const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: "#e57373",
    },
    fullList: {
        width: 'auto',
    },
    notes: {
        height: 60,
        borderRadius: '100%',
        border: 'inset'
    }
}));

const Messages = (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid container >
                    <Grid container item md={8} >
                        <Route path="/messages" exact>
                            <Notes/>
                        </Route>
                        <Route path="/messages/chat/"> {/*:userId*/ }
                            <Chat
                                messages={props.messages}
                                updateMessageBody={props.updateMessageBody}
                                addMessage={props.addMessage}
                                newMessageBody={props.newMessageBody}
                            />
                        </Route>
                    </Grid>
                    <Grid className={classes.friendsBar} container item md={4}>
                        <SideBar friends={props.friends} /> 
                    </Grid>
                </Grid>
            </>
        )
}

/*Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
    ingredientsInRecipe: PropTypes.arrayOf(
        PropTypes.shape({
            countIngredient: PropTypes.string.isRequired,
            recipeId: PropTypes.number.isRequired,
            ingredientId: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
    //id: PropTypes.number.isRequired,
    //getIngredient: PropTypes.func.isRequired
}*/

export default Messages;
