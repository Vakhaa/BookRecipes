import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Avatar,  Badge, MenuItem } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    linkText: {
        textDecoration: "none",
        color: "black"
    }
});

const Friends = (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid direction="column" container>
                    {props.friends.map((friend) => (
                        <NavLink ley={friend.id} to={"/profile/" + friend.id} className={classes.linkText}>
                            <MenuItem>
                                <Badge>
                                    <Avatar alt={friend.name} src={friend.photo} />
                                </Badge>
                                <Badge>
                                    <Typography> {friend.name} </Typography>
                                </Badge>
                                <Badge>
                                    <Typography> {friend.state}</Typography>
                                </Badge>
                            </MenuItem>
                        </NavLink>
                    ))}
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

export default Friends;
