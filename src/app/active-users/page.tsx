/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { TbPhoto } from "react-icons/tb";
import {
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
  RiLock2Fill,
} from "react-icons/ri";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
import TextEditor from "~/_components/TextEditor";
import Button from "~/_components/Button";

interface Image {
  name: string;
  type: string;
  url: string;
}

interface TableRow {
  id: string;
  email: string;
  images: Image[];
  address: string;
  user: string;
}

function ActiveUsers() {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [currentPage, setCurrentPage] = useState<string>("passenger");
  const [description, setDescription] = useState("");
  const [isRejectMethodModalOpen, setIsRejectMethodModalOpen] = useState(false);
  const [isRejectReasonModalOpen, setIsRejectReasonModalOpen] = useState(false);
  const openRejectMethodModal = () => {
    setIsRejectMethodModalOpen(true);
  };

  const closeRejectMethodModal = () => {
    setIsRejectMethodModalOpen(false);
    setDescription("");
  };

  const openRejectReasonModal = () => {
    setIsRejectReasonModalOpen(true);
  };

  const closeRejectReasonModal = () => {
    setIsRejectReasonModalOpen(false);
    setIsRejectMethodModalOpen(false);
    setDescription("");
  };

  // Passenger
  const [selectedUsersPassenger, setSelectedUsersPassenger] = useState<
    Record<number, boolean>
  >({});

  const tableDataPassenger: TableRow[] = [
    {
      id: "1",
      email: "ahmed.ali@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
    },
    {
      id: "2",
      email: "mohamed.abdelrahman@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      id: "3",
      email: "sami.mohamed@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      id: "4",
      email: "noha.ahmed@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "الجيزة",
      user: "نهى احمد علي",
    },
    {
      id: "5",
      email: "mona.hassan@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "المنيا",
      user: "منى حسن محمود",
    },
    {
      id: "6",
      email: "ibrahim.salem@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "أسيوط",
      user: "إبراهيم سالم محمد",
    },
    {
      id: "7",
      email: "karim.fouad@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "الاسكندرية",
      user: "كريم فؤاد علي",
    },
    {
      id: "8",
      email: "lamia.hassan@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "بورسعيد",
      user: "لمياء حسن إبراهيم",
    },
    {
      id: "9",
      email: "tarek.ahmed@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "دمياط",
      user: "طارق احمد عبد الله",
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

  const [isModalOpenPassenger, setIsModalOpenPassenger] = useState(false);
  const [selectedImagePassenger, setSelectedImagePassenger] =
    useState<Image | null>(null);
  const [currentRowImagesPassenger, setCurrentRowImagesPassenger] = useState<
    Image[]
  >([]);
  const [currentImageIndexPassenger, setCurrentImageIndexPassenger] =
    useState<number>(0);

  const openModalPassenger = (image: Image, images: Image[], index: number) => {
    setSelectedImagePassenger(image);
    setCurrentRowImagesPassenger(images);
    setCurrentImageIndexPassenger(index);
    setIsModalOpenPassenger(true);
  };

  const closeModalPassenger = () => {
    setSelectedImagePassenger(null);
    setCurrentRowImagesPassenger([]);
    setCurrentImageIndexPassenger(0);
    setIsModalOpenPassenger(false);
  };

  const nextImagePassenger = () => {
    const nextIndex =
      (currentImageIndexPassenger + 1) % currentRowImagesPassenger.length;
    setSelectedImagePassenger(currentRowImagesPassenger[nextIndex] || null);
    setCurrentImageIndexPassenger(nextIndex);
  };

  const prevImagePassenger = () => {
    const prevIndex =
      (currentImageIndexPassenger - 1 + currentRowImagesPassenger.length) %
      currentRowImagesPassenger.length;
    setSelectedImagePassenger(currentRowImagesPassenger[prevIndex] || null);
    setCurrentImageIndexPassenger(prevIndex);
  };

  // Host

  const [isModalOpenHost, setIsModalOpenHost] = useState(false);
  const [selectedImageHost, setSelectedImageHost] = useState<Image | null>(
    null,
  );
  const [currentRowImagesHost, setCurrentRowImagesHost] = useState<Image[]>([]);
  const [currentImageIndexHost, setCurrentImageIndexHost] = useState<number>(0);

  const openModalHost = (image: Image, images: Image[], index: number) => {
    setSelectedImageHost(image);
    setCurrentRowImagesHost(images);
    setCurrentImageIndexHost(index);
    setIsModalOpenHost(true);
  };

  const closeModalHost = () => {
    setSelectedImageHost(null);
    setCurrentRowImagesHost([]);
    setCurrentImageIndexHost(0);
    setIsModalOpenHost(false);
  };

  const nextImageHost = () => {
    const nextIndex = (currentImageIndexHost + 1) % currentRowImagesHost.length;
    setSelectedImageHost(currentRowImagesHost[nextIndex] || null);
    setCurrentImageIndexHost(nextIndex);
  };

  const prevImageHost = () => {
    const prevIndex =
      (currentImageIndexHost - 1 + currentRowImagesHost.length) %
      currentRowImagesHost.length;
    setSelectedImageHost(currentRowImagesHost[prevIndex] || null);
    setCurrentImageIndexHost(prevIndex);
  };

  const [selectedUsersHost, setSelectedUsersHost] = useState<
    Record<number, boolean>
  >({});

  const tableDataHost: TableRow[] = [
    {
      id: "1",
      email: "hassan.ali@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "طنطا",
      user: "حسن علي محمود",
    },
    {
      id: "2",
      email: "sara.khaled@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "دمنهور",
      user: "سارة خالد عبد الله",
    },
    {
      id: "3",
      email: "omar.ahmed@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "الزقازيق",
      user: "عمر أحمد إبراهيم",
    },
    {
      id: "4",
      email: "fatma.hassan@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "الأقصر",
      user: "فاطمة حسن علي",
    },
    {
      id: "5",
      email: "khaled.mostafa@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "أسوان",
      user: "خالد مصطفى سالم",
    },
    {
      id: "6",
      email: "mariam.nabil@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "شرم الشيخ",
      user: "مريم نبيل فؤاد",
    },
    {
      id: "7",
      email: "tamer.saeed@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "مرسى مطروح",
      user: "تامر سعيد محمود",
    },
    {
      id: "8",
      email: "rana.samir@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "بورسعيد",
      user: "رانا سمير أحمد",
    },
    {
      id: "9",
      email: "youssef.kamal@email.com",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "images/photo.png" },
      ],
      address: "الفيوم",
      user: "يوسف كمال طارق",
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
    <>
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
              className={
                currentPage === "Host" ? "text-primary2 underline" : ""
              }
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
            <div className="min-w-[1000px]">
              {/* Header */}
              <div className="grid grid-cols-6 gap-4 px-4 py-2 font-medium text-textSecondary">
                <div className="text-start">{t.status}</div>
                <div className="text-center">{t.images}</div>
                <div className="text-center">{t.address}</div>
                <div className="text-center">{t.email}</div>
                <div className="text-center">{t.users}</div>
                <div className="flex items-center justify-end gap-2">
                  {t.id}
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
                    className="mt-4 grid grid-cols-6 gap-4 px-4 py-2"
                  >
                    {/* Status */}
                    <div className="flex justify-start gap-4">
                      <div
                        onClick={openRejectMethodModal}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-softRed transition duration-300 hover:bg-softRedHover"
                      >
                        <RiLock2Fill className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex w-fit flex-col items-end gap-2">
                        {row.images.map((image, i) => (
                          <div
                            key={i}
                            className="flex cursor-pointer items-center gap-2"
                            onClick={() =>
                              openModalPassenger(image, row.images, i)
                            }
                          >
                            <Text>{image.name}</Text>
                            <TbPhoto />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">{row.address}</div>

                    {/* Request Date */}
                    <div className="text-center text-textSecondary">
                      {row.email.length > 18
                        ? `${row.email.substring(0, 18)}...`
                        : row.email}
                    </div>

                    {/* Address */}
                    <div className="text-center">{row.user}</div>

                    {/* Users */}
                    <div className="flex items-start justify-end">
                      <span className="mx-2">{row.id}</span>
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
            <div className="min-w-[1000px]">
              {/* Header */}
              <div className="grid grid-cols-6 gap-4 px-4 py-2 font-medium text-textSecondary">
                <div className="text-start">{t.status}</div>
                <div className="text-center">{t.images}</div>
                <div className="text-center">{t.address}</div>
                <div className="text-center">{t.address}</div>
                <div className="text-center">{t.email}</div>
                <div className="flex items-center justify-end gap-2">
                  {t.id}
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
                    className="mt-4 grid grid-cols-6 gap-4 px-4 py-2"
                  >
                    {/* Status */}
                    <div className="flex justify-start gap-4">
                      <div
                        onClick={openRejectMethodModal}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-softRed transition duration-300 hover:bg-softRedHover"
                      >
                        <RiLock2Fill className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex w-fit flex-col items-end gap-2">
                        {row.images.map((image, i) => (
                          <div
                            key={i}
                            className="flex cursor-pointer items-center gap-2"
                            onClick={() =>
                              openModalPassenger(image, row.images, i)
                            }
                          >
                            <Text>{image.name}</Text>
                            <TbPhoto />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">{row.address}</div>

                    {/* Request Date */}
                    <div className="text-center text-textSecondary">
                      {row.email.length > 18
                        ? `${row.email.substring(0, 18)}...`
                        : row.email}
                    </div>
                    {/* Images */}

                    {/* Address */}
                    <div className="text-center">{row.user}</div>

                    {/* Users */}
                    <div className="flex items-start justify-end">
                      <span className="mx-2">{row.id}</span>
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
      {isRejectMethodModalOpen && (
        <div
          className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-black/50"
          onClick={closeRejectMethodModal}
        >
          <div
            className="relative m-4 flex flex-col items-center rounded-lg bg-bgPrimary p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <label
              className="grid gap-2 text-[18px] font-semibold"
              htmlFor="description"
            >
              <Text className="pl-4" font={"semiBold"} size={"xl"}>
                {t.rejectReason}
              </Text>
              <div className="mb-5 bg-bgPrimary">
                <TextEditor
                  value={description}
                  onChange={setDescription}
                  placeholder={t.writeRejectReason}
                />
              </div>
            </label>
            <div className="flex justify-center gap-10">
              <Button
                theme="outline"
                className="px-10"
                onClick={closeRejectMethodModal}
              >
                {t.cancel}
              </Button>
              <Button onClick={openRejectReasonModal} className="px-10">
                {t.send}
              </Button>
            </div>
          </div>
        </div>
      )}
      {isRejectReasonModalOpen && (
        <div
          className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-black/50"
          onClick={closeRejectReasonModal}
        >
          <div
            className="relative m-4 flex flex-col items-center rounded-lg bg-bgPrimary p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <img
                src="/images/reject-reason.png"
                className="h-auto w-60 py-14"
              />
            </div>
            <Text font={"medium"}>{t.rejectionSent}</Text>
          </div>
        </div>
      )}
      {isModalOpenPassenger && selectedImagePassenger && (
        <div
          className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-black/50"
          onClick={closeModalPassenger}
        >
          <div
            className="relative flex items-center rounded-lg bg-bgPrimary p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <RiArrowDropLeftLine
              size={60}
              className="absolute left-4 h-10 w-10 cursor-pointer rounded-lg bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
              onClick={prevImagePassenger}
            />
            <div className="flex flex-col items-center px-60 py-40">
              <img
                src={selectedImagePassenger.url} // Correct image URL path
                alt={selectedImagePassenger.name}
                className="h-auto w-96"
              />
            </div>
            <RiArrowDropRightLine
              size={60}
              className="absolute right-4 h-10 w-10 cursor-pointer rounded-lg bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
              onClick={nextImagePassenger}
            />
          </div>
        </div>
      )}
      {isModalOpenHost && selectedImageHost && (
        <div
          className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-black/50"
          onClick={closeModalHost}
        >
          <div
            className="relative flex items-center rounded-lg bg-bgPrimary p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <RiArrowDropLeftLine
              size={60}
              className="absolute left-4 h-10 w-10 cursor-pointer rounded-lg bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
              onClick={prevImageHost}
            />
            <div className="flex flex-col items-center px-60 py-40">
              <img
                src={selectedImageHost.url} // Correct image URL path
                alt={selectedImageHost.name}
                className="h-auto w-96"
              />
            </div>
            <RiArrowDropRightLine
              size={60}
              className="absolute right-4 h-10 w-10 cursor-pointer rounded-lg bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
              onClick={nextImageHost}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ActiveUsers;
