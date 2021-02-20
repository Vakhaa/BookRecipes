import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Avatar, Chip, Accordion, AccordionSummary, AccordionDetails, Button, Input, IconButton, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
    },
    fullList: {
        width: 'auto',
    },
    rounded: {
        width: 300,
        height: 300
    }
}));

const ChatDisplayer = (props) => {
    const classes = useStyles();

    const onPostTitle = (e) => {
        let text = e.target.value
        props.updatePostTitle(text)
    }

    const onPostBody = (e) => {
        let text = e.target.value
        props.updatePostBody(text)
    }

        return (
            <>
                <Grid container item direction="column">
                    {
                        props.messages.map((message) => (
                                <Grid container item justify={message.isMe ? "flex-end" : "flex-start"}>
                                {/*<Typography>{message.isChange ? "Changed": null}</Typography>
                                    <Typography>{message.dataCreated.data} {message.dataCreated.time}</Typography>*/}
                                <Paper>
                                        <Typography>
                                            {message.text}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))
                    }
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

export default ChatDisplayer;
