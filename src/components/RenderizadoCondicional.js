import React, { Component } from "react";
function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}
function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: false,
    };
  }
  render() {
    return (
      <>
        <h2>Curso React: 7. Renderizado Condicional</h2>
        {this.state.session ? <Logout /> : <Login />}
      </>
    );
  }
}
