import { useRef } from "react"

const App = () => {

  const inputRef=useRef('')
  const display =()=>{ console.log(inputRef.current.value)}   // Access the value of the input field
  return (
    <div>
      <h3>input</h3>
      <input 
      ref={inputRef}
      placeholder="enter the value"
      ></input>
      <button onClick={display}>Submit</button>
    </div>
  )
}

export default App     //output see in console 


// this is one of the hook used in react js
//useRef means

//steps in useRef hooks

//importing useRef hooh from react js(line 1)


// Create a reference for the input field (line 5)

// Access the value of the input field  (line 6)

// accessing the inputput ref in ref= (line 11)  jsx


//use case of useRef hook 
 
//no rerender unlike useState hook
//direct dom Access 