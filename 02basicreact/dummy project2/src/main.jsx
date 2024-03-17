import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import Deepesh from './deepesh.jsx'
import './index.css'
 

// make custom function 
function MyApp(){
  return (
    <div> 
      <h1>Custom App </h1>
    </div>
  )
} 

// const ReactElement = {
//   type:'a',
//   props:{
//       href : 'https://google.com',
//       target: '_black'
//   },
//   children: 'Click me to visit google'
// }   

const anotherElement = (
  <a href="https://google.com" target='_blank'>
    visit google
  </a>
)
 

// React.createElement 
const anotheUser = "hitesh sir";
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me to visit google  | ',
  anotheUser
)


ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    // anotherElement
    reactElement 
  // <App/>
)
