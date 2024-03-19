import { useState , useCallback , useEffect } from 'react'
import './App.css'


function App() {  
  // collecting needed varialbles 
  const [length , setLenght] = useState(8) 
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")
  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
     
    if(numberAllowed) str +="0123456789"
    if(charAllowed)  str +="!@#$%*^()~{}[]" 

    for(let  i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length +1) 
      pass += str.charAt(char); 

    }
    setPassword(pass);// update the password state
    console.log(pass); 

  }, [length ,numberAllowed, charAllowed, setPassword]) 
    
  useEffect(()=>{
   passwordGenerator();
  },[length, numberAllowed , charAllowed, passwordGenerator])


  return (
    <> 

     <div className='w-full max-w-md mx-auto shadow-md text-center
     rounded-lg  px-3 py-4 text-orange-500 bg-gray-700  
       text-2xl mt-16'>
      Password generator 
      {/* for  password input box */}
     <div className='flex shadow rounded-lg  
     overflow-hidden mt-5 mb-5 flex-row '> 
      <input type="text"  
      value={password} 
      className='outline-none w-full py-1 px-3' 
      placeholder='Password' 
     readOnly
      />  

      <button 
       className='outline-none bg-blue-700 text-white 
       px-3  shrink-0 text-center justify-center'
      >copy</button>
      </div> 

    <div className='flex text-sm gap-x-2'>   
    {/* for range bar  */}
    <div className='flex items-center gap-x-1'> 

    <input  
    type="range"  
    min={6} 
    max ={20} 
    value={length} 
    className='cursor-pointer' 
    onChange={(e) => {setLenght(e.target.value)}}
     />
   <label >Length: {length}</label>
    </div>  
 
 {/* for number checkbox */}
    <div className='flex items-center gap-x-1'>  
      <input  
      type="checkbox" 
      defaultChecked={numberAllowed}
      id='numberInput' 
      onChange={()=>{
        setNumberAllowed((prev) => !prev);
      }} 
      /> 
      <label >Numbers</label>
     </div> 
{/* for charactors checkbox */}
     <div className='flex items-center gap-x-1'>  
      <input  
      type="checkbox" 
      defaultChecked={charAllowed}
      id='charInput' 
      onChange={()=>{
        setCharAllowed((prev) => !prev);
      }} 
      /> 
      <label >Charactor</label>
     </div>

    </div>
      </div> 

    </>
  )
}

export default App
