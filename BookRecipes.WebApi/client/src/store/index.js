import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const loggerMiddleware = createLogger()
    const store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware, // позволяет нам отправлять функции
            loggerMiddleware // аккуратно логируем экшены
        )
    )
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
