import './VentanaLogin.css';
import React from 'react';

let mensaje = "Empezamos con React";
let array = [1,2,3,4,5]



function VentanaLogin() {
  return (
    <div className="ventana">
        <label className="etiqueta"> Nombre </label>
        <label className="etiqueta"> Clave </label>
        <p className="etiqueta"> {mensaje} </p>
        <button> Confirmar </button>
        { array.map( elemento => <p> {elemento} </p>) }
    </div>
  );
}

export default VentanaLogin;
