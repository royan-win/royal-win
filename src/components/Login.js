// import React, { useState } from 'react'
// import { useHistory } from 'react-router';
// import firebase from "../firebase";

// function Login({phoneno, samePass, setSamepass, password, setPhoneno, setPassword}) {

//     const history = useHistory();
//     const [loginpass, setLoginpass] = useState('');

//     const handleLogin = () => {
//         let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
//         let number = phoneno;
//         firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {
//             let code = prompt('Enter OTP','');
//             if(code == null) {
//                 return;
//             }
//             e.confirm(code).then((res) => {
//                 console.log(res.user, "user");
//                 history.push('/home');
//             })
//         }).catch((e) => {
//             console.log(e);
//         });
//     }

//     const passwordValidation = () => {
//         if(loginpass === password) {
//             setSamepass(true);
//         } else {
//             setSamepass(false);
//         }
//     }
//     return (
//         <div>
//             <label>Phone no</label>
//                 <input 
//                 placeholder="Phone Number" 
//                 type="text"
//                 autoFocus
//                     required
//                     value={phoneno}
//                     onChange={(e) => setPhoneno(e.target.value)}
//                 />
//                 <label>Password</label>
//                 <input 
//                 placeholder="Password" 
//                 type="password"
//                 autoFocus
//                     required
//                     value={loginpass}
//                     onChange={(e) => {
//                         setLoginpass(e.target.value);
//                         passwordValidation();
//                     }}
//                 />
//                 <div>
//                     {samePass ? (
//                         <h1>Password Matched!!</h1>
//                     ):(
//                         <h1>Password not Matched!!</h1>
//                     )}
//                 </div>
//                 <button onClick={handleLogin}>Login</button>
//                 <div id="recaptcha-container"></div>
//         </div>
//     )
// }

// export default Login
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/actions/auth";
import { Link ,useHistory} from "react-router-dom";
import Recaptcha from "react-recaptcha";
const Login = () => {
  const history = useHistory(); 
  let error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
//   const[checked , setchecked]= useState(false) ;
//   const [captcha, setcaptcha] = useState(false);

  const [formdata, setform] = useState({
    phone_number: "",
    password: "",
    
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setform({ ...formdata, [name]: value  });
  };
//   const switchmode = ()=>{
//   setchecked((prev) => !prev);
//   }
  
// console.log(checked);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (captcha) {
      dispatch(signin(formdata , history));
    // } else {
    //   alert("Please will Captcha");
    // }
  };
  const recaptchaLoaded = () => {
    console.log("captcha successfull");
  };
//   const verifyCallback = (response) => {
//     if (response) {
//   ;
//       setcaptcha(true);
//     } else {
//       console.log("not clicked");
//     }
//   };
  return (
    <>
      <div className="w-full bg-back-img h-screen flex flex-col justify-items-center justify-center items-center">
        <div className="bg-yellow-400 p-8 rounded-2xl w-72 -mt-36">
          <h1 className="items-center justify-center flex text-gray-800 font-semibold text-xl">Login</h1>
          {error !== null ? (
            <h4 className="text-red-600 font-semibold"> {error}</h4>
          ) : (
            " "
          )}
            <input
            className="pl-5 text-white mt-3 outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
              type="text"
              name="phone_number"
              onChange={handleChange}
              placeholder="phone number"
            ></input>
            <i className="fa fa-user"></i>
            <input
            className="pl-5 text-white outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
              type="text"
              name="password"
              onChange={handleChange}
              placeholder="password"
            ></input>
            <i className="fa fa-lock"></i>
            <Recaptcha
              sitekey="6LfE5h0bAAAAAO6yB7O3gshydGZFza32k9Wm5PHA"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              // verifyCallback={verifyCallback}
            />
            <div className="flex flex-row justify-center">
              <button className="m-3 w-24 rounded-lg h-9 bg-gray-800 text-white border-none shadow-md" onClick={handleSubmit} type="submit">
                Login
              </button>
            </div>
            <div className="mt-5 flex justify-between text">         
              <Link className="w-12 rounded-lg h-9 text-gray-800 font-semibold text-md border-none" to="/reset">Forgot password?</Link>
              <Link className="w-12 rounded-lg h-9 text-gray-800 font-semibold text-md border-none" to="/">Register</Link>
              <Link className="w-12 rounded-lg h-9 text-gray-800 font-semibold text-md border-none" to="/Admin">Admin</Link>
            </div>
          </div>
        
          {/* <label>
      remember me:
      <input type="checkbox" value={checked} name="remember_me" onChange={switchmode} placeholder="remember me"/>
    </label> */}
          
      </div>
    </>
  );
};

export default Login;
