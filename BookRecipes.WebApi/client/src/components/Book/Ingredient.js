import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core';

const Ingredient = (props) =>{
    
    return (
        <li>
            <Typography>{props.id}. {props.name}. You have {props.ingredientsInRecipe.length} recipes with this ingredients.</Typography>
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
