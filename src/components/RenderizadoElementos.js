import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} rel="noopener" target="_blank">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }
  render() {
    console.log(data);
    return (
      <>
        <h2>Curso React: 8. Renderizado de Elementos</h2>
        <h3>Esdtaciones del año</h3>
        <ol>
          {this.state.season.map((el, id) => (
            <li key={id}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks FRontEnd JS</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </>
    );
  }
}
