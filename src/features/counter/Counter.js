import React,{useState} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'


function Counter(props) {
    // const [count,setCount]=useState(0)
    const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <button type="button" onClick={() => dispatch(increment())}>+</button>
            <p>{count}</p>
            <button type="button" onClick={() => dispatch(decrement())}>-</button>
            <button type="button" onClick={() => dispatch(incrementByAmount(10))}>increment By 10</button>

            {/* <button type="button" onClick={()=>setCount(count+1)}>+</button>
            <p>{count}</p>
            <button type="button" onClick={()=>setCount(count-1)}>-</button> */}
        </div>
    );
}

export default Counter;