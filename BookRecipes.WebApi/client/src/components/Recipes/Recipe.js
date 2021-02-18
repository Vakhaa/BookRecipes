import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    recipePhoto: {
        width: 200,
        height:200
    }
});


const Recipe = (props) => {
    const classes = useStyles();

        return (
            <>
                <Grid container spacing={1}>
                    <Grid container item >
                        <Typography variant="h2">{props.name} - id: {props.id}</Typography>
                    </Grid>
                    <Grid container item>
                        <img alt={props.name} className={classes.recipePhoto} src="https://source.unsplash.com/random" />
                    </Grid>
                    <Grid container item>
                        <Typography paragraph>{props.description}</Typography>
                    </Grid>
                    <Grid container item>
                        <Typography variant="h3"> Ingredients: </Typography>
                        {props.ingredients.map((ingredient) => (
                            <Grid container item key={ingredient.id}>
                                <Typography variant="h4">{ingredient.name} - {ingredient.countIngredient}</Typography>
                            </Grid>
                            ))}
                    </Grid>
                    <Grid container item>
                        <Typography variant="h3">Steps cooking: </Typography>
                        {props.steps.map((step, index) => (
                            <Grid key={step.id} container item>
                                <Typography variant="h4">{index+1}. {step.description}</Typography>
                            </Grid>
                            ))}
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

export default Recipe;
