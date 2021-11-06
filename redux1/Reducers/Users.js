const Users = (state=[],action) => {
    switch(action.type){

        case "ADD_USER" :
            return [...state,
                 {name:action.payload}
                ];

        case "DEL_USER":

                return  state.filter((item,index)=>action.index !==index);

            default:

            return state;
                

    }
}
 
export default Users;