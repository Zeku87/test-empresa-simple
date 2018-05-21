import React from 'react';

export default class Enunaciado extends React.Component{

    render(){
        return(
        <div className="Enunciado default">
            <p className="Enunciado_tema">Tema {this.props.tema} | Pregunta {this.props.numeroPregunta} de {this.props.numeroTotal}</p>
            <p className="Enunciado_pregunta">{this.props.enunciado}</p>
        </div>
        )
    }
}