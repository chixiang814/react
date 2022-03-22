import {clickHandler} from "../interface/interface"

export default (props : {
    clickHandle:clickHandler
}) => (
    <header className="Header">
        <div>Dogs</div><button className="Header--Refresh" onClick={props.clickHandle.clickHandler}>Refresh</button> 
    </header>
)












