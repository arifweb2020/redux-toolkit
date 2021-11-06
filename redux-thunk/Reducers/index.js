import { combineReducers } from 'redux';
import Counter from './Counter';
import ContactReducer from './ContactReducer';
import Students from './Students'


const allReducers = combineReducers({

    Counter,
    ContactReducer,
    Students
    
   
    
});

export default allReducers