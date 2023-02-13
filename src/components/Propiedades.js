import React from "react";
import { PropTypes } from "prop-types";

export default function Propiedades(props) {
  return (
    <>
      <h3>{props.porDefecto}</h3>
      <ul>
        <li>cadena: {props.cadena}</li>
        <li>numero: {props.numero}</li>
        <li>boolean: {props.boolean ? "true" : "false"}</li>
        <li>array: {props.arreglo.join(", ")}</li>
        <li>
          obj: {props.obj.nombre}, {props.obj.correo}
        </li>
        <li>{props.elementoReact}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props",
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired,
};
