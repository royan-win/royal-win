export const moneytreehistory = (historydata)=>async(dispatch)=>{

    try{
        dispatch({type:"MONEYTREEHISTORY" , payload: historydata}) ;
    }catch(err){
        console.log(err); 
    }   
}
export const colorwinhistory = (historydata)=>async(dispatch)=>{

    try{
        dispatch({type:"COLORWINHISTORY" , payload: historydata}) ;
    }catch(err){
        console.log(err); 
    }   
}
export const ladderhistory = (historydata)=>async(dispatch)=>{

    try{
        dispatch({type:"LADDERHISTORY" , payload: historydata}) ;
    }catch(err){
        console.log(err); 
    }   
}
export const andarbaharhistory = (historydata)=>async(dispatch)=>{

    try{
        dispatch({type:"ANDARBAHARHISTORY" , payload: historydata}) ;
    }catch(err){
        console.log(err); 
    }   
}