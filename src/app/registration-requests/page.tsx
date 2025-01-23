/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
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

function RegistrationRequests() {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [currentPage, setCurrentPage] = useState<string>("passenger");

  // Passenger
  const [selectedUsersPassenger, setSelectedUsersPassenger] = useState<
    Record<number, boolean>
  >({});

  const tableDataPassenger: TableRow[] = [
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

  const isAllSelectedPassenger = () =>
    tableDataPassenger.length > 0 &&
    tableDataPassenger.every((_, index) => selectedUsersPassenger[index]);

  const handleSelectAllPassenger = () => {
    const updatedSelectionPassenger: Record<number, boolean> = {};
    const allSelectedPassenger = isAllSelectedPassenger();
    tableDataPassenger.forEach((_, index) => {
      updatedSelectionPassenger[index] = !allSelectedPassenger;
    });
    setSelectedUsersPassenger(updatedSelectionPassenger);
  };

  const handleUserSelectionPassenger = (index: number) => {
    setSelectedUsersPassenger((prevSelectedUsersPassenger) => ({
      ...prevSelectedUsersPassenger,
      [index]: !prevSelectedUsersPassenger[index],
    }));
  };

  // Host
  const [selectedUsersHost, setSelectedUsersHost] = useState<
    Record<number, boolean>
  >({});

  const tableDataHost: TableRow[] = [
    {
      requestDate: "20, July, 2025",
      images: [
        { name: "صورة بطاقة الطالب.jpg", type: "photo" },
        { name: "صورة شهادة الميلاد.jpg", type: "photo" },
        { name: "صورة عقد الإيجار.jpg", type: "photo" },
      ],
      address: "حي الزيتون، القاهرة",
      user: "علي محمود عبد الله",
    },
    {
      requestDate: "18, July, 2025",
      images: [
        { name: "صورة جواز السفر.jpg", type: "photo" },
        { name: "صورة كشف حساب بنكي.jpg", type: "document" },
        { name: "صورة تأمين السيارة.jpg", type: "photo" },
      ],
      address: "حي المعادي، القاهرة",
      user: "هدى إبراهيم السيد",
    },
    {
      requestDate: "15, July, 2025",
      images: [
        { name: "صورة الهوية.jpg", type: "photo" },
        { name: "صورة عقد العمل.jpg", type: "document" },
        { name: "صورة فاتورة كهرباء.jpg", type: "document" },
      ],
      address: "حي الهرم، الجيزة",
      user: "يوسف أحمد خالد",
    },
    {
      requestDate: "22, July, 2025",
      images: [
        { name: "صورة رخصة القيادة.jpg", type: "photo" },
        { name: "صورة بطاقة المالك.jpg", type: "photo" },
        { name: "صورة ملكية السيارة.jpg", type: "document" },
      ],
      address: "شارع التحرير، الإسكندرية",
      user: "مروة سامي محمد",
    },
    {
      requestDate: "25, July, 2025",
      images: [
        { name: "صورة هوية العميل.jpg", type: "photo" },
        { name: "صورة تصريح السفر.jpg", type: "document" },
        { name: "صورة عقد الشراء.jpg", type: "document" },
      ],
      address: "حي وسط البلد، المنصورة",
      user: "كريم جمال عبد الفتاح",
    },
  ];
  

  const isAllSelectedHost = () =>
    tableDataHost.length > 0 &&
    tableDataHost.every((_, index) => selectedUsersHost[index]);

  const handleSelectAllHost = () => {
    const updatedSelectionHost: Record<number, boolean> = {};
    const allSelectedHost = isAllSelectedHost();
    tableDataHost.forEach((_, index) => {
      updatedSelectionHost[index] = !allSelectedHost;
    });
    setSelectedUsersHost(updatedSelectionHost);
  };

  const handleUserSelectionHost = (index: number) => {
    setSelectedUsersHost((prevSelectedUsersHost) => ({
      ...prevSelectedUsersHost,
      [index]: !prevSelectedUsersHost[index],
    }));
  };

  return (
    <Container>
      <Text font={"bold"} size={"2xl"}>
        {t.users}
      </Text>
      <div className="my-8 flex gap-4">
        <div
          onClick={() => setCurrentPage("passenger")}
          className="w-fit cursor-pointer"
        >
          <Text
            font={"semiBold"}
            size={"xl"}
            className={
              currentPage === "passenger" ? "text-primary2 underline" : ""
            }
          >
            {t.passenger}
          </Text>
        </div>
        <div
          onClick={() => setCurrentPage("Host")}
          className="w-fit cursor-pointer"
        >
          <Text
            font={"semiBold"}
            size={"xl"}
            className={currentPage === "Host" ? "text-primary2 underline" : ""}
          >
            {t.host}
          </Text>
        </div>
      </div>
      {currentPage === "passenger" ? (
        <Box className="mb-8 overflow-x-auto">
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
                      checked={isAllSelectedPassenger()}
                      onChange={handleSelectAllPassenger}
                    />
                    <div
                      className={`h-6 w-6 rounded border-2 ${
                        isAllSelectedPassenger()
                          ? "border-primary2 bg-primary2"
                          : "border-borderPrimary"
                      } flex items-center justify-center`}
                    >
                      {isAllSelectedPassenger() && (
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
              {tableDataPassenger.map((row, index) => (
                <div
                  key={index}
                  className="mt-4 grid grid-cols-5 gap-4 px-4 py-2"
                >
                  {/* Status */}
                  <div className="flex justify-start gap-4">
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-softRed hover:bg-softRedHover transition duration-300 text-white">
                      <FaTimes size={20} />
                    </div>
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-primary2 hover:bg-primary2Hover transition duration-300 text-white">
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
                  <div className="flex items-start justify-end space-x-3">
                    <span>{row.user}</span>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedUsersPassenger[index] || false}
                        onChange={() => handleUserSelectionPassenger(index)}
                      />
                      <div
                        className={`h-6 w-6 rounded border-2 transition-all ${
                          selectedUsersPassenger[index]
                            ? "border-primary2 bg-primary2"
                            : "border-borderPrimary bg-bgPrimary"
                        } flex items-center justify-center`}
                      >
                        {selectedUsersPassenger[index] && (
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
      ) : (
        <Box className="mb-8 overflow-x-auto">
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
                      checked={isAllSelectedPassenger()}
                      onChange={handleSelectAllHost}
                    />
                    <div
                      className={`h-6 w-6 rounded border-2 ${
                        isAllSelectedPassenger()
                          ? "border-primary2 bg-primary2"
                          : "border-borderPrimary"
                      } flex items-center justify-center`}
                    >
                      {isAllSelectedPassenger() && (
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
              {tableDataHost.map((row, index) => (
                <div
                  key={index}
                  className="mt-4 grid grid-cols-5 gap-4 px-4 py-2"
                >
                  {/* Status */}
                  <div className="flex justify-start gap-4">
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-softRed hover:bg-softRedHover transition duration-300 text-white">
                      <FaTimes size={20} />
                    </div>
                    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-primary2 hover:bg-primary2Hover transition duration-300 text-white">
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
                  <div className="flex items-start justify-end space-x-3">
                    <span>{row.user}</span>
                    <label className="flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedUsersHost[index] || false}
                        onChange={() => handleUserSelectionHost(index)}
                      />
                      <div
                        className={`h-6 w-6 rounded border-2 transition-all ${
                          selectedUsersHost[index]
                            ? "border-primary2 bg-primary2"
                            : "border-borderPrimary bg-bgPrimary"
                        } flex items-center justify-center`}
                      >
                        {selectedUsersHost[index] && (
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
      )}
    </Container>
  );
}

export default RegistrationRequests;
