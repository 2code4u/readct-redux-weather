import {createStore, combineReducers, applyMiddleware} from "redux"
import {weatherReducer} from "./weather/weatherReducer.js"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    weather: weatherReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))