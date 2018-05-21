import React, { Component } from 'react';
import tests from '../data/tests.json';

//Componentes
import Enunciado from './Enunciado';
import Respuesta from './Respuesta';
import Boton from './Boton';

import '../index.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tests,
      indice:0,
      indiceSeleccionado:0,
      esCorrecta:"default"
    };

    this.siguiente = this.siguiente.bind(this);
    this.comprobar = this.comprobar.bind(this);
  }
  
  
  //Actualiza la vista a la siguiente pregunta
  siguiente(){

    const indice = this.state.indice + 1;
    this.setState({
      indice,
      esCorrecta: "default"
    });

    if(this.state.indice + 1 === this.state.tests.length)
    {
      this.setState({
        indice: 0,
      });    
    }
    
    
  }
  
  //Asigna el estado de la respuesta elegida(si es correcta o incorrecta)
  comprobar(esCorrecta, indiceSeleccionado){
    
    this.setState({
      esCorrecta,
      indiceSeleccionado
    })
    
  }
  
  render() {
    console.log(this.state.indice);
    
    return (
      <div className="App container">
        <Enunciado tema={this.state.tests[this.state.indice].tema}
                   numeroPregunta={this.state.indice + 1}
                   numeroTotal = {this.state.tests.length}
                   enunciado={this.state.tests[this.state.indice].enunciado} />
        <Boton onClick={this.siguiente} tipoBoton="btn btn-info Boton_siguiente" textoBoton="Siguiente"/>

        {this.state.tests[this.state.indice].respuestas.map((e, i) => 
            <Respuesta  respuesta={e} key={i} indice={i}
                        correcta={this.state.tests[this.state.indice].correcta} 
                        onClick={ (esCorrecta, indice)  => this.comprobar(esCorrecta, indice)}
                        esCorrecta={this.state.esCorrecta}
                        indiceSeleccionado={this.state.indiceSeleccionado}
                        />
          )}

      </div>
    );
  }
}