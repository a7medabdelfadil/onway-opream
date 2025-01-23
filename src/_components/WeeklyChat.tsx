import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

const WeeklyChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Income",
        data: [70000, 80000, 75000, 78000, 11642, 100000, 120000],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#4F46E5",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `Income: $${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number): string {
            return `$${(Number(tickValue) / 1000).toFixed(1)}k`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-bgPrimary rounded-lg">
      <div className="text-lg font-bold">$11,642</div>
      <div className="text-sm text-success">+3.4%</div>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeeklyChart;
