import { combineReducers } from 'redux'
import ingredientReducer from './ingredientReducer'
import ingredientsReducer from './ingredientsReducer'

const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer
})

export default rootReducer