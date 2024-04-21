import React from 'react'

export const SegundoComponente = () => {
    
    const libros = ['Trading account','El poder del ahora','Habitos atomicos'];
  
    return (

    <div className='SegundoComponente'>
        <h1>Libros</h1>
    <ul>
      {
        libros.map((libro, indece) => {
            return <li key={indece}>{libro}</li>;
        }
      )}
    </ul>
    </div>
  ) 
}
