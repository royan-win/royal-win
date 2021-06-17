import React, { useEffect, useState } from 'react';
import fcbf2c from "./images/4color-bf/2C.svg"
import fcbf3c from "./images/4color-bf/3C.svg"
import fcbf4c from "./images/4color-bf/4C.svg"
import fcbf5c from "./images/4color-bf/5C.svg"
import fcbf6c from "./images/4color-bf/6C.svg"
import fcbf7c from "./images/4color-bf/7C.svg"
import fcbf8c from "./images/4color-bf/8C.svg"
import fcbf9c from "./images/4color-bf/9C.svg"  
import fcbfTc from "./images/4color-bf/TC.svg"
import fcbfJc from "./images/4color-bf/JC.svg"
import fcbfQc from "./images/4color-bf/QC.svg"
import fcbfKc from "./images/4color-bf/KC.svg"
import fcbfAc from "./images/4color-bf/AC.svg"

import fcbf2d from "./images/4color-bf/2D.svg"
import fcbf3d from "./images/4color-bf/3D.svg"
import fcbf4d from "./images/4color-bf/4D.svg"
import fcbf5d from "./images/4color-bf/5D.svg"
import fcbf6d from "./images/4color-bf/6D.svg"
import fcbf7d from "./images/4color-bf/7D.svg"
import fcbf8d from "./images/4color-bf/8D.svg"
import fcbf9d from "./images/4color-bf/9D.svg"
import fcbfTd from "./images/4color-bf/TD.svg"
import fcbfJd from "./images/4color-bf/JD.svg"
import fcbfQd from "./images/4color-bf/QD.svg"
import fcbfKd from "./images/4color-bf/KD.svg"
import fcbfAd from "./images/4color-bf/AD.svg"

import fcbf2h from "./images/4color-bf/2H.svg"
import fcbf3h from "./images/4color-bf/3H.svg"
import fcbf4h from "./images/4color-bf/4H.svg"
import fcbf5h from "./images/4color-bf/5H.svg"
import fcbf6h from "./images/4color-bf/6H.svg"
import fcbf7h from "./images/4color-bf/7H.svg"
import fcbf8h from "./images/4color-bf/8H.svg"
import fcbf9h from "./images/4color-bf/9H.svg"
import fcbfTh from "./images/4color-bf/TH.svg"
import fcbfJh from "./images/4color-bf/JH.svg"
import fcbfQh from "./images/4color-bf/QH.svg"
import fcbfKh from "./images/4color-bf/KH.svg"
import fcbfAh from "./images/4color-bf/AH.svg"

import fcbf2s from "./images/4color-bf/2S.svg"
import fcbf3s from "./images/4color-bf/3S.svg"
import fcbf4s from "./images/4color-bf/4S.svg"
import fcbf5s from "./images/4color-bf/5S.svg"
import fcbf6s from "./images/4color-bf/6S.svg"
import fcbf7s from "./images/4color-bf/7S.svg"
import fcbf8s from "./images/4color-bf/8S.svg"
import fcbf9s from "./images/4color-bf/9S.svg"
import fcbfTs from "./images/4color-bf/TS.svg"
import fcbfJs from "./images/4color-bf/JS.svg"
import fcbfQs from "./images/4color-bf/QS.svg"
import fcbfKs from "./images/4color-bf/KS.svg"
import fcbfAs from "./images/4color-bf/AS.svg";
import b from "./images/back.svg";
import { IoMdArrowBack } from "react-icons/io"

import {FaMoon, FaSun } from "react-icons/fa"
import { useHistory } from 'react-router-dom';
import {deposit} from "../redux/actions/auth" ; 
import {totalcoinsdata} from "../redux/actions/auth"
import { useDispatch} from 'react-redux';
function AndarBahar() {
  const dispatch = useDispatch(); 
var num =30 ;
  const [time , setime] = useState(num) ;
  const [card, setCard] = useState('');
  const [mooncard1, setMoonCard1] = useState('');
  const [suncard1, setSunCard1] = useState('');
  const [mooncard2, setMoonCard2] = useState('');
  const [suncard2, setSunCard2] = useState('');
  const [mooncard3, setMoonCard3] = useState('');
  const [suncard3, setSunCard3] = useState('');
  const [mooncard4, setMoonCard4] = useState('');
  const [suncard4, setSunCard4] = useState('');
  const [mooncard5, setMoonCard5] = useState('');
  const [suncard5, setSunCard5] = useState('');
const [result , setresult] = useState('') ; 
const [answer , setanswer] = useState(''); 
const user = JSON.parse(localStorage.getItem("profile"));
var userid = user?.result?._id; 
var [coins, setcoins] = useState(""); 
var[totalcoins ,setotalcoins] = useState(user?.result?.coins) ; 
  var timeref;
  let[numberofdraw , setnumberofdraw]  =useState(0) ;  
    const cards = {
        '2c': fcbf2c,
        '3c': fcbf3c,
        '4c': fcbf4c,
        '5c': fcbf5c,
        '6c': fcbf6c,
        '7c': fcbf7c,
        '8c': fcbf8c,
        '9c': fcbf9c,
        'Tc': fcbfTc,
        'Jc': fcbfJc,
        'Qc': fcbfQc,
        'Kc': fcbfKc,
        'Ac': fcbfAc,
      
        '2d': fcbf2d,
        '3d': fcbf3d,
        '4d': fcbf4d,
        '5d': fcbf5d,
        '6d': fcbf6d,
        '7d': fcbf7d,
        '8d': fcbf8d,
        '9d': fcbf9d,
        'Td': fcbfTd,
        'Jd': fcbfJd,
        'Qd': fcbfQd,
        'Kd': fcbfKd,
        'Ad': fcbfAd,
      
        '2h': fcbf2h,
        '3h': fcbf3h,
        '4h': fcbf4h,
        '5h': fcbf5h,
        '6h': fcbf6h,
        '7h': fcbf7h,
        '8h': fcbf8h,
        '9h': fcbf9h,
        'Th': fcbfTh,
        'Jh': fcbfJh,
        'Qh': fcbfQh,
        'Kh': fcbfKh,
        'Ah': fcbfAh,
      
        '2s': fcbf2s,
        '3s': fcbf3s,
        '4s': fcbf4s,
        '5s': fcbf5s,
        '6s': fcbf6s,
        '7s': fcbf7s,
        '8s': fcbf8s,
        '9s': fcbf9s,
        'Ts': fcbfTs,
        'Js': fcbfJs,
        'Qs': fcbfQs,
        'Ks': fcbfKs,
        'As': fcbfAs,
      }
      const randomcard1 = [
        cards['2c'],
        cards['7s'],
        cards['Jd'],
        cards['Kh'],
        cards['Ac'],
        cards['5s'],
        cards['6c'],
        cards['Qh'],
        cards['Ad'],
        cards['9c'],
      ];
      const suncards1 = [
        cards['2c'],
        cards['7s'],
        cards['Jd'],
        cards['Kh'],
        cards['Ac'],
      ];
      const mooncards1 = [
        cards['5s'],
        cards['6c'],
        cards['Qh'],
        cards['Ad'],
        cards['9c'],
      ];
      const suncards2 = [
        cards['2s'],
        cards['7c'],
        cards['Jh'],
        cards['Kd'],
        cards['As'],
      ];
      const mooncards2 = [
        cards['5c'],
        cards['6s'],
        cards['Qd'],
        cards['Ah'],
        cards['9s'],
      ];
      const suncards3 = [
        cards['3c'],
        cards['4s'],
        cards['Td'],
        cards['6h'],
        cards['Ah'],
      ];
      const mooncards3 = [
        cards['2d'],
        cards['Jc'],
        cards['6h'],
        cards['As'],
        cards['9d'],
      ];
      const suncards4 = [
        cards['2c'],
        cards['7s'],
        cards['Jd'],
        cards['Kh'],
        cards['Ac'],
      ];
      const mooncards4 = [
        cards['5s'],
        cards['6c'],
        cards['Qh'],
        cards['Ad'],
        cards['9c'],
      ];
      const suncards5 = [
        cards['2c'],
        cards['7s'],
        cards['Jd'],
        cards['Kh'],
        cards['Ac'],
      ];
      const mooncards5 = [
        cards['5s'],
        cards['6c'],
        cards['Qh'],
        cards['Ad'],
        cards['9c'],
      ];
      function myFunction() {
        timeref = setInterval(function(){ 
            num = num-1; 
            setime(num) 
            if(num<1){
                 num=30;
                numberofdraw = numberofdraw+1
                setnumberofdraw(numberofdraw)
                clearInterval(timeref)
                myFunction(); 
                
            }
        },
             1000);
      }
    
    useEffect(() => {
      myFunction()

    }, [numberofdraw]);
    const history = useHistory();

    useEffect(() => {
      setCard(randomcard1[Math.floor(Math.random() * randomcard1.length)]);
      setSunCard1(suncards1[Math.floor(Math.random() * suncards1.length)]);
          setMoonCard1(mooncards1[Math.floor(Math.random() * mooncards1.length)]);
          setSunCard2(suncards2[Math.floor(Math.random() * suncards2.length)]);
          setMoonCard2(mooncards2[Math.floor(Math.random() * mooncards2.length)]);
          setSunCard3(suncards3[Math.floor(Math.random() * suncards3.length)]);
          setMoonCard3(mooncards3[Math.floor(Math.random() * mooncards3.length)]);
          setSunCard4(suncards4[Math.floor(Math.random() * suncards4.length)]);
          setMoonCard4(mooncards4[Math.floor(Math.random() * mooncards4.length)]);
          setSunCard5(suncards5[Math.floor(Math.random() * suncards5.length)]);
          setMoonCard5(mooncards5[Math.floor(Math.random() * mooncards5.length)]);
    },[numberofdraw ]);
    
    // useEffect((e) => {
    //     arr2 = arr1.filter((arr1) => e.target.value != arr1);
    // }, [])
    const valueClicked = (e)=>{
        e.preventDefault()  ; 
        console.log(e.currentTarget.value); 
        console.log(result) ; 
        if(e.currentTarget.value==result){
            setanswer(true);  
        }
        else{
            setanswer(false); 
        }
     }
     useEffect(() => {
    if(card!=undefined){
        console.log(suncard1); 
        console.log(card) ;
        console.log(suncard1||suncard2||suncard3||suncard4||suncard5.includes(card));
        const array1 = [...suncard1 , ...suncard2 , ...suncard3  ,...suncards4 , ...suncards5];
        const array2 = [...mooncard1 ,...mooncard2 ,...mooncard3 ,...mooncard4 ,...mooncard5 ,] 
       if(array1.includes(card)){
           setresult("sun"); 
       }
        if(array2.includes(card)){
            setresult("moon"); 
        } 

    }

     }, [numberofdraw , card]); 


     const coinbuyed = (e) => {
        e.preventDefault();
        console.log("hello");
        console.log(card)
        console.log(coins);
   
        if (answer) {  
          var coinsnumberofcoin = coins * 1.9;
          console.log(totalcoins); 
          totalcoins=coinsnumberofcoin+totalcoins
          console.log(totalcoins); 
          setotalcoins(totalcoins); 
          console.log(coinsnumberofcoin);
         dispatch(totalcoinsdata({totalcoins,userid})) ; 
         dispatch(deposit({deposit:coinsnumberofcoin , id:userid , name:user?.result?.Real_name}))
          alert(coinsnumberofcoin);
        }
      }
    return (
        <div>
            <div className="absolute bg-gray-900 h-screen">
                <div className="flex h-16 w-screen bg-gray-700">
                    <div onClick={() => history.push('/home')} className="pl-2 cursor-pointer mt-2 ml-4 pr-2 pt-2 pb-0 border-yellow-600 border-2 h-11 m-3 bg-gray-600 rounded-full">
                        <IoMdArrowBack className="h-6 text-yellow-400 w-6"/>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="flex pl-2 mt-2 ml-4 pr-2 pt-1 pb-0 border-yellow-600 border-2 h-11 m-3 bg-gray-600 rounded-full">
                                <div className="flex text-xl pl-2 pr-2 text-white font-semibold">
                                    <h2>00:00:{time}</h2>
                                </div>
                            </div>
                            <div className="pl-2 justify-between flex mt-2 ml-4 pr-2 pb-0 border-yellow-600 border-2 h-11 m-3 bg-gray-600 rounded-full">
                                <div className="flex pt-1">
                                    <img className="h-7" src="http://pngimg.com/uploads/coin/small/coin_PNG36907.png" alt=""/>
                                    <h1 className="text-white p-1">13.90</h1>
                                </div>
                                <h1 className="text-white text-3xl pl-8">+</h1>
                            </div>
                        </div>
                            
                        </div>
                </div>
                <div className="bg-back-img pb-12">
                    <div className="flex justify-between">
                        <img className="h-32 ml-44 pt-8 pb-10" src={card} alt="2C"/>
                        <img className="h-32 mr-10 pt-8 pb-10" src={b} alt=""/>
                    </div>
                    <div className="flex">
                        <div className="inline-block pl-3 pr-3">
                            <FaSun className="text-yellow-500 mb-16 mt-6"/>
                            <FaMoon className="text-yellow-500"/>
                        </div> 
                        <div className="inline-block w-full pr-10">
                            <div className="bg-gray-900 rounded-lg pt-2 pl-5 pb-2 ">
                                <div className="flex">
                                    <img className="h-12" src={suncard1} alt=""/>
                                    <img className="h-12 -ml-5" src={suncard2} alt=""/>
                                    <img className="h-12 -ml-5" src={suncard3} alt=""/>
                                    <img className="h-12 -ml-5" src={suncard4} alt=""/>
                                    <img className="h-12 -ml-5" src={suncard5} alt=""/>
                                </div>
                            </div>
                            <div className="w-50 h-1 bg-gray-800"/>
                            <div className="bg-gray-900 rounded-lg pt-2 pl-5 pb-2 ">
                            <div className="flex">
                                    <img className="h-12" src={mooncard1} alt=""/>
                                    <img className="h-12 -ml-5" src={mooncard2} alt=""/>
                                    <img className="h-12 -ml-5" src={mooncard3} alt=""/>
                                    <img className="h-12 -ml-5" src={mooncard4} alt=""/>
                                    <img className="h-12 -ml-5" src={mooncard5} alt=""/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                <div className="">
        <h1 className="text-lg bg-gray-700 pl-5 p-1 mb-1 font-medium text-white">Number</h1>
        <div className="grid grid-flow-row">
          <div className="grid grid-flow-col mb-2">
            <button onClick={valueClicked} value="sun" className="flex justify-between ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <FaSun  className="text-yellow-500 mb-1 mt-1 ml-3"/>
              <p className="text-white mt-1 mr-3 text-sm">x1.9</p>
            </button>
            <button onClick={valueClicked} value="moon" className="flex justify-between ml-2 mr-1 p-2 bg-gray-800 rounded-lg items-center">
                <FaMoon  className="text-yellow-500 mb-1 mt-1 ml-3"/>
              <p className="text-white mt-1 mr-3 text-sm">x1.9</p>
            </button>
          </div>
        </div>
      </div>
                </div>
                <div>

                </div>
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
            </div>
        </div>
    )
}

export default AndarBahar