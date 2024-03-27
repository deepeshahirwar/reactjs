import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";
 

function Login(){  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const{setUser} = useContext(UserContext);

    const handleSubmit= (e)=>{
       e.preventDefault();
       setUser({username, password})
    }
    return(
        <div className=" "> 
            <h2  
            className="" 
            >Login</h2> 

            <input type="text"   
            className=" bg-slate-700  text-cyan-50"
            value={username} 
           
            onChange={(e)=> setUsername(e.target.value)}
             placeholder="username"/> 
            <input type="text"   
             className=" bg-slate-700 ml-4 text-cyan-50"
            alue={password}
            onChange={(e)=> setPassword(e.target.value)}
             placeholder="password"/>  
            <button onClick={handleSubmit}  
            className=" bg-green-600 ml-4 border-black text-cyan-50"
            >Submit</button>

        </div>
    )
}  

export default Login;
