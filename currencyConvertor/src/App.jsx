import { useState } from 'react'
import { InputBox } from './component' 
import useCurrencyInfo  from './hooks/useCurrencyInfo' 

import './App.css'

function App() {
  const [amount, setAmount] = useState(0) 
  const [from , setFrom] = useState("usd")
  const [to, setTo] = useState("inr") 
  const [convertAmount , setConvertAmount] = useState(0)
 
  

  return (
    <>
     <h1 className='text-3xl bg-orange-500' 
     >Currency app with chai </h1> 
    </>
  )
}

export default App
