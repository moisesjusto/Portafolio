import React, { Component } from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


// components


import Navegasiones from "./components/Navegaciones";
import CV from "./components/CV";
import Redes from "./components/Redes";
import Especialidades from "./components/Especialista";
import Trabajos from "./components/Trabajos";


export default class App extends Component {

  state = {
    estado: false,
    caun: 0
  }


  BB = () => {
    this.setState({
      estado: true
    })
    if (this.state.caun === 0) {
      this.setState({
        caun: 1
      })
      alert('El Boton Esta Gris')
    } else { }
  }
  BT = () => {
    this.setState({
      estado: false
    })
  }
  render() {
    const estey = this.state.estado;
    return (
      <div>
        <Router>
          {
            estey === false ? (

              <div className="">
                <Navegasiones />
                <div className="row">
                  <div className="col-sm-5"></div>
                  <button
                    className='btn btn-primary btn col-sm-1'
                    onClick={this.BB}
                  >

                  </button>
                  <div className="col-sm-5"></div>
                </div>
              </div>

            ) : (
                <div className="row">
                  <div className="col-sm-5"></div>
                  <button
                    className='btn btn-light btn col-sm-1'
                    onClick={this.BT}
                  ></button>
                  <div className="col-sm-5"></div>
                </div>
              )
          }
          <div className="container">
            <Route path='/portafolio' exact={true} component={CV} />
            <Route path='/Redes' component={Redes} />
            <Route path="/Especialidades" component={Especialidades} />
            <Route path="/Trabajos" component={Trabajos} />

          </div>
        </Router>
      </div>
    )
  }
}

