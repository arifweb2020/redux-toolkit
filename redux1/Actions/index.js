export const increment = ()=>{

        return {
            type:"INCREMENT"
        }

}


export const decrement = ()=>{

    return {
        type:"DECREMENT"
    }
}

export const reset = ()=>{

    return {
        type:"RESET"
    }
}

export const addUsers = (data)=>{

    return {
        type:"ADD_USER",
        payload:data
    }
}

export const removeUser = (index)=>{

    return {
        type:"DEL_USER",
        index
    }

}