import React , {useState , useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"; 
import { history } from '../redux/actions/MoneyTree';
const MoneyTree = () => {
  const dispatch = useDispatch(); 
  var [drawhis , setdrwahis] = useState([]) ; 
  var dicehistory = useSelector(state => state.History) ; 
var [value, setvalue] = useState([]) 

    var num =5 ;
  const [time , setime] = useState(num) ;
  const [rollSum , setrollsum] = useState(13); 
  const [nextrollsum , setnextrollsum] = useState(""); 
  var [dice1 , setdice1] = useState(5); 
  var [dice2 , setdice2] = useState(1);
  var [dice3 , setdice3] = useState(7); 
 const [data , setdata] = useState({
   3:"" ,
   4:"" ,
   5:"" ,
   6:"" ,
   7:"" ,
   8:"" ,
   9:"" ,
   10:"" ,
   11:"" ,
   12:"" ,
   13:"" ,
   14:"" ,
   15:"" ,
   16:"" ,
   17:"" ,
   18:"" ,
 })
  var timeref;
  let[numberofdraw , setnumberofdraw]  =useState(0) ; 
 
  const diceRoll = ()=>{
    const dice1=Math.floor(Math.random() * 6) + 1 ; 
    setdice1(dice1) ; 
    const dice2=Math.floor(Math.random() * 6) + 1 ; 
    setdice2(dice2) ; 
    const dice3=Math.floor(Math.random() * 6) + 1 ; 
    setdice3(dice3) ; 
    const sum = dice1+dice2+dice3 ; 
    setrollsum(sum); 
  }
  var historydata = {
    dice1 , dice2 , dice3 , rollSum
  }
  
  function myFunction() {
    timeref = setInterval(function(){ 
      
        num = num-1; 
        setime(num) 
        if(num<1){
             num=5;
            numberofdraw = numberofdraw+1
            setnumberofdraw(numberofdraw)
            clearInterval(timeref)
            diceRoll();    
            myFunction(); 
        }
    },
         1000);
         
        
  }

useEffect(() => {
  dispatch(history(historydata)); 
  myFunction()
 
 
}, [numberofdraw])

useEffect(() => {
  
  let lastElement1 = dicehistory[dicehistory.length - 5]
  let lastElement2 = dicehistory[dicehistory.length - 4]
  let lastElement3 = dicehistory[dicehistory.length - 3];
  let lastElement4 = dicehistory[dicehistory.length - 2];
  let lastElement5 = dicehistory[dicehistory.length - 1];
  var val=[lastElement5,lastElement4,lastElement3, lastElement2,lastElement1]

setvalue(val) ; 

}, [numberofdraw])
var arr1 = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18] ; 
var arr2=[]; 
const numberClicked = (e)=>{
   e.preventDefault();
  console.log(e.target.value);
  console.log(arr1); 
  arr2= arr1.filter((arr1) => e.target.value !=arr1 );

  
   
  if(e.target.value==rollSum){
    alert("write answer"); 
  }
}

    return (
      <>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[0]?.dice1}</h1>
        <h1>{value[0]?.dice2}</h1>
        <h1>{value[0]?.dice3}</h1>
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[1]?.dice1}</h1>
        <h1>{value[1]?.dice2}</h1>
        <h1>{value[1]?.dice3}</h1>
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[2]?.dice1}</h1>
        <h1>{value[2]?.dice2}</h1>
        <h1>{value[2]?.dice3}</h1>
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[3]?.dice1}</h1>
        <h1>{value[3]?.dice2}</h1>
        <h1>{value[3]?.dice3}</h1>
        </div>
        <div style={{display:"flex" , flexDirection:"row"}}>
        <h1>{value[4]?.dice1}</h1>
        <h1>{value[4]?.dice2}</h1>
        <h1>{value[4]?.dice3}</h1>
        </div>
        
       
        <div className="relative bg-gray-100 pb-48">      
  <div className="flex p-3 justify-between">
  <div className="flex pt-10 pl-5">
    <div className="text-gray-900">
      <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{dice1}</button>{"+"}
          <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{dice2}</button>{"+"}
          <button className="p-1 text-white pl-3 pr-3 bg-gray-700 rounded-full">{dice3}</button>{"="}
    </div>
      <div className="text-white p-1 pr-3 pl-3 bg-gray-700 rounded-md h-8">{rollSum}</div>
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
              <h1 className="text-yellow-600 text-md">LARGE</h1>
              <p className="text-white text-sm">1.9</p>
            </div>
            <div value="small" className="inline-block mr-2 p-2 bg-gray-800 rounded-lg items-center">
              <h1 className="text-yellow-600 text-md">SMALL</h1>
              <p className="text-white text-sm">1.9</p>
            </div>
            <div className="inline-block mr-2 p-2 bg-gray-800 rounded-lg items-center">
              <h1 className="text-yellow-600 text-md">ODD</h1>
              <p className="text-white text-sm">1.9</p>
            </div>
            <div className="inline-block mr-2 p-2 bg-gray-800 rounded-lg items-center">
              <h1 className="text-yellow-600 text-md">EVEN</h1>
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
                  <button value={3} name="3"  onClick={numberClicked} className="text-yellow-600 text-md">3</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={4} name="4"  onClick={numberClicked} className="text-yellow-600 text-md">4</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={5} name="5"  onClick={numberClicked} className="text-yellow-600 text-md">5</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={6} name="6"  onClick={numberClicked} className="text-yellow-600 text-md">6</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
            </div>
            <div className="grid grid-flow-col mb-2">
              <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={7} name="7"  onClick={numberClicked} className="text-yellow-600 text-md">7</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={8} name="8"  onClick={numberClicked} className="text-yellow-600 text-md">8</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={9} name="9"  onClick={numberClicked} className="text-yellow-600 text-md">9</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={10} name="10"  onClick={numberClicked} className="text-yellow-600 text-md">10</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
            </div>
            <div className="grid grid-flow-col mb-2">
              <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={11} name="11"  onClick={numberClicked} className="text-yellow-600 text-md">11</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={12} name="12"  onClick={numberClicked} className="text-yellow-600 text-md">12</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={13} name="13"  onClick={numberClicked} className="text-yellow-600 text-md">13</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={14} name="14"  onClick={numberClicked} className="text-yellow-600 text-md">14</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
            </div>
            <div className="grid mb-2 grid-flow-col">
              <div className="inline-block ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={15} name="15"  onClick={numberClicked} className="text-yellow-600 text-md">15</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={16} name="16"  onClick={numberClicked} className="text-yellow-600 text-md">16</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={17} name="17"  onClick={numberClicked} className="text-yellow-600 text-md">17</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
              <div className="inline-block ml-1 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <div className="rounded-full p-1 pl-3 pr-3 border w-8 items-center ml-6">
                  <button value={18} name="18"  onClick={numberClicked} className="text-yellow-600 text-md">18</button>
                </div>
                <p className="text-white ml-7 mt-1 text-sm">1.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</>
    )    
}

export default MoneyTree
