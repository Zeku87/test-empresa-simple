import React from 'react';

export default class Boton extends React.Component{

    render(){
        return (
            <div className="Boton">
                <button className={this.props.tipoBoton} onClick={this.props.onClick}>{this.props.textoBoton}</button>
            </div>
        )
    }
}