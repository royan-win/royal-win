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
