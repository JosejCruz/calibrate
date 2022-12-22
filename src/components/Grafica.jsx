import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [(0, 0.19), (22, 0.20), (44, 0.21), (65, 0.21), (87, 0.22), (109, 0.23),
  ( 131, 0.24) , ( 152, 0.26) , ( 174, 0.28) , ( 196, 0.32) , ( 218, 0.35) , ( 239, 0.38) , 
  ( 261, 0.41) , ( 283, 0.44) , ( 305, 0.47) , ( 326, 0.52) , ( 348, 0.56) , ( 370, 0.59) , 
  ( 392, 0.63) , ( 414, 0.67) , ( 435, 0.72) , ( 457, 0.77) , ( 479, 0.82) , ( 501, 0.86) , 
  ( 522, 0.91) , ( 544, 0.96) , ( 566, 1.01) , ( 588, 1.07) , ( 609, 1.12) , ( 631, 1.18) , 
  ( 653, 1.23) , ( 675, 1.28) , ( 697, 1.34) , ( 718, 1.40) , ( 740, 1.47) , ( 762, 1.53) , 
  ( 784, 1.60) , ( 805, 1.67) , ( 827, 1.76) , ( 849, 1.84) , ( 871, 1.92) , ( 892, 1.99) , 
  ( 914, 2.08) , ( 936, 2.20) , ( 958, 2.34) , ( 979, 2.51) , (1001, 2.72) , (1023, 3.00)];
//const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2, 1, 5];
const labels = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function Grafica() {
  const data = {
    datasets: [
      {
        label: "Mis datos",
        data: scores,
        tension: 0.3,
        borderColor: "rgb(255, 0, 0)",
        pointRadius: 1,
        pointBackgroundColor: "rgb(255, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
      },
      // {
      //   label: "Mis datos (2)",
      //   data: scores2,
      //   tension: 0.3,
      //   borderColor: "rgb(0, 0, 255)",
      //   pointRadius: 1,
      //   pointBackgroundColor: "rgb(0, 0, 255)",
      //   backgroundColor: "rgba(0, 0, 255, 0)",
      // },
    ],
    labels,
  };

  return <Line data={data} options={options} />;
}