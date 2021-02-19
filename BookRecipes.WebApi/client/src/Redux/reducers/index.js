import { combineReducers } from 'redux'
import ingredientReducer from './ingredientReducer'
import ingredientsReducer from './ingredientsReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    profile: profileReducer
})

export default rootReducer;
