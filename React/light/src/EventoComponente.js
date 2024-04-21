import React from 'react'

export const EventoComponente = () => {
  return (
    <div className='EventoComponente'>
      <h1>Evento en react</h1>
      <button onClick={()=>{
        console.log('hola soy un evento de react')
      }} > Pulsa Aqui!</button>
    </div>
  )
}
