import Styles from "./Card.css";
import { useState } from "react";
export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true)
    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
        setOcultar(false)
    }
    const ocularInfo=()=>{
        setOcultar(true)
    }


    return(
        <div className="cont card">
            
            <div className="Card">
            <img className="Img" src={info.image} alt={info.name}/>
            <h2 className="titulo" >{info.name}</h2>
            <button  onClick={mostrar} className= { ocultar === true?"button":"d-none"} >Now More..</button>
            </div>
            {ocultar ==false?
                <div>
                    <button className="bg-warning" onClick= {ocularInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item">Character Status {info.status}</li>
                        <li className="list-group-item">Species {info.species}</li>
                        <li className="list-group-item">Origin {info.origin.name}</li>
                        <li className="list-group-item">Gender {info.gender}</li>
                    </ul>
                </div>:''
            }
            
        </div>
        )
}