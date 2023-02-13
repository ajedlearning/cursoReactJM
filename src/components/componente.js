// import React, { Component } from "react"; //esto lo comentamos porque se usa con componetes de clase

import React from "react";

//Esto es un componente de clase
// class Componente extends Component {

//   render() {
//     return <h2>{this.props.msg}</h2>;
//   }
// }

//Esto es un componente funcional
// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

//tambien podemos hacerlo con una funcion expresada
const Componente = (props) => <h3>{props.msg}</h3>;

export default Componente;
