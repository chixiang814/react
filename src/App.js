import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter"
import Details from './components/Details';


function App(props) {
  //const [count, setCount] = useState(0);
  
  // const setCountHandler = (action) => {
  //   setCount(oldCount => action === "add" ? ++oldCount : --oldCount) 
  // }
  

  console.log("render")

  return (
    <div className="App">
      <div>
        <Details />
        <Counter />
      </div>
    </div>
  );
}


export default App;

