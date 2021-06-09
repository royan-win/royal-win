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
    <div className="register">
      <h1>Register</h1>
      <form className="registerDetails">
        {error !== null ? (
          <h4 style={{ color: "red", fontWeight: "500" }}> {error}</h4>
        ) : (
          " "
        )}
        <button style={{background:"none",position: "relative",
    top: "46px",
    left: "10px",
    width: "34px",
    height: "35px",}}>91+</button>
        <input
          type="text"
          name="phone_number"
          onChange={handleChange}
          required
          placeholder="phone number"
        ></input>
        <input
          type="text"
          name="Real_name"
          onChange={handleChange}
          required
          placeholder="Real Name"
        ></input>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          required
          placeholder="email"
        ></input>
        <input
          type="text"
          name="bank_acc"
          onChange={handleChange}
          required
          placeholder="Bank Acc for withdrwal"
        ></input>
        <input
          type="text"
          name="ifsc"
          onChange={handleChange}
          required
          placeholder="IFSC"
        ></input>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
          placeholder="Password and payment pass"
        ></input>
        <input
          type="password"
          name="confirmpassword"
          onChange={handleChange}
          required
          placeholder="confirm password"
        ></input>
        <div id="recaptcha-container"></div>
        
        <div style={{ display: "flex", flexDirection: "row"  ,justifyContent:"space-between" }}>
          <button className="signup-button" onClick={handleSubmit}>
            Register
          </button>
          <Link to="/Login">Signin </Link>
        </div>
      </form>
    </div>
  );
};
export default Register;
