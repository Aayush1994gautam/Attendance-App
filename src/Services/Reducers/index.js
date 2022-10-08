import {updateState} from './Reducer';
import { combineReducers } from 'redux';

const reducers =  combineReducers({
    allState :updateState
});

export default reducers;