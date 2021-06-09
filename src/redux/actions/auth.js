import * as api from "../../api/index" ; 

export const signin = (formdata , history   ) =>async(dispatch)=>{
    try{
        const {data}  =await api.signin(formdata) ; 
        dispatch({type:"AUTH" , data}) ; 
        
        alert("logged in") ; 
        history.push("/Home") ; 
    }catch(err){
        console.log(err); 
        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
        dispatch({type:"ERROR" , payload : error_message}) ;
        
    }
}
export const signup = (formdata , history) =>async(dispatch)=>{
    try{
     
        const {data}  =await api.signup(formdata) ; 
       
         dispatch({type:"AUTH" , data}) ; 
         history.push("/Home") ; 
        
        alert("responsed saved") ; 
    }catch(err){
        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
        dispatch({type:"ERROR" , payload : error_message}) ;
    }
}
export const reset = (formdata) =>async(dispatch)=>{
 
    try{
        
        const {data}  =await api.reset(formdata) ;
  
        if(data){ 
      alert("email sent"); 
        }
        
        console.log(data); 
    }catch(err){
        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
        dispatch({type:"ERROR" , payload : error_message}) ;
    }
}

export const newpassword = (id , post , history) =>async(dispatch)=>{
    try{
       const {data} =  await api.newpassword(id,post) ;
     
      history.push("/") ; 
    }catch(err){ 
        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
        dispatch({type:"ERROR" , payload : error_message}) ;
    }
}