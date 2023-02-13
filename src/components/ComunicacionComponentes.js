import React, { Component } from "react";

export class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Curso React: 12. Comunicación entre Componentes</h2>
        <p>{this.state.contador}</p>
        <Hijo incrementarContador={this.incrementarContador}  mensaje="Mensaje para el hijo 1" />
        <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
