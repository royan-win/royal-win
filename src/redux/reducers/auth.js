const authreducers = (state ={authdata:null , error:null , userdetails:[]}, action )=>{
    switch (action.type) {
        case "AUTH":
          localStorage.setItem('profile' , JSON.stringify({...action?.data})) ; 
        return {...state , authdata:action?.data}
        case "LOGOUT":
            localStorage.clear() ; 
          return {...state , authdata:action?.data}
        case "ERROR":
          localStorage.setItem('error' , (action?.payload)) ; 
         return {error:action?.payload}
        case "USERDETAILS":
          localStorage.setItem('users_data' , JSON.stringify([...action?.data])) ; 
           return {
            ...state.userdetails, userdetails:action?.data
           }
        default:
            return state  ; 
    }
}
export default authreducers ; 