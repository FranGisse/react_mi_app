 import "./Home.css";
 import ListItemHome from "../ListItemHome/ListItemHome";
 

 export default function Home(){
   
 
return(


    <header className="contenedor">
       <h1 className="titul" >Proyect - Rick & Morty</h1>
        <nav className="navbar">
            <ul className="list">
                <ListItemHome dato="Caracters" infoPath="/characters"/>
                <ListItemHome dato="Contact" infoPath="/contact"/>
                
            </ul>
        </nav>
        
      
    </header>
)
}
