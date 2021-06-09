import React , {useState , useEffect} from 'react'

const MoneyTree = () => {
    var num =5 ;
  const [time , setime] = useState(num) ;
  const [rollSum , setrollsum] = useState(); 
  const [dice1 , setdice1] = useState(); 
  const [dice2 , setdice2] = useState();
  const [dice3 , setdice3] = useState(); 
  const [buttonvisible ,setbuttonvisible ] = useState(true);
  let timeref;
  let[numberofdraw , setnumberofdraw]  =useState(0) ; 
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
useEffect(() => {
  
    myFunction()
    
},[num])

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

       
  
  const clicked = (e)=>{
e.preventDefault();  
let value=(e.target.value); 
  }


    return (
        <div>
        
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
