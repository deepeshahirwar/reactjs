import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0) 

  let myObj = {
    username : "hitesh sir",
    age : 21
  } 

  let newArr = [1,2,3];

  return (
    <>
 <h1 className='bg-green-400 text-black 
 p-5 rounded-xl mb-4'> Tailwind test</h1> 
    
  

   <Card  username ="@deepesh"   btnText="click me" 
  userAbout="I'm Frontend engineer , competitive programmer " /> 
   <Card  username="hitesh" btnText="visit me"  
   userAbout="I'm Software engineer , Online and oflline web development educator , i have 10 years pluse experience of  teaching  
   and i also teach more than 5lack student " /> 
  </>
 

  )
}

export default App
