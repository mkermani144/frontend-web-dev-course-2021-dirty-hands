import {combineReducers} from 'redux';
import {todos} from "./todos";
import {showMode} from "./showMode";

export default combineReducers({
    todos,
    showMode
})
