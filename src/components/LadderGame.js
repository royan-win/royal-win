import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { laddergame } from '../redux/actions/auth';
import { ladderhistory } from '../redux/actions/history';
import {totalcoinsdata} from "../redux/actions/auth"
import AD from "./images/AD.png";
import AC from "./images/AC.png";
import BC from "./images/BC.png";
import BD from "./images/BD.png";
import {ladder_record} from "../redux/actions/Records"; 
import {deposit} from "../redux/actions/auth" ; 

function LadderGame() {
    const dispatch = useDispatch(); 
    // var [numberclick, setnumberclick] = useState(0);
    var[countclicked , setcountclicked] = useState(1); 
    var[totalcoins ,setotalcoins] = useState(0) ; 
    var [coins, setcoins] = useState(""); 
    const user = JSON.parse(localStorage.getItem("profile"));
    let records = JSON.parse(localStorage.getItem("ladder record")) ;
    let dicehistory =   JSON.parse(localStorage.getItem("ladder history")) ;
    var userid = user?.result?._id; 
   let [historydata , sethistorydata] = useState([]); 
    var[totalcoins ,setotalcoins] = useState(user?.result?.coins) ; 
  // var dicehistory = useSelector(state => state.History) ; 
  var lengthhistory = dicehistory?.length ; 

   const location = useLocation() ; 
   const numberclick = useSelector(state => state?.auth?.laddergame)
var [value, setvalue] = useState([]); 
    var num =40 ;
  const [time , setime] = useState(num) ;
  const [arrfirst, setArrFirst] = useState(''); 
  const [arrsecond, setArrSecond] = useState(''); 
  const [arrimg, setArrImg] = useState('');
let [typeval, settypeval] = useState(''); 
 const [data , setdata] = useState({
   A:"" ,
   B:"" ,
   C:"" ,
   D:"" ,
   AC:"" ,
   AD:"" ,
   BC:"" ,
   BD:"",
 })
  var timeref;
  let[numberofdraw , setnumberofdraw]  =useState(0) ; 
  const arrone = ['A', 'B'];
  const arrtwo = ['C', 'D'];
  function myFunction() {
    timeref = setInterval(function(){ 
        num = num-1; 
        setime(num) 
        if(num<1){
             num=40;
            numberofdraw = numberofdraw+1
            setnumberofdraw(numberofdraw)
            clearInterval(timeref)        
            myFunction();  
        }
    },
    1000);
  }
  var historydatas = {
    arrfirst , arrsecond
  }
useEffect(() => {
  myFunction()
  
}, [numberofdraw])

useEffect(() => {
console.log(dicehistory.length) ;
 
}, [location]); 

useEffect(() => {
 console.log(dicehistory.historydata.length);
 
    let lastElement1 = dicehistory.historydata[dicehistory.historydata.length - 4];
    let lastElement2 = dicehistory.historydata[dicehistory.historydata.length - 3];
    let lastElement3 = dicehistory.historydata[dicehistory.historydata.length - 2];
    let lastElement4 = dicehistory.historydata[dicehistory.historydata.length - 1];
    let lastElement5 = dicehistory.historydata[dicehistory.historydata.length - 0];
    var val=[lastElement5,lastElement4,lastElement3, lastElement2,lastElement1];
    console.log(val); 
  setvalue(val) ; 
  console.log(historydatas); 
 
 
  console.log(value);
}, [numberofdraw]); 

useEffect(()=>{
  localStorage.setItem('ladder history' , JSON.stringify({historydata})) ; 
dispatch(ladderhistory(historydata));

},[numberofdraw])



useEffect(()=>{
  setArrFirst(arrone[Math.floor(Math.random() * arrone.length)]);
  setArrSecond(arrtwo[Math.floor(Math.random() * arrtwo.length)]);
  if(arrfirst === 'A' && arrsecond === 'C'){
    setArrImg(AC);
  } else if(arrfirst === 'A' && arrsecond === 'D'){
    setArrImg(AD);
  } else if(arrfirst === 'B' && arrsecond === 'D'){
    setArrImg(BD);
  } else if(arrfirst === "B" && arrsecond === "C"){
    setArrImg(BC);
  } 
setcountclicked(1); 
//  console.log(arrfirst,arrsecond ); 
},[numberofdraw , arrfirst,arrsecond])

const numberClicked = (e)=>{
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.name) ; 
    settypeval(e.currentTarget.name)
   dispatch(laddergame(e.currentTarget.value)); 
   
}

 
const coinbuyed = (e) => {
  e.preventDefault();
  console.log("hello");
  setcountclicked(0); 
  var coinsnumberofcoin; 
  var coinsnumberofcoin2 ; 
  console.log(countclicked);
  if(userid){
    if(countclicked){
  if (numberclick == `${arrfirst}`|| numberclick == `${arrsecond}` || numberclick == `${arrfirst}${arrsecond}`){

    if(numberclick == `${arrfirst}`|| numberclick == `${arrsecond}`) {  
      coinsnumberofcoin = coins * 1.9;
      console.log(coinsnumberofcoin) 
    }
    if(numberclick == `${arrfirst}${arrsecond}`){
       coinsnumberofcoin2 = coins * 3.6;
       console.log(coinsnumberofcoin2); 
    }
    if(coinsnumberofcoin==undefined){
    totalcoins=coinsnumberofcoin2+totalcoins
    }else{
    totalcoins=coinsnumberofcoin+totalcoins
    }
    console.log(totalcoins); 
    setotalcoins(totalcoins); 
    dispatch(totalcoinsdata({totalcoins,userid})) ; 
    console.log(coinsnumberofcoin);
    dispatch(deposit({deposit:coinsnumberofcoin , id:userid , name:user?.result?.Real_name}))
    alert(`congrats , you win more ${coinsnumberofcoin==undefined? coinsnumberofcoin2: coinsnumberofcoin} coins`);
    dispatch(ladder_record("win"));  
   }
  else{
    if(typeval=='doubleval'){
      coinsnumberofcoin = coins * 3.6;
      totalcoins=totalcoins-(coins*3.6)
      }else{
      coinsnumberofcoin = coins * 1.9;
      totalcoins=totalcoins-(coins*1.9)
      }
    setotalcoins(totalcoins);
    dispatch(totalcoinsdata({totalcoins,userid})) ;
    alert(`oops wrong answer you loose ${coinsnumberofcoin==undefined? coinsnumberofcoin2: coinsnumberofcoin}`);
    dispatch(ladder_record("loose")); 

  }
}
else{
  alert("wait for next turn"); 
}
}
else{
  alert("please login") ; 
}
}

    return (
      <>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[0]?.arrfirst}</h1>
        <h1>{value[0]?.arrsecond}</h1>
      
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[1]?.arrfirst}</h1>
        <h1>{value[1]?.arrsecond}</h1>
     
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[2]?.arrfirst}</h1>
        <h1>{value[2]?.arrsecond}</h1>
      
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[3]?.arrfirst}</h1>
        <h1>{value[3]?.arrsecond}</h1>
     
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[4]?.dice1}</h1>
        <h1>{value[4]?.dice2}</h1>
        </div>
        
       
        <div className="relative bg-gray-100 pb-48">      
  <div className="flex p-3 justify-between">
  <div className="flex pt-10 pl-5">
    <div className="text-gray-900">
    { time<10 ?
    <>
      <button className="p-1 text-white mr-2 pl-3 pr-3 bg-gray-700 rounded-full">{arrfirst}</button>
          <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{arrsecond}</button>
          </>
          :<h1>choose now</h1>
    }
    </div>
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
      <div className="w-62 h-0.5 bg-gray-300"/>
      <div className="items-center ml-32 mt-3">
      {time<10 &&
        <img src={arrimg} alt=""/>
      }
      </div>
      <div>
        <div className="mt-5">
          <h1 className="text-lg pl-5 p-1 font-medium bg-gray-700 text-white mb-1">Double Sided</h1> 
          <div className="grid grid-flow-col mb-2">
              <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value="A" name="singleval"  onClick={numberClicked} className="text-yellow-600 text-md">A</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value="A" name="singleval"  onClick={numberClicked} className="text-yellow-600 text-md">B</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value="C" name="singleval"  onClick={numberClicked} className="text-yellow-600 text-md">C</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value="D" name="singleval"  onClick={numberClicked} className="text-yellow-600 text-md">D</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
            </div>
        </div>
        <div className="pt-4">
          <h1 className="text-lg bg-gray-700 pl-5 p-1 mb-1 font-medium text-white">Start X End</h1>
          <div className="grid grid-flow-row">
            <div className="grid grid-flow-col mb-2">
              <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 border w-8 items-center ml-6">
                  <button value={"AC"} name="doubleval"  onClick={numberClicked} className="text-yellow-600 text-md">AC</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">3.6</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 border w-8 items-center ml-6">
                  <button value="AD" name="doubleval"  onClick={numberClicked} className="text-yellow-600 text-md">AD</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">3.6</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 border w-8 items-center ml-6">
                  <button value="BC" name="doubleval"  onClick={numberClicked} className="text-yellow-600 text-md">BC</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">3.6</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 border w-8 items-center ml-6">
                  <button value="BD" name="doubleval"  onClick={numberClicked} className="text-yellow-600 text-md">BD</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">3.6</p>
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
          <button className="mt-4 mb-3 rounded-lg ml-16 p-2 pl-6 pr-6 bg-gray-600 font-semibold text-xl text-yellow-500" onClick={coinbuyed}>BUY</button>
        </div>
      </div>
      }
</div>
</>
    )    
}
export default LadderGame 