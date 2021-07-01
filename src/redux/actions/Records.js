export const record = (recorddata)=>async(dispatch)=>{

    try{
        dispatch({type:"RECORD" , payload: recorddata}) ;
    }catch(err){
        console.log(err); 
    }   
}