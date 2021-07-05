export const ladder_record = (recorddata)=>async(dispatch)=>{

    try{
        dispatch({type:"LADDERRECORD" , payload: recorddata}) ;
    }catch(err){
        console.log(err); 
    }   
}
export const moneytree_record = (recorddata)=>async(dispatch)=>{

    try{
        dispatch({type:"MONEYTREERECORD" , payload: recorddata}) ;
    }catch(err){
        console.log(err); 
    }   
}
export const colorwin_record = (recorddata)=>async(dispatch)=>{

    try{
        dispatch({type:"COLORWINRECORD" , payload: recorddata}) ;
    }catch(err){
        console.log(err); 
    }   
}

