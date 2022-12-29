import React from 'react'
import Plot from 'react-plotly.js';
import Data from '../data/Data';

function GraficaPlotly(valores1) {
  console.log(Data)
  const dato = Data[0][11]
  const data = [
    {
      x: dato.DataX,
      y: dato.DataY,
      type: 'scatter',
      mode: 'lines',
      marker: {color: 'red'},
    },
  ]

  return (
    <Plot data={data}/>
  )
}

export default GraficaPlotly