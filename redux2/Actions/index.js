export const increment = ()=>{
    return {
        type : "INCREMENT"
    }
}

export const decrement = ()=>{
    return {
        type : "DECREMENT"
    }
}

export const reset = ()=>{
    return {
        type : "RESET"
    }
}

export const adduser = (data)=>{

    return{
        type:"ADD_USER",
        payload:data
    }

}

export const removeuser = (index)=>{

    return{
        type:"REMOVE_USER",
        index
    }

}

export const changestu = (name)=>{

    return {
        type : "CHANGE_NAME",
        payload:name
    }
}