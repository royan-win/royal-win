import * as api from "../../api/index"; 
export const history = (historydata)=>async(dispatch)=>{

    try{
        // const {data}=await api.signin(historydata) ; 
        dispatch({type:"HISTORY" , payload: historydata}) ;
    }catch(err){
        console.log(err); 
    }
}