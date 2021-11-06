const iState={

    name:"Arif",
    wish:["drink","wwe"]
};

const Students = (state=iState,action)=>{

    switch(action.type){

        case "CHN_STU" :
            return {...state, name:action.payload}

        default:
            return state;
    }

}

export default Students