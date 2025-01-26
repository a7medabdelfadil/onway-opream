"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import NewBookingChart from "~/_components/NewBookingChat";
import { Text } from "~/_components/Text";
import WeeklyChart from "~/_components/WeeklyChat";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";

interface Image {
  name: string;
  type: string;
}

interface TableRow {
  requestDate: string;
  images: Image[];
  address: string;
  user: string;
}
function Dashboard() {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [selectedUsers, setSelectedUsers] = useState<Record<number, boolean>>(
    {},
  );

  const tableData: TableRow[] = [
    {
      requestDate: "14, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo" },
        { name: "صورة رخصة القيادة .jpg", type: "photo" },
        { name: "صورة رخصة السيارة .jpg", type: "photo" },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
    },
    {
      requestDate: "10, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo" },
        { name: "صورة رخصة القيادة .jpg", type: "photo" },
        { name: "صورة رخصة السيارة .jpg", type: "photo" },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo" },
        { name: "صورة رخصة القيادة .jpg", type: "photo" },
        { name: "صورة رخصة السيارة .jpg", type: "photo" },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo" },
        { name: "صورة رخصة القيادة .jpg", type: "photo" },
        { name: "صورة رخصة السيارة .jpg", type: "photo" },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo" },
        { name: "صورة رخصة القيادة .jpg", type: "photo" },
        { name: "صورة رخصة السيارة .jpg", type: "photo" },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
  ];

  const isAllSelected = () =>
    tableData.length > 0 && tableData.every((_, index) => selectedUsers[index]);

  const handleSelectAll = () => {
    const updatedSelection: Record<number, boolean> = {};
    const allSelected = isAllSelected();
    tableData.forEach((_, index) => {
      updatedSelection[index] = !allSelected;
    });
    setSelectedUsers(updatedSelection);
  };

  const handleUserSelection = (index: number) => {
    setSelectedUsers((prevSelectedUsers) => ({
      ...prevSelectedUsers,
      [index]: !prevSelectedUsers[index],
    }));
  };

  return (
    <Container>
      <Text font={"semiBold"} size={"2xl"} className="mb-4">
        {t.dashboardTitle}
      </Text>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <Box className="p-8">
          <Text color={"gray"}>{t.totalUsers}</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              250
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              {t.growth}
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>{t.totalGuests}</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              63
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              {t.growth}
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>{t.totalIncome}</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              $52.6k
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              {t.growth}
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>{t.newBooking}</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              21
            </Text>
            <Text className="w-fit rounded-full bg-error/10 px-3 py-1 text-error">
              {t.decline}
            </Text>
          </div>
        </Box>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="w-[calc(60%-8px)] sm:w-full md:w-[calc(50%-8px)] lg:w-[calc(60%-8px)]">
          <WeeklyChart />
        </div>
        <div className="w-[calc(40%-8px)] sm:w-full md:w-[calc(50%-8px)] lg:w-[calc(40%-8px)]">
          <NewBookingChart />
        </div>
      </div>

      <Box className="mb-8 mt-4 overflow-x-auto">
        <Text font={"semiBold"} size={"xl"} className="mb-4">
          {t.lastRegistrationRequest}
        </Text>
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 px-4 py-2 font-medium text-textSecondary">
            <div className="text-start">{t.status}</div>
            <div className="text-center">{t.requestDate}</div>
            <div className="text-center">{t.images}</div>
            <div className="text-center">{t.address}</div>
            <div className="flex items-center justify-end gap-2">
              {t.users}
              <div className="flex items-center space-x-3">
                <label className="flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isAllSelected()}
                    onChange={handleSelectAll}
                  />
                  <div
                    className={`h-6 w-6 rounded border-2 ${
                      isAllSelected()
                        ? "border-primary2 bg-primary2"
                        : "border-borderPrimary"
                    } flex items-center justify-center`}
                  >
                    {isAllSelected() && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Body */}
          <div>
            {tableData.map((row, index) => (
              <div
                key={index}
                className="mt-4 grid grid-cols-5 gap-4 px-4 py-2"
              >
                {/* Status */}
                <div className="flex justify-start gap-4">
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-softRed text-white transition duration-300 hover:bg-softRedHover">
                    <FaTimes size={20} />
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-primary2 text-white transition duration-300 hover:bg-primary2Hover">
                    <FaCheck size={18} />
                  </div>
                </div>

                {/* Request Date */}
                <div className="text-center text-textSecondary">
                  {row.requestDate}
                </div>

                {/* Images */}
                <div className="flex justify-center">
                  <div className="flex w-fit flex-col items-end gap-2">
                    {row.images.map((image, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Text>{image.name}</Text>
                        <TbPhoto />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="text-center">{row.address}</div>

                {/* Users */}
                <div className="flex items-start justify-end">
                  <span className="mx-2">{row.user}</span>
                  <label className="flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedUsers[index] || false}
                      onChange={() => handleUserSelection(index)}
                    />
                    <div
                      className={`h-6 w-6 rounded border-2 transition-all ${
                        selectedUsers[index]
                          ? "border-primary2 bg-primary2"
                          : "border-borderPrimary bg-white"
                      } flex items-center justify-center`}
                    >
                      {selectedUsers[index] && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Container>
  );
}

export default Dashboard;
