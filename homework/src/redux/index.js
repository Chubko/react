import {createStore} from 'redux';
import {reducer} from "./Reducers/Reducer";

export const store = createStore(reducer);

export * from './ActionCreators';
export * from './Reducers';