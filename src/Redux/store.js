
import { combineReducers, legacy_createStore } from "redux";
import { Reducer } from "./Reducer/Reducer";

const All_Reducer = combineReducers({
    data: Reducer,
});

export const store = legacy_createStore(All_Reducer);