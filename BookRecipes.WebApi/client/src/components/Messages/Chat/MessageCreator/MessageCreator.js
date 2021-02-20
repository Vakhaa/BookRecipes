import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Input, IconButton, Paper } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
    },
    input: {
        width: "100%",
    },
    rounded: {
        width: 300,
        height: 300
    }
}));

const MessageCreator = (props) => {
    const classes = useStyles();

    const onMessageBody = (e) => {
        let text = e.target.value
        props.updateMessageBody(text)
    }

        return (
            <>
                <Grid container>
                    <Grid container item>
                        <Grid container item md={11} justify="center" direction="column" alignItems="stretch">
                            <Paper elevation={3}>
                                <Input className={classes.input} variant="outlined"
                                    placeholder="This is your messages" multiline
                                    disableUnderline value={props.newMessageBody} onChange={(e) => (onMessageBody(e))} />
                            </Paper>
                        </Grid>
                        <Grid container item md={1} direction="column"
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <IconButton size="small" color="primary" aria-label="send" onClick={props.addMessage}>
                                <SendRoundedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid className={classes.friendsBar} container item justify="center">
                        tools
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

export default MessageCreator;
