import { combineReducers } from "redux";
import todo from "./todo"
import user from "./user"

const reducers = combineReducers({todo, user});
export default reducers