import Historial from "./components/Historial"
import Botones from "./components/Botones"
import Historia from "./components/Historia"
import json from "./components/data.json"
import React from "react";


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jsonArray: [],
      historiaActual: {},
      historial: [],
      idInicial: 1
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        jsonArray: json,
        historiaActual: json[0]

      })
    }, 2000)

  }

  handlerClick = (event) => {
    let id = this.state.idInicial + 1;
    id = id + event.target.id;
    let historiaSiguiente = this.state.jsonArray.find((i) => id === i.id)
    console.log(id);
    if (historiaSiguiente != null) {

      this.setState({
        historiaActual: historiaSiguiente,
        idInicial: this.state.idInicial + 1,
        historial: [...this.state.historial, event.target.id.toUpperCase()],


      })
    }else alert("Fin de la historia")
  }

  render() {
    return (
      this.state.jsonArray.length > 0 ?

        <div className="App">
          <div className="layout">

            <Historia historia={this.state.historiaActual.historia} />
            <Botones onClick={this.handlerClick} opciones={this.state.historiaActual.opciones} />
            <Historial historial={this.state.historial} />

          </div>
        </div>
        :
        <p className="historia">Cargando...</p>
    );
  }
}

