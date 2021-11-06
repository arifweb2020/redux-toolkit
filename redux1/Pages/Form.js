import React,{useRef} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {addUsers,removeUser} from '../Actions'

const Form = () => {

    const myusers = useSelector(state=>state.Users);
    const dispatch = useDispatch();
    const userRef = useRef(null);
const myForm = (e)=>{
    e.preventDefault();
    dispatch(addUsers(userRef.current.value));
    userRef.current.value="";
}
const mycount = useSelector(state=>state.Counter)
    return ( 
        <>
        <h1>My Form </h1>

        <form onSubmit={myForm}>
        <input type="text" placeholder="enter name" ref={userRef}/>

            </form>

            <ul>
{

myusers.map((user,index)=>{

return <li key={index}>{user.name} 
<button
 onClick={()=>dispatch(removeUser(index))}>
     remove
     </button></li>

  })


  
}
      </ul>
      <h2>{mycount}</h2>

        </>
     );
}
 
export default Form;