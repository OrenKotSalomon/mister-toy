import { combineReducers, legacy_createStore as createStore } from 'redux'

import { toyReducer } from "./toy-reducer.js"



// const middleware = compose() || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const rootReducer = combineReducers({
    toyModule: toyReducer,
})


export const store = createStore(rootReducer)


// store.subscribe(() => {
//     console.log('Current state is:', store.getState())
// })