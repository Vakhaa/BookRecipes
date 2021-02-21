import { combineReducers } from 'redux'
import friendsReducer from './friendsReducer'
import ingredientReducer from './ingredientReducer'
import ingredientsReducer from './ingredientsReducer'
import messagesReducer from './messagesReducer'
import postsReducer from './postsReducer'
import profileReducer from './profileReducer'
import informatorReducer from './informatorReducer'

const rootReducer = combineReducers({
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    profiles: profileReducer,
    messages: messagesReducer,
    posts: postsReducer,
    friends: friendsReducer,
    informator: informatorReducer
})

export default rootReducer;
