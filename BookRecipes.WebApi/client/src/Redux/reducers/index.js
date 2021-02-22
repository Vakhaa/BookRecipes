import { combineReducers } from 'redux'
import friendsReducer from './friendsReducer'
import ingredientReducer from './ingredientReducer'
import ingredientsReducer from './ingredientsReducer'
import messagesReducer from './messagesReducer'
import postsReducer from './postsReducer'
import profileReducer from './profileReducer'
import informatorReducer from './informatorReducer'
import { reducer as formReducer } from 'redux-form' 

const rootReducer = combineReducers({
    form: formReducer,
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    profiles: profileReducer,
    messages: messagesReducer,
    posts: postsReducer,
    friends: friendsReducer,
    informator: informatorReducer
})

export default rootReducer;
