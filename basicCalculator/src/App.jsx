import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="container">
      <h1>Basic Calculator</h1> 
      <input type="text" name="" id="inputbox" /> 
      <div className="buttons"> 
        <button>Add</button>
        <button>Subtract</button> 
        <button>Multiplay</button> 
        <button>Divide</button>
      </div>  

      </div>
    </>
  )
}

export default App
