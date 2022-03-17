import React from "react"

const Box = (props) => { 
    return(
    <div className={`Box--Content Box--${props.count} ${props.isWinBox ? "Box--Win" : ""}`} onClick={props.clickHandler}> 
        {!props.state.set ? "" : props.state.isCross ? "X" : "O"}
    </div>
)}

export default Box;

