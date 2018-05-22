import React, { Component } from 'react';
import tests from '../data/tests.json';

//Componentes
import Enunciado from './Enunciado';
import Respuesta from './Respuesta';
import Boton from './Boton';
import TemaSelect from './TemaSelect';

import '../index.css';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tests,
      indice:0,
      respuestaSeleccionada:0,
      esCorrecta:"default",
      temaSeleccionado:1
    };

    this.temaSeleccion = this.temaSeleccion.bind(this);
    this.encontrarTema = this.encontrarTema.bind(this);
    this.irAlTema = this.irAlTema.bind(this);
    this.siguiente = this.siguiente.bind(this);
    this.anterior = this.anterior.bind(this);
    this.comprobar = this.comprobar.bind(this);
  }

  /****************************************************************************/
  /****************** Actualiza la vista al tema seleccionado *****************/
  /****************************************************************************/

  temaSeleccion(event){
    this.setState({
      temaSeleccionado: Number(event.target.value)
    })
    this.encontrarTema(event);
  }

  encontrarTema(event){
    for(let i = 0; i < this.state.tests.length; i++){
      console.log(i)
      if(this.state.tests[i].tema === Number(event.target.value))
      {
        console.log(i);
        this.irAlTema(i)
        return 0;
      }
    }
  }

  irAlTema(i){
    this.setState({
      indice:i,
      esCorrecta: "default"
    })
  }

  /****************************************************************************/
  /************* Actualiza la vista a la pregunta anterior/siguiente **********/
  /****************************************************************************/
    
  siguiente(){

    const indice = this.state.indice + 1;
    this.setState({
      indice,
      esCorrecta: "default"
    });

    if(indice === this.state.tests.length)
    {
      this.setState({
        indice: 0,
      });    
    }
  }

  anterior(){
    const indice = this.state.indice - 1;
    this.setState({
      indice,
      esCorrecta: "default"
    });

    if(indice === -1)
    {
      this.setState({
        indice: this.state.tests.length - 1,
      });    
    }
  }
  
  /****************************************************************************/
  /*** Asigna el estado de la respuesta elegida(si es correcta o incorrecta) **/
  /****************************************************************************/
  
  comprobar(esCorrecta, respuestaSeleccionada){
    
    this.setState({
      esCorrecta,
      respuestaSeleccionada
    })
    
  }
  
  /****************************************************************************/
  /*****************************   RENDER  ************************************/
  /****************************************************************************/
  
  render() {    
    return (
      <div className="App container">
        <TemaSelect onChange={this.temaSeleccion} value={this.state.temaSeleccionado}/>
        <Enunciado tema={this.state.tests[this.state.indice].tema}
                   numeroPregunta={this.state.indice + 1}
                   numeroTotal = {this.state.tests.length}
                   enunciado={this.state.tests[this.state.indice].enunciado} />
        <div className="Boton">
          <Boton onClick={this.anterior} tipoBoton="btn btn-info Boton_anterior" textoBoton="Anterior"/>
          <Boton onClick={this.siguiente} tipoBoton="btn btn-info Boton_siguiente" textoBoton="Siguiente"/>
        </div>
        {this.state.tests[this.state.indice].respuestas.map((e, i) => 
            <Respuesta  respuesta={e} key={i} indice={i}
                        correcta={this.state.tests[this.state.indice].correcta} 
                        onClick={ (esCorrecta, indice)  => this.comprobar(esCorrecta, indice)}
                        esCorrecta={this.state.esCorrecta}
                        respuestaSeleccionada={this.state.respuestaSeleccionada}
                        />
          )}

      </div>
    );
  }
}