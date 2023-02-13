import React, { Component } from "react";

export default class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar() {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <>
      <h2>Curso React: 9. Eventos & Binding</h2>
        <h3>Eventos en componentes de Clase ES6</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </>
    );
  }
}
