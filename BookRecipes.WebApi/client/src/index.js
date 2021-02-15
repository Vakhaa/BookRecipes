//import 'babel-core/polyfill'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store'
import { BrowserRouter} from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore();

render(
    <Provider store={store}>
        <CssBaseline/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

/*
store.dispatch(selectFromBook('Recipes'))
store.dispatch(fetchFromBook('Recipes')).then(() => console.log(store.getState()))*/
