import React from 'react';
import { useSelector } from 'react-redux'

function Coin(props) {

    const count = useSelector((state) => state.counter.count)

    const textColor = useSelector((state)=>state.theme.color)
    
    return (
        <div>
            <h1 style={{color:textColor}}>Coin : {count}</h1>
        </div>
    );
}

export default Coin;