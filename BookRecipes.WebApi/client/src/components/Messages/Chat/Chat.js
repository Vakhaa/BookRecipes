import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MessageCreator from './MessageCreator/MessageCreator';
import ChatDisplayer from './ChatDisplayer/ChatDisplayer';
import Header from './Header/Header';



const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
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

const Chat = (props) => {
    const classes = useStyles();


        return (
            <>
                <Header />
                <ChatDisplayer messages={props.messages} />
                <MessageCreator
                    updateMessageBody={props.updateMessageBody}
                    addMessage={props.addMessage}
                    newMessageBody={props.newMessageBody}
                />
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

export default Chat;
