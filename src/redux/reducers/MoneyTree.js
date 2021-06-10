const Moneytree = (history=[] , action)=>{
    switch(action.type){
        case "HISTORY":
        
            
            // var flim = history.slice(0,5,-1).map((item)=>{
            //     console.log(item); 
            // })
        //     let lastElement1 = history[history.length - 5]
        //     let lastElement2 = history[history.length - 4]
        //     let lastElement3 = history[history.length - 3];
        //     let lastElement4 = history[history.length - 2];
        //     let lastElement5 = history[history.length - 1];
        //    var val=[lastElement1,lastElement2,lastElement3, lastElement4,lastElement5]
           
   
            return [
             ...history ,  action.payload
            ];
            default:
                return history

    }
}  

export default Moneytree ; 
