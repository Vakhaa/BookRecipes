import React from 'react';
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';

import { Typography, Button, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    ingredientPhoto: {
        width: 200,
        height:200
    }
});


const Ingredient = (props) => {

    const classes = useStyles();

    const CurrentInform = () => (
        <div>
            <span><Typography>{props.id}. {props.name}. You have {props.ingredientsInRecipe.length} recipes with this ingredients.</Typography></span>
            <span><img alt={props.name} className={classes.ingredientPhoto} src="https://source.unsplash.com/random" /></span>
            <span>
                <ul>
                    {
                        props.ingredientsInRecipe.map((recipe) => {
                            <li key={recipe.id}>Recipe - {recipe.recipeId}. Count this ingredients - {recipe.countIngredient}</li>
                        })
                    }
                </ul>
            </span>
        </div>    
        )

        return (
            <li>
                <Tooltip title={CurrentInform()} placement="right-start">
                    <Button><Typography>{props.name}.</Typography></Button>
                </Tooltip>
            </li>
        )
}

Ingredient.propTypes = {
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
}

export default Ingredient;
