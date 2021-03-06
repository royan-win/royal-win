import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { moneytreehistory } from '../redux/actions/history';
import {totalcoinsdata} from "../redux/actions/auth"
const MoneyTree = () => {
  const dispatch = useDispatch(); 
  const user = JSON.parse(localStorage.getItem("profile"));
  var userid = user?.result?._id; 
  var dicehistory = useSelector(state => state.History);
  var [value, setvalue] = useState([])
var[paused , setpaused]= useState(false); 
  var [coins, setcoins] = useState("");
  var [typeval, settypeval] = useState(""); 
  const [timeatclick , settimeatclick] = useState(null) ;  
  var[totalcoins ,setotalcoins] = useState(user?.result?.coins) ; 
  var[coinsmultiplied , setcoinsmultiplied] = useState(1); 
  var num = 40;
  var num2 =10; 
  var[time2, settime2] = useState(num2); 
  const [time, setime] = useState(num);
  const [rollSum, setrollsum] = useState(13);
  const [nextrollsum, setnextrollsum] = useState("");
  var [dice1, setdice1] = useState("");
  var [dice2, setdice2] = useState("");
  var [dice3, setdice3] = useState("");
  var [size , setsize] = useState(""); 
var [type , settype] = useState("");
  const [data, setdata] = useState({
    3: 12,
    4: 13,
    5: 65,
    6: 13,
    7: 86,
    8: 35,
    9: 4,
    10:85,
    11: 23,
    12: 23,
    13: 28,
    14: 54,
    15: 34,
    16: 76,
    17: 34,
    18: 34,
  })
  var [numberclick, setnumberclick] = useState();
  var timeref;
  var timeref2; 
  let [numberofdraw, setnumberofdraw] = useState(0);


  var historydata = {
    dice1, dice2, dice3, rollSum
  }
  
  function myFunction() {
    timeref = setInterval(function () {
      num = num - 1;
      setime(num)
      
      if (num < 1) {
        num = 41;
        numberofdraw = numberofdraw + 1
        setnumberofdraw(numberofdraw)
        clearInterval(timeref)
      }
      if(num==10){
        alert("time's up"); 
      }
    },
      1000);
  }







var sizearr = ["large" , "small"] ; 

 useEffect(() => {
  myFunction()
  setsize(sizearr[Math.floor(Math.random() * sizearr.length)]);
  const dice1 = Math.floor(Math.random() * 6) + 1;
  setdice1(dice1);
  const dice2 = Math.floor(Math.random() * 6) + 1;
  setdice2(dice2);
  const dice3 = Math.floor(Math.random() * 6) + 1;
  setdice3(dice3);
  const sum = dice1 + dice2 + dice3;
  setrollsum(sum);
 }, [numberofdraw]);

  useEffect(() => {
    dispatch(moneytreehistory(historydata));
    
  }, [numberofdraw])

  useEffect(() => {

    let lastElement1 = dicehistory[dicehistory.length - 5]
    let lastElement2 = dicehistory[dicehistory.length - 4]
    let lastElement3 = dicehistory[dicehistory.length - 3];
    let lastElement4 = dicehistory[dicehistory.length - 2];
    let lastElement5 = dicehistory[dicehistory.length - 1];
    var val = [lastElement5, lastElement4, lastElement3, lastElement2, lastElement1]

    setvalue(val);

  }, [numberofdraw])



  const numberClicked = (e) => {
    e.preventDefault();
    const numval  =parseInt(e.target.value); 
    console.log(e.target.name); 
    console.log(numval);  
    setnumberclick(e.target.value);
    settimeatclick(time) ; 
    console.log(Object.values(data)); 
  var coinsmult = (data[Object.keys(data)[numval-3]]);
  setcoinsmultiplied(coinsmult);  
  settypeval(e.target.name); 
    if(e.target.value %2==0){
      settype("even"); 
    }
    else{
      settype("odd"); 
    }
    console.log(numberclick); 
    console.log(rollSum);
  }


  const coinbuyed = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(rollSum)
    console.log(coins);
    console.log(numberclick);
    var coinsnumberofcoin1
    var coinsnumberofcoin2
    var coinsnumberofcoin3
    
    
    if(userid){
     
    if (numberclick == rollSum ||numberclick == size || numberclick == type ) { 
      if(numberclick == rollSum ){
        coinsnumberofcoin1 = coins * coinsmultiplied;
      }
      if(numberclick == size){
        coinsnumberofcoin2 = coins * 1.9;
      }
      if(numberclick == type){
        coinsnumberofcoin2 = coins * 1.9;
      }

      console.log(totalcoins);
      if(typeval=="numberval"){
        totalcoins=coinsnumberofcoin1+totalcoins
      } 
      if(typeval=="oddevenval"){
        totalcoins=coinsnumberofcoin2+totalcoins 
      }
      if(typeval=="sizeval"){
        totalcoins=coinsnumberofcoin3+totalcoins 
      }
     
      console.log(totalcoins); 
      setotalcoins(totalcoins); 
      dispatch(totalcoinsdata({totalcoins,userid})) ; 
      // setcoins(coinsnumberofcoin);
      console.log(coinsnumberofcoin1);
      alert(`${coinsnumberofcoin1==undefined? coinsnumberofcoin2: coinsnumberofcoin1}`);
    }
    else{
      if(typeval=='numberval'){
        coinsnumberofcoin1 = coins * coinsmultiplied;
        totalcoins=totalcoins-(coins*coinsmultiplied); 
        }
        if(typeval=="oddevenval"){
        coinsnumberofcoin2 = coins * 1.9;
        totalcoins=totalcoins-(coins*1.9)
        }
        if(typeval=="sizeval"){
          console.log("in type val") ; 
          coinsnumberofcoin2 = coins * 1.9;
          totalcoins=totalcoins-(coins*1.9) 
        }
      console.log()  ;
      setTimeout(() => {
        totalcoins=totalcoins-coins; 
        setotalcoins(totalcoins);
        dispatch(totalcoinsdata({totalcoins,userid}));
        alert(`oops! wrong answer ${coinsnumberofcoin1==undefined? coinsnumberofcoin2: coinsnumberofcoin1}`);
      } ,  `${timeatclick}000`-10000);
    }
    }
    else{
      alert("please login") ; 
    }

  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>{value[0]?.dice1}</h1>
        <h1>{value[0]?.dice2}</h1>
        <h1>{value[0]?.dice3}</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>{value[1]?.dice1}</h1>
        <h1>{value[1]?.dice2}</h1>
        <h1>{value[1]?.dice3}</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>{value[2]?.dice1}</h1>
        <h1>{value[2]?.dice2}</h1>
        <h1>{value[2]?.dice3}</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>{value[3]?.dice1}</h1>
        <h1>{value[3]?.dice2}</h1>
        <h1>{value[3]?.dice3}</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>{value[4]?.dice1}</h1>
        <h1>{value[4]?.dice2}</h1>
        <h1>{value[4]?.dice3}</h1>
      </div>


      <div className="relative bg-gray-100 pb-48">
        <div className="flex p-3 justify-between">
          <div className="flex pt-10 pl-5">
           { time<10 ?
           <>
            <div className="text-gray-900">
            
              <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{dice1}</button>{"+"}
              <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{dice2}</button>{"+"}
              <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{dice3}</button>{"="}
            </div>
            <div className="text-white p-1 pr-3 pl-3 bg-gray-700 rounded-md h-8">{rollSum}</div>
            <div className="text-white p-1 pr-3 pl-3 bg-gray-700 rounded-md h-8">{size}</div>
            </> : <h1>choose now</h1>
          }
          </div>
          <div className="mt-2 mr-3">
            <div className="flex">
              <h1 className="text-lg text-gray-600">Draw no:</h1>
              <h1 className="font-semibold pl-2 text-lg">2021{numberofdraw}</h1>
            </div>
            <div className="flex text-2xl font-semibold">
              <h2>00:00:{time}</h2>
            </div>
            <div className="flex mt-2">
              <button className="border-red-500 text-red-500 mr-1">Rule</button>
              <button className="bg-red-500 text-white p-1 rounded-md pl-2 pr-2">Buy record</button>
            </div>
          </div>
        </div>
        <div>
          
          <div className="mt-5">
            <h1 className="text-lg pl-5 p-1 font-medium bg-gray-700 text-white mb-1">Sum Type</h1>
            <div className="grid grid-flow-col">
              <div className="inline-block mr-2 ml-2 p-2 bg-gray-800 rounded-lg items-center">
                <button name="sizeval" value="large" onClick={numberClicked} className="text-yellow-600 text-md">LARGE</button>
                <p className="text-white text-sm">1.9</p>
              </div>
              <div value="small" className="inline-block mr-2 p-2 bg-gray-800 rounded-lg items-center">
                <button name="sizeval" value="small" onClick={numberClicked} className="text-yellow-600 text-md">SMALL</button>
                <p className="text-white text-sm">1.9</p>
              </div>
              <div className="inline-block mr-2 p-2 bg-gray-800 rounded-lg items-center">
                <button name="oddevenval" value="odd" onClick={numberClicked} className="text-yellow-600 text-md">ODD</button>
                <p className="text-white text-sm">1.9</p>
              </div>
              <div className="inline-block mr-2 p-2 bg-gray-800 rounded-lg items-center">
                <button value="even" name="oddevenval" onClick={numberClicked}  className="text-yellow-600 text-md">EVEN</button>
                <p className="text-white text-sm">1.9</p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <h1 className="text-lg bg-gray-700 pl-5 p-1 mb-1 font-medium text-white">Sum Number</h1>
            <div className="grid grid-flow-row">
              <div className="grid grid-flow-col mb-2">
                <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={3} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">3</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={4} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">4</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={5} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">5</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={6} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">6</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
              </div>
              <div className="grid grid-flow-col mb-2">
                <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={7} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">7</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={8} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">8</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={9} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">9</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={10} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">10</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
              </div>
              <div className="grid grid-flow-col mb-2">
                <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={11} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">11</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={12} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">12</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={13} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">13</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={14} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">14</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
              </div>
              <div className="grid mb-2 grid-flow-col">
                <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={15} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">15</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={16} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">16</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={17} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">17</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
                <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                  <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                    <button value={18} name="numberval" onClick={numberClicked} className="text-yellow-600 text-md">18</button>
                  </div>
                  <p className="text-white ml-7 mt-1 text-sm">1.9</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {   time>10 && 
        
        <div className="block fixed inset-x-0 text-white bottom-12 z-11 bg-gray-800 shadow-lg rounded-t-3xl">
          <div className="flex">
            <h1 className="pt-6 pl-3 font-semibold text-xl text-yellow-500">Coins</h1>
            <input name="numberofcoin" value={coins} 
            onChange={(e) => setcoins(e.target.value)} 
            className="h-12 items-center pl-8 outline-none bg-gray-600 text-white w-24 m-3 rounded-2xl" type="number" />
            <h1 className="pt-6 pl-1 font-semibold text-xl text-yellow-500">/Buy</h1>
            <button onClick={coinbuyed} className="mt-4 mb-3 rounded-lg ml-16 p-2 pl-6 pr-6 bg-gray-600 font-semibold text-xl text-yellow-500">BUY</button>
          </div>
        </div>}
      </div>
    </>
  )
}

export default MoneyTree
