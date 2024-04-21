import React from 'react'
import PropTypes from "prop-types"; 


export const TercerComponente = ({nombre,ficha,apellido}) => {
  return (
    <div className='TercerComponente'>
    <h1>Comunication between components</h1>

    <ul>
        <li> {nombre}</li>
        <li> {apellido}</li>
        <li> {ficha.estado} </li>
      </ul>


    </div>
  )
}

 TercerComponente.propTypes= {
    nombre : PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha:PropTypes.object

}

TercerComponente.defaultProps = {
    nombre: "Junior",
    apellido:"Diaz"
}