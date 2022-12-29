import { Link } from "react-router-dom";
import "./listStyle.css";
export default function ListItemHome({dato,infoPath}){
    
return(
    
    <li className="btn">
        <Link to ={infoPath}>{dato}</Link></li>
)
}