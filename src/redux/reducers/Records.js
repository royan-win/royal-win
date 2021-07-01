const Moneytree = (record=[] , action)=>{
    switch(action.type){
        case "RECORD":
            return [
             ...record ,  action.payload
            ];
            default:
                return record

    }
}  

export default Moneytree ; 
