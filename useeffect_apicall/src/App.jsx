import {useState,useEffect} from 'react'

const App = () => {

  const [data,setData]=useState(null)  //useState hook and state fetched state

  useEffect(() => {
    // Fetch the data
    fetch('https://jsonplaceholder.typicode.com/posts/1') // Example API
      .then((response) => response.json()) // Correctly call json() on the response
      .then((json) => setData(json)) // Store the JSON data in the state
      .catch((error) => console.error("Error Fetching Data:", error)); // Handle any errors
  }, []);
  
   return (
    <div>
      <h1>Simple API Fetch Example</h1>
      {data ? ( // If data exists, show it
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p> // Show "Loading..." while waiting for data
      )}
    </div>
  );
}

export default App



//1.importing useEffect amd useState hooks form react 
//2.creating  state variable and use named updated funtion and calling useState hook 
//3.using useEffct hook in from react js it syntax is
//useEffect syntax  useEffect (()=>{})  in that curly brakets contans the main fecth code 
//4.read the code cleary 
//5.output will be 

/*Simple API Fetch Example
sunt aut facere repellat provident occaecati excepturi optio reprehenderit
quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto*/


//thank you  
