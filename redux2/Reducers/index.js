import { combineReducers } from 'redux';
import Counter from './Counter';
import Users from './Users';
import Stud from './Stud';


const reducer = combineReducers({

    Counter,
    Users,
    Stud
});


export default reducer;
