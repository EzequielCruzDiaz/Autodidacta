import React from 'react'

export const EventoComponente = () => { 
  
  const click = (e, nombre) => {
    alert("Haz dado click" + nombre);
  }

  const doubleclick = (e, apellido) => {
    alert("Haz dado doble click" +  apellido);
  }


  return (
    <div className='EventoComponente'>
      <h1>Evento en react</h1>

      <p>
      {/* Evento onclick */}
      <button onClick={e => click(e,  "Ezequiel")}> onClick</button>
      </p>
    
      <p>
      {/* Evento doubleclick */}
      <button onDoubleClick={e => doubleclick(e, "Cruz Diaz")}> doubleclick</button>
      </p>
    
      <div id='Caja'> 
      {/* Evento mouseEnter/Leave */}
      </div>
  
    </div>
  )
}
