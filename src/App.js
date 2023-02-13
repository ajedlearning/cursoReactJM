import React from "react";
import logo from "./logo.svg";
import Componente from "./components/componente";
import Propiedades from "./components/Propiedades";
import "./App.css";
import { Estado } from "./components/Estado";
import { RenderizadoCondicional } from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import EventosES6 from "./components/EventosES6";
import { EventosES7 } from "./components/EventosES7";
import { MasSobreEventos } from "./components/MasSobreEventos";
import { Padre } from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";

function App() {
  let nombre = "Arnaldo Espinoza";
  let auth = false;
  const estaciones = ["primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> gracias {nombre}.
        </p>
        <p>{auth ? "El usuario esta logueado" : "No estas logueado"}</p>
        <ul>
          {estaciones.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <h2>Curso React. 4 Componentes</h2>
          <Componente msg="Hola soy un componente funcional" />
          {/* <Componente msg="Hola soy un componente de clase"/> */}
          <hr />
          <h2>Curso React: 5. Propiedades</h2>
          <Propiedades
            cadena="Esto es una cadena"
            numero={56}
            boolean={true}
            arreglo={[1, 3, 4]}
            obj={{ nombre: "arnaldo", correo: "aespinoza" }}
            elementoReact={<i>Esto es un elemento react</i>}
            funcion={(num) => num * num}
            componenteReact={
              <Componente msg="soy un componente pasado como props" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
        </section>
      </header>
    </div>
  );
}

export default App;
