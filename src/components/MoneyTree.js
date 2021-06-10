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
  const [rollSum , setrollsum] = useState(); 
  const [dice1 , setdice1] = useState(3); 
  const [dice2 , setdice2] = useState(1);
  const [dice3 , setdice3] = useState(9); 
 
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
        if(num===0){
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
// useEffect(() => {
  
   
    
// },[num])
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

    return (
        <div>
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
        
       
        
<div className="dicegame">
    <div className="timer">
        <h1>Time left :- </h1>
        <h2>{time}</h2>
        </div>
        <div className="dices">
        <button>{dice1}</button>{"+"}
        <button>{dice2}</button>{"+"}
        <button>{dice3}</button>{"="}
        <h3 className="sum">{rollSum}</h3>
        </div>
      
        <div className="sum_number">
        <h1>Number History</h1>
<h1>2021{numberofdraw}</h1>
        </div>
       
  

    </div>
</div>
    )
}

export default MoneyTree
