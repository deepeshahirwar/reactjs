import React, { useState, useEffect } from "react"; 
import { useLoaderData } from "react-router-dom";
 
function GitHub(){   
    const data = useLoaderData();
//     const [data , setData] = useState([])
//   useEffect(()=>{
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response => response.json())
//     .then( data => {
//         console.log(data); 
//         setData(data);
//     })
//   }, [])

    return(
        <div  
       
        className="text-centerm-4 bg-gray-600
         text-white p-4 text-3xl">
        
        <p>Github follower: {data.followers}</p>
         
        <img src={data.avatar_url} alt="Git picture" 
        width={300} 
        />

        </div>
    )
} 
export default GitHub 

export const githubInfoLoder = async ()=>{
    const response = await 
    fetch('https://api.github.com/users/deepeshahirwar')
    return response.json();
}