import React from 'react'

export const SegundoComponente = () => {
    
    const libros = ['Trading account','El poder del ahora','Habitos atomicos'];
    //const libros = [];

    return (

    <div className='SegundoComponente'>
        <h1>Listado de Libros</h1>
   
      {libros.length >= 1 ? (
        <ul> 
          {
        
            libros.map((libros,indice)=> {
            return <li key={indice}>{libros}</li>;

      })
      
      } 
      </ul>) : 
      (<p>No hay libros disponibles</p>)
      
    
      }

    </div>
  ) 
}
