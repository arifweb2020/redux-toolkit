const iState = {
    name : "arif",
    wish : ["eat","drink"]
}

const Stud = (state=iState,action) =>{

        switch (action.type){

            case "CHANGE_NAME":
                return {...state, 
                    name : action.payload
                }

            default:

            return state;
        }

}
 
export default Stud;