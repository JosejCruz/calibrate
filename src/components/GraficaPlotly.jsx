import React from 'react'
import Plot from 'react-plotly.js';
import dato from '../data/47';

function GraficaPlotly() {

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