import React from 'react'
import Plot from 'react-plotly.js';
import Data from '../data/Data';

function GraficaPlotly(props) {
  console.log(props.valor1);
  const valor1 = props.valor1;
  const arr = Data.map(elemento => Object.entries(elemento));
  console.log(arr);
  let datos = arr.filter(item => item[0][0]=== '' + valor1)
  datos = datos[0][0]
  console.log(datos);

  //----//----//----//

  console.log(props.valor2);
  const valor2 = props.valor2;
  const arr2 = Data.map(elemento => Object.entries(elemento));
  console.log(arr2);
  let datos2 = arr2.filter(item => item[0][0]=== '' + valor2)
  datos2 = datos2[0][0]
  console.log(datos2);

  const data = [
    {
      x: datos[1].DataX,
      y: datos[1].DataY,
      type: 'scatter',
      mode: 'lines',
      marker: {color: 'red'},
    },
    {
      x: datos2[1].DataX,
      y: datos2[1].DataY,
      type: 'scatter',
      mode: 'lines',
      marker: {color: 'blue'},
    },
  ]

  return (
    <Plot data={data}/>
  )
}

export default GraficaPlotly