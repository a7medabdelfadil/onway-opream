import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Filler);

const NewBookingChart = () => {
  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "Bookings",
        data: [1000, 1500, 10000, 2500, 10000, 500, 3000],
        backgroundColor: "#4F46E5", // Tailwind purple-600
        borderRadius: 5, // Rounded bar corners
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw.toLocaleString()} bookings`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number, index: number, ticks: any) {
            if (typeof tickValue === "number") {
              return `${(tickValue / 1000).toFixed(1)}k`;
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-bgPrimary rounded-lg">
      <div className="text-lg font-bold">New Booking</div>
      <div className="text-sm text-success">+3.4%</div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default NewBookingChart;
