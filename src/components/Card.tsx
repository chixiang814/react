import { diffieHellman } from "crypto";
import React, {useState, useEffect} from "react";
import {dog} from "../interface/interface"

export default (props:{count:number}) => { 
        
        const initValue :dog = {
                name:"",
                image:''
            }
            const [data, setData] = useState(initValue)
            
            useEffect(()=>{
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(res => res.text())
                    .then(data => setData(() => {
                        const parseData = JSON.parse(data)
                        const res : dog ={
                            name: "dog",
                            image: parseData.message 
                        }
                        return res;
                    }))
            }, [props.count])
            
            console.log(data.image)

        return(<div className="Card"><img src={data.image} className="Card--Img" />  </div>)
}







