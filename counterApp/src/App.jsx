import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
 
  let  [counter , setCounter] = useState(5);

  // let counter = 5; 
 
  const addValue = ()=>{ 
      if(counter > 20){ // counter value not exceed 20
        counter = 20;
      }else{
        // setCounter(counter++);
        // setCounter(counter++);
        // setCounter(counter++);  

         setCounter(counter+1);
        // setCounter(counter+1);
        // setCounter(counter+1);
      }
    
  } 

  const removeValue = ()=>{
    if(counter < 0){ // counter vlaue not less than 0
      counter = 0;
    }else{
      setCounter(counter--);
    } 

  }
 

  return (
    <> 

     <h1> chai or react </h1> 
     <h2>counter value : {counter} </h2>
     <button 
     onClick={addValue}>Add vlaue  {counter}</button>  
     <br />
     <button 
     onClick={removeValue}>Remove value  {counter}</button> 

     <p>footer : {counter}</p> 


    </> 
  )
}

export default App
