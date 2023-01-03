import React from "react";
import Plot from "react-plotly.js";
import Data from "../data/Data";

function GraficaPlotly(props) {
  //console.log(props.valor1);
  const valor1 = props.valor1;
  const arr = Data.map((elemento) => Object.entries(elemento));
  //console.log(arr);
  let datos = arr.filter((item) => item[0][0] === "" + valor1);
  datos = datos[0][0];
  //console.log(datos);

  //----//----//----//

  //console.log(props.valor2);
  const valor2 = props.valor2;
  const arr2 = Data.map((elemento) => Object.entries(elemento));
  //console.log(arr2);
  let datos2 = arr2.filter((item) => item[0][0] === "" + valor2);
  datos2 = datos2[0][0];
  //console.log(datos2);

  let data = [];
  const puntos = () => {
    if (props.visible1 === true && props.visible2 === false) {
      data = [
        {
          x: datos[1].DataX,
          y: datos[1].DataY,
          type: "scatter",
          mode: "lines",
          marker: { color: "red" },
        },
      ];
    } else {
      if (props.visible1 === false && props.visible2 === true) {
        data = [
          {
            x: datos2[1].DataX,
            y: datos2[1].DataY,
            type: "scatter",
            mode: "lines",
            marker: { color: "blue" },
          },
        ];
      } else {
        if (props.visible1 === true && props.visible2 === true) {
          data = [
            {
              x: datos[1].DataX,
              y: datos[1].DataY,
              type: "scatter",
              mode: "lines",
              marker: { color: "red" },
            },
            {
              x: datos2[1].DataX,
              y: datos2[1].DataY,
              type: "scatter",
              mode: "lines",
              marker: { color: "blue" },
            },
          ];
        }
      }
    }
  };
  puntos();
  //console.log(data);
  //console.log(props.visible1);

  let config = {
    showLink: false,
    displayModeBar: false,
    staticPlot: true,
    responsive: false
  };
  return <Plot data={data} config={config}/>;
}

export default GraficaPlotly;
