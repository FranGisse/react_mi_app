import Navegation from '../Navegation/Navegation'
import "./Contact.css";
import {useState,Fragment} from 'react';

export default function Contact(){

    let [nombre,setNombre]= useState('escribir..');

    const[numberError,setNumberError]=useState(0)
  const cambiarNombre=(e)=>{
    const value=e.target.value;
    console.log(value);
    const minValue=value.length>3;
    const maxValue=value.length<10;
    const onliLet=/^[a-za]*$/g.test(value);
    console.log("min",minValue);
    console.log("maxValue",maxValue);
    console.log("onliLet", onliLet);
    if (onliLet==false){
      setNumberError(1);
    }else if(!minValue){
      setNumberError(2);
    }else{
      setNumberError(3)
    }
    if(onliLet==true && minValue && maxValue){
      setNumberError(0)
    }



    setNombre(value);
};


  const guardarClick=()=>{
    console.log("este es mi estado local:",nombre);
  }

    return(
        <Fragment>
            <Navegation/>
            <div className='mi_formulario_header'>
            <h2 className='mi_formulario_title'>Contact</h2>
            <h3 className='mi_formulario_body'>Leave us your information so we can contact you</h3>
            <form className="mi_formulario_form" action=''>
            <label className= "mi_formulario_label">Nombre:</label>
          <div className="mi_formulario_inpunt-icon">
          <i class="fa-solid fa-users mi_formulario_icon" aria-hidden="true"/>
           <input 
           id="nombre"
           name= "nombre" 
           value={nombre} 
           onChange={cambiarNombre}
           className="mi_formulario_input"
           ></input>
           {
            (numberError==1) && (
              <label className='mi_formulario_error'>solo incluir letras</label>
            )
           }
           {
            (numberError==2) && (
              <label className='mi_formulario_error'> minimo 3 caracters</label>
            )
           }
           {
            (numberError==3) && (
              <label className='mi_formulario_error'>maximo es 10 caracters</label>
            )
           }
              </div>
            
                <div className="mi_formulario_form">
                    <label htmlFor="correo" className="mi_formulario_label">Email</label>
                    <input type="email" className="form-control" id="correo" />
                     <label htmlFor="mensaje" className="mi_formulario_label">Mensaje</label>
                    <textarea id="mensaje" className="form-control"></textarea>
                </div>
                
                <div >
                <button disabled={numberError>0} onClick={guardarClick} className="mi_formulario_button">GUARDAR</button>
    </div>
   
    <div className="mi_formulario_footer">
      <div className="mi_formulario_group">
        <span className="mi_formulario_label">
          GRACIAS POR SU VISITA!
        </span>
      </div>
        </div>       
            
          </form>
          </div>
        </Fragment>
        
    )
} 

//reutilizamos el componente Navegation que creamos anteriormente, aprovechando que en ambas pagias se utilizan ( Characters y en Contact)