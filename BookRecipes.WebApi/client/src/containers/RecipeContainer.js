import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Recipe from '../components/Recipes/Recipe'

const recipeMoq = {
    name: "Barszcz",
    description: "To jest najliepsze co zrobily ludzi. Aromatny zapazch, a jaki kolor, smack wymbitny.",
    ingredients: [
        {
            id: 1,
            name: "Ziemniaki",
            countIngredient: "5 sztuk"
        },
        {
            id: 2,
            name: "Woda",
            countIngredient: "5 l"
        },
    ],
    steps: [
        {
            id: 12,
            description: "Berem i varim"
        },
        {
            id: 23,
            description: "Kuszajem"
        }
    ]
}

class RecipeContainer  extends Component {

    render() {
        return (
            <Recipe
                id={this.props.match.params.recipeId}
                name={this.props.name}
                ingredients={this.props.ingredients}
                description={this.props.description}
                steps={this.props.steps}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        name: recipeMoq.name,
        ingredients: recipeMoq.ingredients,
        description: recipeMoq.description,
        steps: recipeMoq.steps
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps)
)(RecipeContainer);
