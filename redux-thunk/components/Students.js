import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { student } from '../Actions';
const Students = () => {

    const stname = useSelector(state=>state.Students);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Best Students {stname.name}- {stname.wish[1]}</h1>
            <button onClick={()=>dispatch(student())}>change</button>
        </div>
    )
}

export default Students

