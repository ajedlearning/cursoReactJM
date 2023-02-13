import React, { Component } from "react";

 const Boton = ({myOnClick})=><button onClick={myOnClick}>Boton hecho componente</button>;

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };
  render() {
    return (
      <>
        <h2>Curso React: 11. Eventos Nativos, Sintéticos & Personalizados</h2>
        <button onClick={(e) => this.handleClick(e, "Hola pasando parametro")}>
          Saludar
        </button>
        {/* debemos hacer un evento Evento personalizado*/}
        {/* <Boton onClick={(e) => this.handleClick(e, "Hola pasando parametro")} /> */}


        {/* Evento personalizado , lo llamé myOnClick, se pasa como props a mi function */}
        <Boton myOnClick={(e) => this.handleClick(e, "Hola pasando parametro")} />
      </>
    );
  }
}
