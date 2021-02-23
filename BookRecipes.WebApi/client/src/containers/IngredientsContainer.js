import React, {Component} from 'react'  
import { connect } from 'react-redux'
import { getIngredient } from '../Redux/actions/ingredientAction'
import { getIngredients } from '../Redux/actions/ingredientsAction'
import Ingredients from '../components/Ingredients/Ingredients'

class IngredientsContainer  extends Component {

    componentDidMount() {
        this.props.getIngredients();
        /*   this.timer = setInterval(() => this.getIngredients(), 5000);
           this.timer1 = setInterval(() => this.setState({ ingredients: this.props.ingredients }), 1000);*/
    }

    /*componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.timer1);
    }*/

    /*const handleChange = (event) => {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        console.log("Value in handleSubmit(<Ingredients>):")
        console.log(this.state.value)
        props.getIngredient(this.state.value)
        event.preventDefault();

    }*/
    /*let timer = setInterval(() => props.getIngredients(), 10000);*/


    render() {
        return (
            <Ingredients
                fetching={this.props.fetching}
                ingredients={this.props.ingredients}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients.ingredients,
        fetching: state.ingredients.fetching
    }
}

const mapDispatchToProps = dispatch => {
     return {
        getIngredient: id => dispatch(getIngredient(id)),
         getIngredients: () => dispatch(getIngredients())
}}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
 