import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
} from '../actions/actionTypes'

const initialState = {
    ingredients: [
        {
            name: "Init",
            ingredientsInRecipe: [],
            id: 0,
            fetching: false
        }
    ],
    fetching: false
}

export default function ingredientsReducer(state = initialState, action) {
    let stateCopy = {
        ...state, ingredients: [...state.ingredients]}

    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                fetching: true
            }
            break;
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.ingredients,
                fetching: false
            }
            break;
        case GET_INGREDIENTS_ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false
            }
            break;
        default:
            return state
    }
}
