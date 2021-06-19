import axios from "axios" ;
const API  =axios.create({baseURL:'http://localhost:8080'}) ;
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });
export const signin  = (formdata) =>API.post(`/users/signin` , formdata) ;
export const signup   = (formdata) => API.post(`/users/signup` , formdata) ;
export const reset   = (formdata) => API.post(`/users/reset` , formdata) ;
export const history  = (data) => API.post(`/history` , data) ;
export const newpassword = (id,formdata) => API.patch(`/users/newpassword/${id}` , formdata);
export const admin  = (data) =>API.post(`/users/admin` , data) ;
export const totalcoins = (data) =>API.post("/users/totalcoins" , data);
export const deposit = (formdata) => API.post(`/users/deposit` , formdata);
export const adminwithdrwal = (formdata) => API.post(`/users/adminwithdrwal` , formdata);
export const userdetails = (id)=> API.get(`users/userdetails/${id}`); 
export const adminDeposit = (formdata)=>API.post("/users/adminDeposit" , (formdata)) ; 
export const adminDepositAllow = (formdata)=>API.post("/users/adminDepositAllow" ,(formdata)) ; 
export const adminDepositDecline = (formdata)=>API.post("/users/adminDepositDecline" ,(formdata)) ; 
export const admindetails = ()=> API.get("/users/admindetails") ; 