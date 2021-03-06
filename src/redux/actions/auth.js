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
export const deposit = (formdata) =>async(dispatch)=>{
    console.log(formdata) ; 
    try{
        const {data} = await api.deposit(formdata); 
        dispatch({type:"AUTH" , data}) ;
        console.log(data); 
    }
    catch(err){
        console.log(err); 
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
export const admin = (formdata , history) =>async(dispatch)=>{
    try{
        console.log(formdata) ; 
        const {data} = await api.admin(formdata); 
        console.log(data);
        const datadetails = {
            result:data?.result , 
            token:data?.token,
        }
        console.log(data?.userdetails)
        dispatch({type:"AUTH" , data:datadetails}) ;
        dispatch({type:"USERDETAILS" , data:data?.userdetails}) 
        history.push("/AdminPage");
        
    }catch(err){
        console.log(err); 
        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
        dispatch({type:"ERROR" , payload : error_message}) ;
    }
}
export const totalcoinsdata = (formdata)=>async(dispatch)=>{
    console.log(formdata) ;     
    try{
const {data} = await api.totalcoins(formdata)
console.log(data); 
dispatch({type:"AUTH" , data}); 

    }catch(err){
        console.log(err) ;
    }
}
export const laddergame = (data) =>async(dispatch)=>{
    
    try{
        dispatch({type:"LADDERGAME" , data})
    }catch(err){
        console.log(err); 
    }
}
export const adminwithdrwal = (formdata) =>async(dispatch)=>{
    console.log(formdata) ; 
    try{
        alert("coins request send "); 
        const {data} = await api.adminwithdrwal(formdata);
        
        console.log(data); 
    }catch(err){
        console.log(err); 
    }
}
export const userdetails = (id)=>async(dispatch)=>{
    console.log(id) ; 
    try{
        const {data} = await api.userdetails(id);
        console.log(data); 
        dispatch({type:"AUTH" , data}) ; 
       
    }catch(err){
        console.log(err); 
    }
}

export const  adminDeposit = (formdata)=>async(dispatch)=>{
console.log(formdata) ; 
try{
    
    alert("deposit request send!!");
const {data} = await api.adminDeposit(formdata);
 

console.log(data) ; 
}catch(err){
    console.log(err); 
}
}
export const adminDepositAllow = (formdata) =>async(dispatch)=>{
    console.log(formdata); 
    
    try{
        alert("money deposited in user account");
        const {data} = api.adminDepositAllow(formdata) ; 
        console.log(data) ; 
    }catch(err){
        console.log(err)
    }
}
export const adminDepositDecline = (formdata) =>async(dispatch)=>{
    console.log(formdata); 
    try{
        const {data} = api.adminDepositDecline(formdata) ; 
    }catch(err){
        console.log(err)
    }
}
export const allowadminwithdrwal = (formdata) =>async(dispatch)=>{
    console.log(formdata) ; 
    try{
        const {data} = api.allowadminwithdrwal(formdata) ; 
    }catch(err){
        console.log(err);
    }
}
export const declineadminwithdrwal = (formdata) =>async(dispatch)=>{
    console.log(formdata) ; 
    try{
        const {data} = api.declineadminwithdrwal(formdata) ; 
    }catch(err){
        console.log(err);
    }
}
export const admindetails = ()=>async(dispatch)=>{
    try{
        const {data} = await api.admindetails() ;
        console.log(data) ;  
        dispatch({type:"AUTH" , data});
      
    }catch(err){
        console.log(err) ; 
    }
}
export const homepage = (formdata)=>async(dispatch)=>{
    console.log(formdata) ; 
    try{
        const {data}  = await api.homepage(formdata) ; 
        console.log(data); 
    }catch(err){
        console.log(err) ; 
    }
}
export const gethomepageimage = ()=>async(dispatch)=>{
    try{
        const {data} = await api.gethomepageimage() ; 
        console.log(data) ; 
        dispatch({type:"GETHOMEIMAGE" , data}) ; 
    }catch(err){
        console.log(err) ; 
    }
}
export const editcoins = (formdata)=>async(dispatch)=>{
    console.log(formdata)
    try{
const {data} = await api.editcoins(formdata); 
console.log(data); 
    }catch(err){
        console.log(err) ; 
        const error_message=(err.response.data.message); 
        console.log(error_message) ; 
        dispatch({type:"ERROR" , payload : error_message}) ;
    }
}