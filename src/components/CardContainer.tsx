import React , { useState, useEffect } from "react";
import { dog } from "../interface/interface"
import Card from "./Card"

const CardContainer = (props: { count : number }) => {
    return (
        <div className="CardContainer">
            { [...Array(10)].map((i, index)=> (<Card key={index} count={props.count} />))}
        </div>
    );
}


export default CardContainer
