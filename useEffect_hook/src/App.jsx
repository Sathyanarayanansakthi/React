import { useState,useEffect} from 'react'

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => { console.log('Count has changed!') }, [count])

  return (
    <div className="App">
      <p>Count is: {count}</p>

      <div>
        <button onClick={() => setCount(count+1)}>Add 1</button>
        <button onClick={() => setCount(count-1)}>Decrease 1</button>

        <button onClick={() => setCount(count+10)}>Add 10</button>
        <button onClick={() => setCount(count-10)}>Decrease 10</button>

        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
  )
}

export default App


//steps
//1.importing useEffect amd useState hooks form react 
//2.creating  state variable and use named updated funtion and calling useState hook 
//3.using useEffct hook in from react js it syntax is
//useEffect syntax  useEffect (()=>{})  in that curly brakets contans the main fecth code 
//4.read the code cleary 

//thank you  


/*useEffct running
 useEffect 2 arugments  1. function with code running 
                        2. an array that continas alist values from the components scope(like props ,context ,and a state variable knows as a dependency array)
*/