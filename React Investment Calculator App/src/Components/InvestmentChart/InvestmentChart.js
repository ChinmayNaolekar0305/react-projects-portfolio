import React from "react";
import { Line } from "react-chartjs-2";
import "./InvestmentChart.css"; // Import the CSS file

const InvestmentChart = ({ data }) => {
  const chartData = {
    labels: data.map((item, index) => index + 1),
    datasets: [
      {
        label: "Total Savings over time",
        data: data.map((item) => item.savingsEndOfYear),
        fill: false,
        borderColor: "rgb(0,200,0)", // make line plot green
        tension: 0.1,
        radius: 5,
        backgroundColor: "rgb(0,200,0)" // make point background green
      }
    ]
  };

  return (
    <div className="chart">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            // existing code...
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Savings ($)",
                  fontColor: "#fff" // Set y-axis title color to white
                },
                ticks: {
                  fontColor: "#fff" // Set y-axis ticks (and axes) color to white
                }
              }
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Year",
                  fontColor: "#fff" // Set x-axis title color to white
                },
                ticks: {
                  fontColor: "#fff" // Set x-axis ticks (and axes) color to white
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default InvestmentChart;
