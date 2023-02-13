import React, { Component } from "react";

export class EventosES7 extends Component {

   state = {
      contador: 0,
    };
  // Arrow Function
  sumar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar= () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <>
      <h2>Curso React: 10. Eventos & Property Initializers</h2>
        <h3>Eventos en componentes de Clase ES7</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </>
    );
  }
}
