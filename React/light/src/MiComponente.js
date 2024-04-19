import React from "react";


const MiComponente = () => {
  
  let nombre = "ezequiel";
  let web = "LuloDev.com";

  let usuario = {
    nombre: "Ezequiel",
    apellido: "Diaz",
    web:"Ezequiejr.com"
  }
  
  return ( 
   <div className="Mi-componente">
     <hr/>
     
     <h2>Componente Creado</h2>

     <h3>Datos del usuario:</h3>

      <ul>
        <li> Nombre:  <strong>{usuario.nombre}</strong> </li>
        <li> apellido: {usuario.apellido} </li>
        <li> Web: {usuario.web} </li>
      </ul>
     
     <p>Este es mi primero componente</p>

      <ul>
        <li>Python</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>


    </div>

  );
    
};

export default MiComponente;
