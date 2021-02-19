import {
    GET_INGREDIENT_REQUEST,
    GET_INGREDIENT_SUCCESS,
    GET_INGREDIENT_ERROR
} from '../actions/actionTypes'

const initialState = {
    name: "Init",
    ingredientsInRecipe: [],
    id: 0,
    fetching: false
}

export default function ingredientReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INGREDIENT_REQUEST:
            return {
                ...state,
                id: action.ingredient,
                fetching: true
            }
        case GET_INGREDIENT_SUCCESS:
            return {
                ...state,
                ingredient: action.ingredient,
                fetching: false
            }
        case GET_INGREDIENT_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
        default:
            return state
    }
}
