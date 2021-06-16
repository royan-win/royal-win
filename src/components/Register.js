import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/actions/auth";
import "./Register.css";
import Recaptcha from "react-recaptcha";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";
const Register = () => {
  const history = useHistory();  
  let error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const [captcha, setcaptcha] = useState(false);
  const [formdata, setform] = useState({
    phone_number: "",
    Real_name: "",
    email: "",
    bank_acc: "",
    ifsc: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => { 
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setform({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    // if (captcha) {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        console.log(recaptcha);
        let number = formdata.phone_number;
        firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {
          let code = prompt('Enter OTP', '');
          if(code == null) {
            return;
          } 
          e.confirm(code).then((res) => {
            console.log(res.user, "user");
          })
        }).catch((e) => {
          console.log(e);
        });
        e.preventDefault();
      
      
      dispatch(signup(formdata,history));
    // } else {
    //   alert("Please will Captcha");
    // }
  };

//   const phoneAuth = () => {
 
//   }


//   const verifyCallback = (response) => {
//     if (response) {
//       setcaptcha(true);
//     } else {
//       console.log("not clicked");
//     }
//   };
//   const recaptchaLoaded = () => {
//     console.log("captcha successfull");
//   };
  return (
    <div className="w-full bg-back-img h-screen flex flex-col justify-items-center justify-center items-center">
    <div className=" bg-yellow-400 p-8 rounded-2xl w-72 -mt-36">
      <h1 className="items-center justify-center flex text-gray-800 font-semibold text-xl">Register</h1>
      <form className="flex flex-col">
        {error !== null ? (
          <h4 className="text-red-600 font-semibold">{error}</h4>
        ) : (
          " "
        )}
        <button className="bg-gray-800 text-white relative top-8 rounded-xl left-1 w-10 h-7">91+</button>
        <input
        className="pl-12 outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="text"
          name="phone_number"
          onChange={handleChange}
          required
          placeholder="Enter Phone Number"
        ></input>
        <input
          className=" outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="text"
          name="Real_name"
          onChange={handleChange}
          required
          placeholder="Real Name"
        ></input>
        <input
          className=" outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="text"
          name="email"
          onChange={handleChange}
          required
          placeholder="Email"
        ></input>
        <input
          className=" outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="text"
          name="bank_acc"
          onChange={handleChange}
          required
          placeholder="Bank Account for Withdrwal"
        ></input>
        <input
          className=" outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="text"
          name="ifsc"
          onChange={handleChange}
          required
          placeholder="IFSC"
        ></input>
        <input
          className=" outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="password"
          name="password"
          onChange={handleChange}
          required
          placeholder="Password"
        ></input>
        <input
          className=" outline-none bg-gray-800 opacity-70 h-10 rounded-xl mb-2"
          type="password"
          name="confirmpassword"
          onChange={handleChange}
          required
          placeholder="Confirm Password"
        ></input>
        <div id="recaptcha-container"></div>
        
        <div className="flex flex-row justify-between">
          <button className="m-3 w-24 rounded-lg h-9 bg-gray-800 text-white border-none shadow-md" onClick={handleSubmit}>
            Register
          </button>
          <Link className="m-3 w-12 rounded-lg h-9 text-gray-800 font-semibold text-lg border-none" to="/Login">Login</Link>
        </div>
      </form>
    </div>
    
  </div>
  );
};
export default Register;
