import {createStore, combineReducers} from "redux"
import counterReducer from "./counter";
import detailsReducer from "./details";

const combinedReducer = combineReducers({
    counter : counterReducer,
    details : detailsReducer
})

//Store

const store = createStore(combinedReducer);
export default store