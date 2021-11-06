

export const increment = ()=>{

    return{
        type:"INC"
    }
}

export const decrement = ()=>{

    return{
        type:"DEC"
    }
}

// action without async api 
// export const student = (data)=>{

//     return{
//         type:"CHN_STU",
//         payload:data
//     }

// }

export const student=(data)=>{
    return async (dispatch)=>{

      const data= await fetch('https://jsonplaceholder.typicode.com/users');
      const res1= await data.json();
      dispatch({type:"CHN_STU",payload:res1[1].name})

    }
}