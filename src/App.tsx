import './App.css';
import Header from "./components/Header"
import CardContainer from "./components/CardContainer"
import {useState} from "react"
import {clickHandler} from "./interface/interface"

function App() { 

  const [refreshCount, setRefresh] = useState(0)

  const clickHandle = () => {
    setRefresh((oldCount) => oldCount+1 );
  }

  const callback : clickHandler = {
    clickHandler:clickHandle
  }

  
  return (
    <div className="App">
      <Header clickHandle={callback} />
      <CardContainer count={refreshCount} />
    </div>
  );
}

export default App;
