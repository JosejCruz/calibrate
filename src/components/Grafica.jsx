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

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];
const labels = [100, 200, 300, 400, 500, 600, 700];

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
      {
        label: "Mis datos (2)",
        data: scores2,
        tension: 0.3,
        borderColor: "rgb(0, 0, 255)",
        pointRadius: 1,
        pointBackgroundColor: "rgb(0, 0, 255)",
        backgroundColor: "rgba(0, 0, 255, 0)",
      },
    ],
    labels,
  };

  return <Line data={data} options={options} />;
}