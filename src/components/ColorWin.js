import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/actions/MoneyTree';
import {totalcoinsdata} from "../redux/actions/auth"
import {useHistory} from "react-router-dom"; 
function ColorWin() {
    
    const dispatch = useDispatch(); 
    const user = JSON.parse(localStorage.getItem("profile"));
    var userid = user?.result?._id; 
    var [coins, setcoins] = useState(""); 
    var[totalcoins ,setotalcoins] = useState(user?.result?.coins) ; 
  var [drawhis , setdrwahis] = useState([]) ; 
  var dicehistory = useSelector(state => state.History) ; 
var [value, setvalue] = useState([]) 

    var num =40 ;
  const [time , setime] = useState(num) ;


  
  const [color2, setColor2] = useState('red');
  var [dice1 , setdice1] = useState(5);  
  const color1 = ['green', 'red', 'yellow'];
  const [color] = useState(
      Math.floor(Math.random())
  );

 const [data , setdata] = useState({
    0:"" ,
    1:"" ,
    2:"" ,  
   3:"" ,
   4:"" ,
   5:"" ,
   6:"" ,
   7:"" ,
   8:"" ,
   9:"" 
 })
  var timeref;
  let[numberofdraw , setnumberofdraw]  =useState(0) ; 
  var [numberclick, setnumberclick] = useState();
 
  const diceRoll = ()=>{
    const dice1=Math.floor(Math.random() * 2) + 1 ; 
    setdice1(dice1) ; 
  }

  
  function myFunction() {
    timeref = setInterval(function(){ 
        num = num-1; 
        setime(num) 
        if(num<1){
             num=40;
            numberofdraw = numberofdraw+1
            setnumberofdraw(numberofdraw)
            clearInterval(timeref)
            diceRoll();    
            myFunction(); 
            setColor2(color1[Math.floor(Math.random() * color1.length)]);
        }
    },
         1000);
  }

useEffect(() => {
 
  myFunction()
}, [numberofdraw])
var historydata = {
  color2 , dice1
}

useEffect(() => {
  
  let lastElement1 = dicehistory[dicehistory.length - 5]
  let lastElement2 = dicehistory[dicehistory.length - 4]
  let lastElement3 = dicehistory[dicehistory.length - 3];
  let lastElement4 = dicehistory[dicehistory.length - 2];
  let lastElement5 = dicehistory[dicehistory.length - 1];
  var val=[lastElement5,lastElement4,lastElement3, lastElement2,lastElement1]
  dispatch(history(historydata));
setvalue(val) ; 

}, [numberofdraw])
var arr1 = [0,1,2,3,4,5,6,7,8,9] ; 
var arr2=[]; 


const numberClicked = (e)=>{
   e.preventDefault();
   setnumberclick(e.target.value);
   console.log(numberclick);
  
   arr2 = arr1.filter((arr1) => e.target.value != arr1);
//    console.log(dice1);
  
}

const coinbuyed = (e) => {
  e.preventDefault();
  console.log("hello");
  console.log(dice1)
  console.log(coins);
  console.log(numberclick);
  if(userid){ 
  if (numberclick == dice1) {  
    var coinsnumberofcoin = coins * 9.1;
    console.log(totalcoins); 
    totalcoins=coinsnumberofcoin+totalcoins
    console.log(totalcoins); 
    setotalcoins(totalcoins); 
    console.log(coinsnumberofcoin);
    dispatch(totalcoinsdata({totalcoins,userid})) ; 
    alert(coinsnumberofcoin);
  }
  else{
    totalcoins=totalcoins-coins; 
    setotalcoins(totalcoins);
    dispatch(totalcoinsdata({totalcoins,userid})) ;
    alert(`oops! wrong answer`);
  }
}
else{
  alert("please login") ; 
}
}


return (
    <div>
        
      <div className="relative bg-gray-100 pb-48">
          {
                <ul className="list-none p-0 m-0">
                <li className="pl-5 pr-12 hover:bg-yellow-400 hover:text-white">
                    <div className="flex flex-row">
                        <h1>{value[0]?.dice1}</h1>
                        <h1>{value[0]?.color2}</h1>
                    
                    </div>
                </li>
                <li>
                    <div className="flex flex-row">
                        <h1>{value[1]?.dice1}</h1>
                        <h1>{value[1]?.color2}</h1>
                      
                    </div>
                </li>
                <li>
                    <div className="flex flex-row">
                        <h1>{value[2]?.dice1}</h1>
                        <h1>{value[2]?.color2}</h1>
                     
                    </div>
                </li>
                <li>
                    <div className="flex flex-row">
                        <h1>{value[3]?.dice1}</h1>
                        <h1>{value[3]?.color2}</h1>
                      
                    </div>
                </li>
                <li>
                    <div className="flex flex-row">
                        <h1>{value[4]?.dice1}</h1>
                        <h1>{value[4]?.color2}</h1>
                       
                    </div>
                </li>
            </ul>   
          }
<div className="flex p-3 justify-between">
    <div className="pt-10 pl-5">
    {time<10? 
      <>
        <div className="text-white p-1 pr-3 pl-3 bg-gray-700 rounded-md h-8">{dice1}</div>
        <div className="flex items center">
            <h1 className="mt-2">Color:</h1> 
            <div className="flex">
                    <div style={{backgroundColor: color2}} className="mt-2 ml-2 h-5 w-5 rounded-full"/>                   
            </div>
        </div>
        </>:<h1>choose</h1>
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
        <h1 className="text-lg pl-5 p-1 font-medium bg-gray-700 text-white mb-1">Color</h1> 
        <div className="grid grid-flow-col">
          <div className="inline-block mr-2 ml-2 p-2 bg-gray-800 rounded-lg items-center">
              <div className="flex items-center pl-2">
                <h1 className="text-green-300 text-md pr-2">GREEN</h1>
                <div className="mt-2 ml-2 h-7 w-7 rounded-full bg-green-600"/>
              </div>
            <p className="text-white text-sm pl-9 pt-2">2.02</p>
          </div>
          <div className="inline-block mr-2 ml-2 p-2 bg-gray-800 rounded-lg items-center">
              <div className="flex items-center pl-2">
                <h1 className="text-red-300 text-md pr-2">RED</h1>
                <div className="mt-2 ml-2 h-7 w-7 rounded-full bg-red-500"/>
              </div>
            <p className="text-white text-sm pl-7 pt-2">2.02</p>
          </div>
          <div className="inline-block mr-2 ml-2 p-2 bg-gray-800 rounded-lg items-center">
              <div className="flex items-center pl-2">
                <h1 className="text-yellow-300 text-md pr-2">YELLOW</h1>
                <div className="mt-2 ml-2 h-7 w-7 rounded-full bg-yellow-500"/>
              </div>
            <p className="text-white text-sm pl-10 pt-2">4.51</p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-lg bg-gray-700 pl-5 p-1 mb-1 font-medium text-white">Number</h1>
        <div className="grid grid-flow-row">
          <div className="grid grid-flow-col mb-2">
            <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={0} name="0"  onClick={numberClicked} className="text-yellow-600 text-md">0</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={1} name="1"  onClick={numberClicked} className="text-yellow-600 text-md">1</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={2} name="2"  onClick={numberClicked} className="text-yellow-600 text-md">2</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={3} name="3"  onClick={numberClicked} className="text-yellow-600 text-md">3</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
          </div>
          <div className="grid grid-flow-col mb-2">
            <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={4} name="4"  onClick={numberClicked} className="text-yellow-600 text-md">4</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={5} name="5"  onClick={numberClicked} className="text-yellow-600 text-md">5</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={6} name="6"  onClick={numberClicked} className="text-yellow-600 text-md">6</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">1.9</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                <button value={7} name="7"  onClick={numberClicked} className="text-yellow-600 text-md">7</button>
              </div>
              <p className="text-white ml-7 mt-1 text-sm">9.1</p>
            </div>
          </div>
          <div className="grid grid-flow-col mb-2">
            <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-16">
                <button value={8} name="8"  onClick={numberClicked} className="text-yellow-600 text-md">8</button>
              </div>
              <p className="text-white ml-16 pl-2 pt-1 mt-1 text-sm">9.1</p>
            </div>
            <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
              <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-16">
                <button value={9} name="9"  onClick={numberClicked} className="text-yellow-600 text-md">9</button>
              </div>
              <p className="text-white ml-16 pl-2 pt-1 mt-1 text-sm">9.1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {   time>10 && 
    <div className="block fixed inset-x-0 text-white bottom-12 z-11 bg-gray-800 shadow-lg rounded-t-3xl">
      <div className="flex">
        <h1 className="pt-6 pl-3 font-semibold text-xl text-yellow-500">Coins</h1>
        <input className="h-12 items-center pl-8 outline-none bg-gray-600 text-white w-24 m-3 rounded-2xl" type="text" 
          onChange={(e) => setcoins(e.target.value)}   
        />
        <h1 className="pt-6 pl-1 font-semibold text-xl text-yellow-500">/Buy</h1>
        <button className="mt-4 mb-3 rounded-lg ml-16 p-2 pl-6 pr-6 bg-gray-600 font-semibold text-xl text-yellow-500"
        onClick={coinbuyed}
        >BUY</button>
      </div>
    </div>
    }
</div>
</div>
  )    
}

export default ColorWin