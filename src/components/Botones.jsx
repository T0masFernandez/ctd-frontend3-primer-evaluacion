import data from "./data";
import React, { Component } from "react";

class Botones extends Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
            <div className= "opciones">
                <button id="a" onClick={this.props.onClick} className="botones"> A </button> <h2 className="opcion"> {this.props.opciones.a} </h2>
                <button id="b" onClick={this.props.onClick} className="botones"> B </button> <h2 className="opcion"> {this.props.opciones.b} </h2>
            </div>
        )
    }
}
export default Botones;