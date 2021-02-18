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
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        /*this.props.Recipes();*/
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

export default connect(mapStateToProps, null)(RecipesContainer)
 