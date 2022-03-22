import React from "react"
import {add, minus} from "../redux/counter"
import {useSelector, useDispatch} from "react-redux"

const Counter = (props) => {

    //Use redux
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter)  
    const name = useSelector(state => state.details.name)

    //Handler
    const countHandler = (action) => {
        action === "add" ? dispatch(add()) : dispatch(minus())
    }

    return (
        <>
            <span>{name ? name: "Counter"}</span> :
            <button className="Counter--Button" onClick={()=>countHandler("add")}> + </button>    
            <span> {count} </span> 
            <button className="Counter--Button" onClick={()=>countHandler("minus")}> - </button>
        </>
    )
}

export default Counter;