import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import BottomNav from './components/BottomNav';
import Deposit from './components/Deposit';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import PrivacyPolicy from './components/PrivacyPolicy';
import Register from './components/Register';
import firebase from "./firebase";
import  Bankaccount from "./components/Bankaccount" ; 
import MoneyTree from './components/MoneyTree';
import Terms from './components/Terms';
import AboutUs from './components/AboutUs';
import HelpCenter from './components/HelpCenter';
import Admin from './components/Admin';
import ColorWin from './components/ColorWin';
import UserDetails from './components/Userdetails';
import AdminPage from "./components/AdminPage" ; 
import Withdrawal from "./components/Withdrawal";
import LadderGame from './components/LadderGame';
import Coinswithdrwal from './components/Coinswithdrwal';
import Message from './components/Message';
import AndarBahar from './components/AndarBahar';
import Edithomepage from "./components/Edithomepage" ; 
function App() {

    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [accno, setAccno] = useState('');
    const [ifsc, setIfsc] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [phoneno, setPhoneno] = useState('');
    const [samePass, setSamepass] = useState(false);
    const [phonenoError, setPhonenoError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const admindata = JSON.parse(localStorage.getItem("profile"));
    console.log(admindata?.result?._id); 


    const clearInputs = () => {
      setPhoneno('');
      setPassword('');
  }

  const clearErrors = () => {
      setPhonenoError('');
      setPasswordError('');
  }

  const handleLogout = () => {
      firebase.auth().signOut();
  };

    const handleSubmit = (e) => {
      e.preventDefault();

      firebase.firestore().collection('user').add({
          name: name,
          accno: accno,
          ifsc: ifsc,
          password: password,
          confirmPass: confirmPass,
          phoneno: phoneno,
      }).catch((error) => {
          console.log(error.message);
      });

      setName('');
      setAccno('');
      setIfsc('');
      setPassword('');
      setConfirmPass('');
      setPhoneno('');
  }

  const passwordmatching = () => {
      if(password === confirmPass) {
          setSamepass(true);
      } else {
          setSamepass(false);
      }
  }

  /*const handlePhoneOtp = () => {
      let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      let number = phoneno;
      firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e) {
          let code = prompt('Enter OTP','');
          if(code == null) {
              return;
          }
          e.confirm(code).then((res) => {
              console.log(res.user, "user");
              history.push('/home');
          })
      }).catch((e) => {
          console.log(e);
      });
  }*/

  return (
    <div className="items-center overflow-x-hidden">
      <Router>
        <Header/>
       
        <Switch>
        <Route path="/Userdetails" component={UserDetails}/> 
          <Route path="/deposit">
            <Deposit/>
          </Route>
          <Route path="/ColorWin" component={ColorWin}>
        
          </Route>
          <Route path="/laddergame" component={LadderGame}></Route>
          <Route path="/terms">
            <Terms/>
          </Route>
          <Route path="/andarbahar">
            <AndarBahar></AndarBahar>
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy/>
          </Route>
          <Route path="/about">
            <AboutUs/>
          </Route>
          <Route path="/help">
            <HelpCenter/>
          </Route>
          <Route path="/coinswithdrwal">
            <Coinswithdrwal></Coinswithdrwal>
          </Route>
          <Route path="/moneytree">
            <MoneyTree/>
          </Route>
          <Route path="/message">
            <Message></Message>
          </Route>
          <Route path="/edithomepage">
          <Edithomepage></Edithomepage>
          </Route>
          {admindata?.result?._id !=="60c4a58ba4472a617063ad63" && 
          <Route path="/home" component={Home}>
            <Home
            handleLogout={handleLogout}
            />
            
          </Route>
      }
          {/* <Route Path="/AdminPage" component={AdminPage}/> */}
          <Route path="/Admin" component={Admin}/>
          <Route path="/AdminPage" component={AdminPage}/>
          <Route path="/withdrawal" component={Withdrawal}/>
          <Route path="/bankaccount" component={Bankaccount}>
          
          </Route>
      
          <Route path="/login" component={Login}>
            <Login
            phoneno={phoneno}
            setPhoneno={setPhoneno}
            password={password}
            setPassword={setPassword}
            samePass={samePass}
            setSamepass={setSamepass}
            />
          </Route>
          <Route exact path="/">
            <Register
            passwordmatching={passwordmatching}
            handleSubmit={handleSubmit}
            phoneno={phoneno}
            password={password}
            setPhoneno={setPhoneno}
            setPassword={setPassword}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            phonenoError={phonenoError}
            passwordError={passwordError}
            confirmPass={confirmPass}
            setConfirmPass={setConfirmPass}
            accno={accno}
            setAccno={setAccno}
            ifsc={ifsc}
            setIfsc={setIfsc}
            name={name}
            setName={setName}
            samePass={samePass}
            setSamepass={setSamepass}
            />
          </Route>
        </Switch>
        <BottomNav/>
      </Router>
    </div>
  );
}

export default App;
