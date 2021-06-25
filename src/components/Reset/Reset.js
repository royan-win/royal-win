import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/actions/auth";
import "./Reset.css";
const Reset = () => {
  let error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const [formdata, setform] = useState({
    email: "",
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setform({ ...formdata, [name]: value });
  };
  const handlesubmit = () => {
    dispatch(reset(formdata));
  };
  
  return (
    <div className="reset_password">
      <h1>Reset Password</h1>
      {error !== null ? (
        <h4 style={{ color: "red", fontWeight: "500" }}> {error}</h4>
      ) : (
        " "
      )}
      <input
        type="text"
        name="email"
        onChange={handlechange}
        placeholder="Email"
      ></input>
      <button type="submit" onClick={handlesubmit}>
        Send Email
      </button>
    </div>
  );
};

export default Reset;
