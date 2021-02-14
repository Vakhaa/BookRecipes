import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core';

export default class Ingredient extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.id
        this.name = this.props.name
        this.ingredientsInRecipe = this.props.ingredientsInRecipe
    }
    render() {
        return (<li>
            <Typography>{this.id}. {this.name}. You have {this.ingredientsInRecipe.length} recipes with this ingredients.</Typography>
        </li>)
    }
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
