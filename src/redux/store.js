import { createStore } from "redux";
import { basketReducer } from './redcuer';

export const store= createStore(basketReducer)