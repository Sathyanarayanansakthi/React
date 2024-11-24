import {useState,useRef} from 'react'

const App = () => {
  const [input,setInput] =useState("")

  const inputRef =useRef();
  console.log("getting log");
   
  const display =() =>{
    console.log(inputRef.current.value)
  }
  return (
    <div>
      <h1>Input</h1>
      <input 
      type="text"
       //value={inputRef}
     // onChange={(event)=>setInput(event.target.value)}
       />
       <p>my nameis {inputRef.current?.value }</p>
       <button onClick={display}>show input</button>
      </div>
     
 
  )
}

export default App