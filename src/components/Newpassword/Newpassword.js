import React  , {useState} from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { newpassword } from '../../redux/actions/auth';
import { useParams , useHistory} from "react-router-dom";
import "./Newpassword.css"
const Newpassword = () => {
    const history = useHistory() ; 
    const dispatch = useDispatch();
    let error = useSelector((state) => state.auth.error);
    const [formdata, setform] = useState({
        password:"",
        confirmpassword:""
      });
      const { id } = useParams(); 
    const handleChange = (e)=>{
        const name = e.target.name; 
        const value = e.target.value;
      
        setform({...formdata, [name]: value });
    }
    const handleSubmit = ()=>{
        dispatch(newpassword(id,formdata , history)); 
    }
    return (
        <div className="newpassword" >
            <h1>New Password</h1>
            {error !== null ? (
          <h4 style={{ color: "red", fontWeight: "500" }}> {error}</h4>
        ) : (
          " "
        )}
           <input type="password" name="password" onChange={handleChange} requrired placeholder="password"></input>
           <input type="password" name="confirmpassword" onChange={handleChange} required  placeholder="Confirm password"></input> 
           <button type="submit" onClick={handleSubmit}>Reset password</button>
        </div>
    )
}

export default Newpassword
