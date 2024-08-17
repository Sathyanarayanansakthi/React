//calling useState hook from react 
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
 console.log(count)
  return (
    <div>
      <h1> useState </h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App