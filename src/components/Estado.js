import React, { Component } from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 3000);
  }
  render() {
    return (
      <>
        <h2>Curso React: 6. Estado</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador}/>
      </>
    );
  }
}
