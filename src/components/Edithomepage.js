import React  , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { homepage } from '../redux/actions/auth';
import axios from "axios" ; 
const Edithomepage = () => {
    const dispatch = useDispatch() ; 
    const [image1 , setimage1] = useState(null) ; 
    const [image2 , setimage2] = useState(null) ; 
    const [image3 , setimage3] = useState(null) ; 
    const [data , setdata] = useState(null) ; 
    const handlesubmit1 = async(e)=>{
        e.preventDefault() ; 
        const data = new FormData();
        data.append("file", image1);
        data.append("upload_preset", "wagerking");
        data.append("cloud_name", "daynsu4jq");
        try{
            const image1 = await axios.post(
                "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
                data
              );
              dispatch(homepage({image1:image1?.data?.secure_url}))
            }
            
            catch(err){
                console.log(err)
            }
    }   
    const handlesubmit2 = async(e)=>{
        e.preventDefault() ;
        const data = new FormData();
        data.append("file", image2);
        data.append("upload_preset", "wagerking");
        data.append("cloud_name", "daynsu4jq");
        try{
            const image2 = await axios.post(
                "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
                data
              );
              console.log(image2) ; 
              dispatch(homepage({image2:image2?.data?.secure_url}))
            }
            catch(err){
                console.log(err)
            }
    }
    const handlesubmit3 = async(e)=>{
        e.preventDefault() ;
        const data = new FormData();
        data.append("file", image3);
        data.append("upload_preset", "wagerking");
        data.append("cloud_name", "daynsu4jq");
        try{
            const image3 = await axios.post(
                "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
                data
              );
            dispatch(homepage({image3:image3?.data?.secure_url}))  
            }
            catch(err){
                console.log(err)
            }
    }
    const handlechange = (e)=>{
        const value = e.target.value  ; 
        console.log(value) ; 
        setdata({...data, value}) ; 
    }
    const handlesubmit = (e)=>{
       e.preventDefault() ;
       dispatch(homepage(data)) ;  

    }
    return (
        <>
        <form>
          <input onChange={(e) =>setimage1(e.target.files[0])} type="file"></input>
          <button type="submit" onClick={handlesubmit1}>update image 1</button>
          </form>
          <form>
          <input onChange={(e) =>setimage2(e.target.files[0])} type="file"></input>
          <button type="submit" onClick={handlesubmit2}>upadte image 2</button>
          </form>
          <form>
          <input onChange={(e) =>setimage3(e.target.files[0])} type="file"></input>
          <button type="submit" onClick={handlesubmit3}>update image 3</button>
          </form>
          <form>
          <input onChange={handlechange} type="text" placeholder="type here"></input>
          <button type="submit" onClick={handlesubmit}>submit</button>
          </form>
        </>
    )
}

export default Edithomepage
