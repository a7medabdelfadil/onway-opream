import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useLanguageStore } from "~/APIs/store";
const translations = {
  en: {
    chartTitle: "New Booking",
    growth: "+3.4%",
    timeFilters: {
      daily: "D",
      weekly: "W",
      monthly: "M",
      yearly: "Y",
    },
  },
  ar: {
    chartTitle: "الحجز الجديد",
    growth: "+٣.٤٪",
    timeFilters: {
      daily: "يومي",
      weekly: "أسبوعي",
      monthly: "شهري",
      yearly: "سنوي",
    },
  },
  fr: {
    chartTitle: "Nouvelle Réservation",
    growth: "+3,4%",
    timeFilters: {
      daily: "J",
      weekly: "S",
      monthly: "M",
      yearly: "A",
    },
  },
  ru: {
    chartTitle: "Новая Бронирование",
    growth: "+3,4%",
    timeFilters: {
      daily: "Д",
      weekly: "Н",
      monthly: "М",
      yearly: "Г",
    },
  },
};


ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ChartComponent = () => {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const data = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        data: [1000, 2000, 11000, 4000, 12000, 2000, 6000],
        backgroundColor: "#0070FF",
        borderRadius: 0,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "#E5E7EB",
        },
        ticks: {
          stepSize: 5000,
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full p-2 rounded-xl mx-auto bg-bgPrimary">
      <div className="flex justify-between">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-bold text-textPrimary">
            {t.chartTitle}
          </h2>
          <span className="text-sm text-success font-medium">{t.growth}</span>
        </div>
        <div className="flex justify-end items-center text-textSecondary text-sm space-x-4">
          <span className={`${language == "ar" ? "mx-3" : ""} cursor-pointer`}>{t.timeFilters.daily}</span>
          <span className="cursor-pointer">{t.timeFilters.weekly}</span>
          <span className="cursor-pointer">{t.timeFilters.monthly}</span>
          <span className="text-textPrimary font-bold">
            {t.timeFilters.yearly}
          </span>
        </div>
      </div>
      <div className="h-[350px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
