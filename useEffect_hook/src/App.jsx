import {useState,useEffect} from 'react'

const App = () => {
  const [num1, setNum1] = useState(100)
  const[num2,setNum2] =useState(1000)  // but this will re-render  because 
  //the num1 value only we given so the if we click num1 buuton it will use effect hook but component will but the compont will re-render

  useEffect(()=>{  //useEffect hook
    setNum1(200)
    console.log("from hook" )},[num1])
   
 console.log("num1",num1)//not importante


  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={()=>setNum1((curr) =>curr +1)}> Add</button> 


      <h1>{num2}</h1>
      <button onClick={()=>setNum2((curr)=> curr+10)}>Add</button> 
    </div>
  )
}

export default App