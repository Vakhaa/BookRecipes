import PropTypes from 'prop-types'
import Ingredient from './Ingredient'

import { Button, Input } from '@material-ui/core'


const Ingredients = (props) => {

    /*const componentDidMount = () =>{
        this.timer = setInterval(() => this.getIngredients(), 5000);
        this.timer1 = setInterval(() => this.setState({ ingredients: this.props.ingredients }), 1000);
    }*/

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
    if (props.ingredients.length === 1) {
        props.getIngredients();
    }


    return (
        <div className="ingredients">
            {/*<form onSubmit={this.handleSubmit}>
                <Input type="text" value={this.state.value} onChange={this.handleChange} />
                <Button variant="outlined" type="submit" value="Send" > Send </Button>
            </form>*/}

            <div>
                <ul>
                    {
                        props.fetching ? (<li>Loading</li>)
                        : Array.from(props.ingredients).map((ingredient) => (
                            <Ingredient
                                key={ingredient.id.toString()} name={ingredient.name}
                                id={ingredient.id} ingredientsInRecipe={ingredient.ingredientsInRecipe} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

Ingredients.propTypes = [
    PropTypes.shape(
        {
            ingredient: PropTypes.object.isRequired
        }
    )
]

export default Ingredients;
