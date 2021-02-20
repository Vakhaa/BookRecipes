import { combineReducers } from 'redux'
import ingredientReducer from './ingredientReducer'
import ingredientsReducer from './ingredientsReducer'
import messagesReducer from './messagesReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    profile: profileReducer,
    messages: messagesReducer
})

export default rootReducer;
