import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from "redux" ;
import counterReducer from '../counter/counterSlice';
import auth from "../redux/reducers/auth"
import History from "../redux/reducers/history"; 
import Record from "../redux/reducers/Records"; 
export default combineReducers({
  // reducer: {
    counter: counterReducer,
    auth,
    History,
    Record

  // },
});
