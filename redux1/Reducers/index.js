import {combineReducers} from 'redux';
import Users from './Users';
import Counter from './Counter';

const myReducers = combineReducers({
    Users,
    Counter
})

export default myReducers;
 