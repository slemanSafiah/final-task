import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

function PieChart() {
  let labels = ["company 1", "company 2", "company 3", "company 4"];
  let data = [30, 20, 10, 60];

  return (
    <div className="pie-chart">
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: "Doighnut Chart",
              data: data,
              backgroundColor: ["#e33838", "#dd46b3", "#32a4a6", "#5ad747"],
              hoverOffset: 2
            }
          ]
        }}
        width="180px"
        height="180px"
        options={{
          plugins: {
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  );
}

export default PieChart;
