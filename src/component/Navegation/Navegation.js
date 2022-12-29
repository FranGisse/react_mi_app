import './Navegation.css';
import { Link } from 'react-router-dom';
import React,{useState, useEffect} from "react";

export default function Navegation() {
    const[toggleMenu, setToggleMenu]=useState(false)
    const[screenWidth, setScreenWidth]= useState(window.innerWidth)

    const toggleNav=()=>{
        setToggleMenu(!toggleMenu)
    }
    useEffect(()=>{
        const changeWidth=()=>{
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return() =>{
            window.removeEventListener('resize', changeWidth)
        }
    },[]
    )
    
    
    
    return(
       <header className="Cabecera">
            <h1 className="logo">Rick & Morty </h1>
            <nav className="nav ">
                {(toggleMenu||screenWidth>900 )&&(
            
                <ul className="lista">
                    <li className="item">
                        <Link to="/"> Home</Link>
                         </li>
                    <li className="item">
                        <Link to="/characters">Characters</Link>
                        </li>
                    <li className="item">
                        <Link to="/contact">Contact</Link>
                        </li>
                </ul>
                )}
                <button onClick={toggleNav} className= "bton_to" >MENU</button>
            </nav>
       </header>
    )
}
