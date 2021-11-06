import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from '../Actions'

const Cart = () => {

    const count = useSelector(state=>state.Counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>My Cart {count}</h2>
            <button onClick={()=>dispatch(increment())}>+</button><br/>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default Cart
