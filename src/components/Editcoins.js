import React , {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux' ; 
import { editcoins } from '../redux/actions/auth';
const Editcoins = () => {
const [data , setdata]  = useState({
    username:""  ,
    coins:"", 
})
let error = useSelector((state) => state.auth.error);
const dispatch = useDispatch() ; 
    const handlechange = (e)=>{
        const name = e.target.name ; 
        const value = e.target.value  ;
        console.log(name , value) ;  
        setdata({...data , [name]:value});
    }
    const handlesubmit = (e)=>{
        e.preventDefault() ; 
        dispatch(editcoins(data)); 
    }
    return (
        
        <div>
        <form>
        {error !== null ? (
            <h4 className="text-red-600 font-semibold"> {error}</h4>
          ) : (
            " "
          )}
         <input name="username" onChange={handlechange} placeholder="enter the username"></input>
         <input name="coins" onChange={handlechange} placeholder="enter the coins"></input>  
         <button onClick={handlesubmit}>Submit</button>
         </form>
        </div>
    )
}

export default Editcoins
