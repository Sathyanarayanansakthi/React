//calling useState hook from react 
import { useState } from 'react'

function App() {
  const[cal,setC]=useState(0); // declaring state variable   cal- is current value of the state and setc-the function used to update the state.
 console.log(cal) // here i gave console.log for understanding  this is not need 


  return (
    <div>
      <h5>useState hook {cal}</h5>
      <button onClick={()=> setC (cal+1)}>Increment</button>
      <button onClick={()=> setC (cal-1)}>Decrement</button>
    </div>
  )
}

export default App

//steps
//1.importing useState from react 
//2.hook takes a single optional arugument an initial value for the state.
//3 state variable and afunction to update the state

