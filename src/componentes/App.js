import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {
  state = {
    resultado: '',
    datos: {}
  }

  cotizarSeguro = datos => {
    const {brand, year, plan} = datos;

    //Iniciar valor incluyendo valor base del seguro
    const base = 2000;
    let resultado = base;

    //Obtener la diferencia de año actual y año del vehiculo
    const diferencia = obtenerDiferenciaAnio(year);

    //Restar los años del auto al valor base
    resultado -= base * (diferencia * 3)/100;

    //Calcular según la marca seleccionada
    resultado += (base * calcularMarca(brand));
  
    //Obtener el plan seleccionado
    resultado += base * obtenerPlan(plan);

    this.setState({
      resultado: resultado,
      datos: {brand, year, plan}
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header
          titulo='Cotizador seguro de Automóvil'
        />
  
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />
          <Resumen 
            datos={this.state.datos}
            resultado={this.state.resultado}
          />
        </div>
      </div>
    );
  }
}

export default App;
