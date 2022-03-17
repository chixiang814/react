import React from "react"
import Box from "./Box"

const Container = (props) => {
   const {states, clickBox, restartGame, win, winBoxes} = props;
    const boxes = states.map((state, index)=> (
                                <Box key={index} state={state}
                                    clickHandler={()=>!win && clickBox(index)} 
                                    count={index} 
                                    isWinBox={winBoxes.includes(index)} />    
                                ))

    return (<div className="Container--Grid">           
                { boxes }   
                <button className="Container--Button" onClick={restartGame}>Start Game</button>
            </div>)
}

export default Container;