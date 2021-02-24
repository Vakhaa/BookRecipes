import React, {Component} from 'react'  
import { connect } from 'react-redux'
import Recipes from '../components/Recipes/Recipes'

const recipesMoq = {
    recipes: [
        {
            id: 1,
            name: "Barszcz"
        },
        {
            id: 2,
            name: "Zupa"
        },
    ],
    fetching: false
}

class RecipesContainer  extends Component {

    render() {
        return (
            <Recipes
                recipes={this.props.recipes}
                fetching={this.props.fetching}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        recipes: recipesMoq.recipes,
        fetching: recipesMoq.fetching
    }
}

const mapDispatchToProps = dispatch => {
     return {
}}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
 