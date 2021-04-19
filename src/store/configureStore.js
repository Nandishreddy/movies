import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movieReducer from '../reducers/movieList';

const configureStore = () => {
    const store = createStore(combineReducers({
        movies: movieReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore