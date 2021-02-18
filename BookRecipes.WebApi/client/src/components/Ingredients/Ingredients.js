import React from 'react'  
import PropTypes from 'prop-types'
import Ingredient from './Ingredient'

const Ingredients = (props)=>{
    return(
            <div className = "ingredients" >
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
            </div >
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
