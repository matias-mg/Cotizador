import React, { Component } from 'react';
import { primeraMayuscula } from '../helper';
import Resultado from './Resultado';

class Resumen extends Component {
    mostrarResumen = () => {
        const { brand, year, plan } = this.props.datos;

        if(!brand || !year || !plan){
            return null;
        }else{
          return(
            <div className="resumen">
                <h2>Resumen de cotización:</h2>
                <ul>
                    <li>Marca: {primeraMayuscula(brand)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año: {year}</li>
                </ul>
            </div>
        )  
        }        
    }

    render() {
        
        return (
            <div>
                { this.mostrarResumen() }
                <Resultado 
                    resultado={this.props.resultado}
                />
            </div>
        );
    }
}

export default Resumen;