import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,reset} from '../Actions'


const Button = () => {

const mycount = useSelector(state=>state.Counter)
const dispatch = useDispatch();
    return ( 
        <>

        <h1>My Button Component</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
    <h2>{mycount}</h2>
    <button onClick={()=>dispatch(decrement())}>-</button><br/>
    <button onClick={()=>dispatch(reset())}>Reset</button>

        </>
     );
}
 
export default Button;