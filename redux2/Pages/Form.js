import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adduser, removeuser } from '../Actions'

const Form = () => {

    const myuser = useSelector(state => state.Users);

    const dispatch = useDispatch();

    const userRef = useRef(null);

    const myForm = (e) => {
        e.preventDefault();

        dispatch(adduser(userRef.current.value));
        userRef.current.value = "";
    }

    return (
        <>
            <h3>Add User</h3>

            <form onSubmit={myForm}>

                <input type="text" placeholder="enter name" ref={userRef} />

            </form>

            <ul>
                {

                    myuser.map((user, index) => {

                        return <li key={index}>{user.name}
                            <button
                                onClick={() => dispatch(removeuser(index))}>
                                remove
                    </button></li>

                    })



                }
            </ul>

        </>
    );
}

export default Form;