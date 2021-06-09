const authreducers = (state ={authdata:null , error:null}, action )=>{
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
         
        default:
            return state  ; 
    }
}
export default authreducers ; 