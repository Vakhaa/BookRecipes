import { connect } from 'react-redux'
import { getIngredient } from '../actions/ingredientAction'
import { getIngredients } from '../actions/ingredientsAction'
import Ingredients from '../components/Book/Ingredients'

const mapStateToProps = state => {
    console.log(state.ingredients)
    return {
        ingredients: state.ingredients.ingredients,
        fetching: state.ingredients.fetching
    }
}

const mapDispatchToProps = dispatch => ({
    getIngredient: id => dispatch(getIngredient(id)),
    getIngredients: () => dispatch(getIngredients())
})

const IngredientsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Ingredients)

export default IngredientsContainer;