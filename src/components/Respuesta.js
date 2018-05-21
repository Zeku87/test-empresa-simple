import React from 'react'

export default class Respuesta extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            claseCorrecta:"respuesta bg-success text-success",
            claseIncorrecta: "respuesta bg-danger text-danger",
            clasePorDefecto:"respuesta default"
        }

        this.establecerEstilo = this.establecerEstilo.bind(this);
    }
    
    establecerEstilo(){
        let clase = this.state.clasePorDefecto
        
        if(this.props.indice === this.props.indiceSeleccionado)
        {
            if(this.props.esCorrecta)
                clase = this.state.claseCorrecta 
            if(!this.props.esCorrecta)
                clase = this.state.claseIncorrecta
            if(this.props.esCorrecta === "default")
                clase = this.state.clasePorDefecto
        }

        return (
            <p className={ clase }
                onClick={() => this.props.onClick(this.props.indice === this.props.correcta, this.props.indice)}>
                {this.props.respuesta}
            </p>
        )
    }

    render(){
        return this.establecerEstilo();
    }
}