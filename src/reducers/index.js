import {combineReducers} from 'redux'
import todos from './todos'
import nextDice from "./nextDice";
import visibilityFilter from "./visibilityFilter";


export default combineReducers({
    nextDice,
    todos,
    visibilityFilter
})