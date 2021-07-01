const Moneytree = (history=[] , action)=>{
    switch(action.type){
        case "HISTORY":
   
            return [
             ...history ,  action.payload
            ];
            default:
                return history

    }
}  

export default Moneytree ; 
