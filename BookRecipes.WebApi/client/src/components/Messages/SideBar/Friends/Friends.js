import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Avatar, Badge } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
    friendsBar: {
        backgroundColor: theme.palette.grey[500],
    },
    linkText: {
        textDecoration: "none",
        color : "black"
    },
    notesIcon: {
        color: "#388e3c",
    },
    notesButton: {
        height: 60,
        borderRadius: '100%',
        border: 'inset',
        borderColor: "green"

    },
    friendAvatar: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }
    }
}));

const Friends = (props) => {
    const classes = useStyles();

        return (
            <>
                {props.friends.map((friend) => (
                    <Grid container item justify="flex-end">
                        <NavLink to="/messages/chat" className={classes.linkText}>
                            <Badge color="secondary" badgeContent={friend.newMessages}>
                                <MailIcon />
                            </Badge>
                            <Badge>
                                <Typography>{friend.name}</Typography>
                            </Badge>
                            <Badge>
                                <Avatar alt={friend.name} src={friend.photo} />
                            </Badge>
                        </NavLink>
                    </Grid>
                ))}
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

export default Friends;
