export const history = (historydata)=>async(dispatch)=>{

    try{
        dispatch({type:"HISTORY" , payload: historydata}) ;
    }catch(err){
        console.log(err); 
    }   
}