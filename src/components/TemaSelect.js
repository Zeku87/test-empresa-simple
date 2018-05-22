import React from 'react'

export default class TemaSelect extends React.Component{

    render(){
        const temaStr = "Tema ";
        const temaInt = [1,2,3,4,5,6,8,9,10,12]
        return (
            <div className="TemaSelect">
                <label className="TemaSelect_label"> Saltar a otro tema 
                    <select className="TemaSelect_select" value={this.props.value} onChange={this.props.onChange }>
                        {temaInt.map( e => 
                            <option key={e} value={e}>{temaStr + e}</option>
                        )}
                    </select>
                </label>
            </div>
        )
    }
}