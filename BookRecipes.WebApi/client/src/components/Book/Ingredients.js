import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Ingredient from './Ingredient'
import { getIngredient } from '../../actions/ingredientAction'
import { connect } from 'react-redux'

import { Button, Input } from '@material-ui/core'


class Ingredients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            ingredients: this.props.ingredients
        };

        this.fetching = this.props.fetching

        this.getIngredient = this.props.ingredientActions
        this.getIngredients = this.props.getIngredients

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(() => this.getIngredients(), 5000);
        this.timer1 = setInterval(() => this.setState({ ingredients: this.props.ingredients }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        clearInterval(this.timer1);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }

    handleSubmit(event) {
        console.log("Value in handleSubmit(<Ingredients>):")
        console.log(this.state.value)
        this.getIngredient(this.state.value)
        event.preventDefault();
    }

    render() {
        return (<div className="ingredients">

            <form onSubmit={this.handleSubmit}>
                <Input type="text" value={this.state.value} onChange={this.handleChange} />
                <Button variant="outlined" type="submit" value="Send" > Send </Button>
            </form>

            <div>
                <ul>
                    {this.fetching ? (<li>Loading</li>)
                        : Array.from(this.state.ingredients).map((ingredient) => (
                            <Ingredient key={ingredient.id.toString()} name={ingredient.name} id={ingredient.id} ingredientsInRecipe={ingredient.ingredientsInRecipe} />
                            ))
                    }
                </ul>
            </div>
        </div>)
    }
}

Ingredients.propTypes = [
    PropTypes.shape(
        {
            ingredient: PropTypes.object.isRequired
        }
    )
]

const mapStateToProps = state => {
 /*   console.log(state)
    return {
        ingredients: state.ingredients
    }*/
    return {}
}

const mapDispatchToProps = dispatch => ({
    ingredientActions: id => dispatch(getIngredient(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ingredients)