import React from "react"
import {useDispatch} from "react-redux"
import {setName} from "../redux/details"

const Details = (props) => {
    const dispatch = useDispatch();

    const setNameHandler = (event) => {
        dispatch(setName(event.target.value))
    }
    
    return (
        <>
            <input type="text" placeholder="Name.." onChange={setNameHandler} />
            <br/>
        </>
    )
}

export default Details;