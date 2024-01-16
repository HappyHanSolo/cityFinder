import {useState} from 'react' 
import './App.css';

function App() {
  const [city, setCity] = useState("City")

  function copyResult(){
    let searchResult = document.getElementById("searchResult").innerHTML
    console.log(searchResult)
    navigator.clipboard.writeText(searchResult)
  }
  function search(){
    let userInput = document.getElementById("userInput").value
    console.log(userInput)
  }


  return (
    <div className="App">
      <div className="bg-black h-[100vh] p-2">
        <h1 className="text-white text-8xl my-4">City Finder</h1>
        <div>
          <input className="p-2 rounded-md" type="text" id="userInput"/>
          <button className="text-black bg-slate-200 m-2 p-2 rounded-md" onClick={()=>{search()}}> Find City</button>
        </div>
        <div>
          <p className="text-white text-4xl m-2 p-2" id="searchResult">
            {/* {city} */}
            Potato
          </p>
          <button className="text-black bg-slate-200 m-2 p-8 text-4xl rounded-md" onClick={()=>{copyResult()}}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
