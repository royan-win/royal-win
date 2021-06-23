import React  , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { homepage } from '../redux/actions/auth';
import axios from "axios" ; 
import {ProgressBar} from "react-bootstrap"  ;
const Edithomepage = () => {
    const dispatch = useDispatch() ; 
    const [percentage1 , setpercentage1] = useState(0) ; 
    const [percentage2 , setpercentage2] = useState(0) ; 
    const [percentage3, setpercentage3] = useState(0) ; 

    const changing1 = async(e)=>{
        e.preventDefault() ; 
        console.log(e.target.files[0]) ; 
        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", "wagerking");
        data.append("cloud_name", "daynsu4jq");
     
            const options ={
                onUploadProgress: (progressEvent) =>{ 
                    const {loaded , total}  = progressEvent ; 
                    let percent = Math.floor(loaded*100 / total); 
                    console.log(`${loaded}kb of ${total} | ${percent}%`)
                    if(percent<100){
                        setpercentage1(percent) ;     
                    }
                }
            }

            const image1 = await axios.post(
                "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
                data , options
              ).then(res=>{
                  console.log(res) ; 
                  dispatch(homepage({image1:res?.data?.secure_url}))
                  setpercentage1(0) ; 

              });    
    }  
  
    const changing2 = async(e)=>{
        e.preventDefault() ;
        const data = new FormData();
        data.append("file",  e.target.files[0]);
        data.append("upload_preset", "wagerking");
        data.append("cloud_name", "daynsu4jq");
        const options ={
            onUploadProgress: (progressEvent) =>{
                console.log(progressEvent) ; 
                const {loaded , total}  = progressEvent ; 
                let percent = Math.floor(loaded*100 / total); 
                console.log(`${loaded}kb of ${total} | ${percent}%`)
                if(percent<100){
                    setpercentage2(percent) ;     
                }
            }
        }
            const image2 = await axios.post(
                "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
                data , options
              ).then(res=>{
                console.log(res) ;
                dispatch(homepage({image2:res?.data?.secure_url})) 
                setpercentage2(0) ; 

            });    
    }

    const changing3 = async(e)=>{
        e.preventDefault() ;
        const data = new FormData();
        data.append("file",  e.target.files[0]);
        data.append("upload_preset", "wagerking");
        data.append("cloud_name", "daynsu4jq");
        const options ={
            onUploadProgress: (progressEvent) =>{
                console.log(progressEvent) ; 
                const {loaded , total}  = progressEvent ; 
                let percent = Math.floor(loaded*100 / total); 
                console.log(`${loaded}kb of ${total} | ${percent}%`)
                if(percent<100){
                    setpercentage3(percent) ;     
                }
            }
        }
                const image3 = await axios.post(
                "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
                data , options
              ).then(res=>{
                console.log(res); 
                setpercentage3(0); 
                dispatch(homepage({image3:res?.data?.secure_url}))

            });  ;
            }

    return (
        <>
        <form>
          <input onChange={changing1} type="file"></input>
          <ProgressBar now={percentage1} active="true" label={`${percentage1}%`}/>
          <div className='h-5 w-50 bg-gray-300'>
            <div
                style={{ width: `${percentage1}%`}}
                className={`h-full ${
                    percentage1 < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
      
          </form>
          <form>
          <input onChange={changing2} type="file"></input>
          <ProgressBar now={percentage2} active="true" label={`${percentage2}%`}/>
          <div className='h-5 w-50 bg-gray-300'>
            <div
                style={{ width: `${percentage2}%`}}
                className={`h-full ${
                    percentage2 < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>

          </form>
          <form>
          <input onChange={changing3} type="file"></input>
          <ProgressBar now={percentage3} active="true" label={`${percentage3}%`}/>
          <div className='h-5 w-50 bg-gray-300'>
            <div
                style={{ width: `${percentage3}%`}}
                className={`h-full ${
                    percentage3 < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
         
          </form>
        </>
    )
}

export default Edithomepage
