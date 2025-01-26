"use client";

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
import { useLanguageStore } from "~/APIs/store";

const translations = {
  en: {
    income: "Income",
    incomeValue: "$11,642",
    growth: "+3.4%",
    timeFilters: {
      day: "Day",
      week: "Week",
      month: "Month",
      year: "Year",
    },
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    tooltip: {
      title: "Income",
      label: (value: number) => `Income: $${value.toLocaleString()}`,
      afterLabel: "Friday, 22 Sep",
    },
  },
  ar: {
    income: "الدخل",
    incomeValue: "$١١,٦٤٢",
    growth: "+٣.٤٪",
    timeFilters: {
      day: "يوم",
      week: "أسبوع",
      month: "شهر",
      year: "سنة",
    },
    days: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
    tooltip: {
      title: "الدخل",
      label: (value: number) => `الدخل: $${value.toLocaleString()}`,
      afterLabel: "الجمعة، ٢٢ سبتمبر",
    },
  },
  fr: {
    income: "Revenu",
    incomeValue: "$11,642",
    growth: "+3,4%",
    timeFilters: {
      day: "Jour",
      week: "Semaine",
      month: "Mois",
      year: "Année",
    },
    days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    tooltip: {
      title: "Revenu",
      label: (value: number) => `Revenu: $${value.toLocaleString()}`,
      afterLabel: "Vendredi, 22 Sep",
    },
  },
  ru: {
    income: "Доход",
    incomeValue: "$11,642",
    growth: "+3,4%",
    timeFilters: {
      day: "День",
      week: "Неделя",
      month: "Месяц",
      year: "Год",
    },
    days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    tooltip: {
      title: "Доход",
      label: (value: number) => `Доход: $${value.toLocaleString()}`,
      afterLabel: "Пятница, 22 Сентября",
    },
  },
};


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

const WeeklyChart = () => {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const data = {
    labels: t.days, // Use the translated days from the `translations` object
    datasets: [
      {
        label: t.income,
        data: [10000, 80000, 50000, 78000, 11642, 110000, 110000],
        borderColor: "#0070FF",
        backgroundColor: "#0561FC2B",
        tension: 0,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: (context: any) =>
          context.dataIndex === 4 ? "#0070FF" : "#FFFFFF",
        pointBorderColor: (context: any) =>
          context.dataIndex === 4 ? "#FFFFFF" : "#0070FF",
      },
    ],
  };
  

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          title: () => t.tooltip.title,
          label: (context: any) => t.tooltip.label(context.raw),
          afterLabel: () => t.tooltip.afterLabel,
        },
        displayColors: false,
        backgroundColor: "#FFFFFF",
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#E5E7EB",
        borderWidth: 1,
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
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: "#E5E7EB",
        },
        ticks: {
          callback: function (tickValue: any) {
            return `$${(tickValue / 1000).toFixed(1)}k`;
          },
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div
      className="mx-auto p-2 rounded-xl w-full bg-bgPrimary"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-4 flex items-end gap-3">
        <div>
          <h2 className="text-sm font-medium text-textSecondary">{t.income}</h2>
          <h1 className="text-2xl font-bold text-textPrimary">
            {t.incomeValue}
          </h1>
        </div>
        <span className="mb-[2px] text-sm font-medium text-success">
          {t.growth}
        </span>
      </div>
      <div
        className={`mb-4 flex items-center justify-end space-x-4 text-sm text-textSecondary ${
          language === "ar" ? "space-x-reverse" : ""
        }`}
      >
        <span className="cursor-pointer">{t.timeFilters.day}</span>
        <span className="cursor-pointer font-bold text-textPrimary">
          {t.timeFilters.week}
        </span>
        <span className="cursor-pointer">{t.timeFilters.month}</span>
        <span className="cursor-pointer">{t.timeFilters.year}</span>
      </div>
      <div className="h-[310px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyChart;
