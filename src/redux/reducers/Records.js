const records = (state={ladderrecord:[]} , action)=>{
    switch(action.type){
        case "LADDERRECORD":
            localStorage.setItem('ladder record' , JSON.stringify({ ...state.ladderrecord ,ladderrecord:[...state.ladderrecord  ,action.payload]})) ; 
            return {
             ...state.ladderrecord ,ladderrecord:[...state.ladderrecord  ,action.payload]
            };

            
            default:
                return state
    }
} 
export default records; 
