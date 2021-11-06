import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Actions'

const Cart = () => {

    const count = useSelector(state => state.Counter);

    const dispatch = useDispatch();

    return (
        <>
            <h3>Add to cart</h3>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn btn-primary" type="button" onClick={() => dispatch(increment())}>+</button>
                </div>
                <div style={{ width: "35px", padding: "7px", border: "1px solid black" }}>
                    {count}
                </div>
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" onClick={() => dispatch(decrement())}>-</button>

                </div>
            </div>

            <button class="btn btn-warning" type="button" onClick={() => dispatch(reset())} style={{ color: "#fff" }}>clear cart</button>

        </>
    );
}

export default Cart;