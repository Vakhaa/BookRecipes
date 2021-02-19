import {
    GET_RECIPE,
    GET_RECIPES
} from '../actions/actionTypes'

const initialState = {
    id: 0,
    name: "string",
    description: "string",
    categoryId: 0,
    category: {
        id: 0,
        name: "string",
        parentId: 0,
    },
    ingredientsInRecipe: [
        {
            id: 0,
            countIngredient: "string",
            recipeId: 0,
            ingredientId: 0,
            ingredient: {
                id: 0,
                name: "string",
            }
        }
    ],
    stepsHowCooking: [
        {
            id: 0,
            recipeId: 0,
            description: "string"
        }
    ]
}

function recipe(state = initialState, action) {
    /*switch (action.type) {
        case GET_RECIPES:
        case GET_RECIPE:
            return state.recipe
        default:
            return state
    }*/
    return state
}

export default recipe;