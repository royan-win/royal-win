import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from "redux" ;
import counterReducer from '../counter/counterSlice';
import auth from "../redux/reducers/auth"
export default combineReducers({
  // reducer: {
    counter: counterReducer,
    auth
  // },
});
