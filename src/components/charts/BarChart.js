import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

function BarChart() {
  let labels = [];
  for (let i = 1; i < 31; i++) labels.push(i);
  let data = [
    3,
    4,
    5,
    7,
    10,
    1,
    11,
    12,
    12,
    15,
    12,
    15,
    16,
    17,
    21,
    22,
    27,
    11,
    10,
    12,
    10,
    2,
    2,
    12,
    11,
    12,
    12,
    12,
    12,
    17,
    19
  ];

  return (
    <div className="bar-chart">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "total count/value",
              data: data,
              backgroundColor: ["#dadada"],
              borderWidth: 0.1,
              borderRadius: 10
            }
          ]
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                font: 5
              },
              display: false
            }
          },
          maintainAspectRatio: true,
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

export default BarChart;
