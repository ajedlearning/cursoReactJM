import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("El componente ha sido eliminado del DOM");
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa , aun no esta en el dom");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o la props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };
  iniciar = () => {
    this.tictac();
    this.setState({
        visible: true,
    })
  };
  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
        visible: false,
    })
  };
  render() {
    console.log(
      4,
      "El componente se dibuja o se redibuja por agun cambio en el DOM"
    );
    return (
      <>
        <h2>Curso React: 13. Ciclo de Vida de los Componentes</h2>
        {/* <h3>{this.state.hora}</h3> */}
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
