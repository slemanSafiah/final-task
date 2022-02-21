import { Line } from "react-chartjs-2";
import { ArrowUpward } from "@mui/icons-material";
import Chart from "chart.js/auto";

function LineChart() {
  let labels = [];
  for (let i = 1; i < 8; i++) labels.push(i);
  let data = [100, 130, 200, 400, 487, 600, 300];

  return (
    <div className="line-chart">
      <div className="line-chart-title ">
        Weekly Increase <ArrowUpward color="success" fontSize="small" />
      </div>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Line Chart",
              data: data,
              backgroundColor: ["#a6a6a6"],
              tension: 0.5,
              fill: true,
              borderCapStyle: "square"
            }
          ]
        }}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            }
          },
          legend: {
            labels: {
              fontSize: 10
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
