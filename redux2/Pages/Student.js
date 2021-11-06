import React from 'react';
import {connect} from 'react-redux';
import {changestu} from '../Actions'
const Students = (props) => {

   

    return ( 
        <>
    <h3>Best Students is {props.myname}</h3>

    <button onClick={()=>{props.changeName("haifa")}}>Change</button>
        </>
     );
}

const mapStateToProps = (state)=>{

    return{
      myname : state.name
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
  
    return{
  changeName : (name)=>{dispatch(changestu(name))}
    }
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(Students);