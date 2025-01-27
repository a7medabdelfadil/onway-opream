/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import TextEditor from "~/_components/TextEditor";
import Button from "~/_components/Button";

interface Image {
  name: string;
  type: string;
  url: string;
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
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [isRejectMethodModalOpen, setIsRejectMethodModalOpen] = useState(false);
  const [isRejectReasonModalOpen, setIsRejectReasonModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>("passenger");


  const openApprovalModal = () => {
    setIsApprovalModalOpen(true);
  };

  const closeApprovalModal = () => {
    setIsApprovalModalOpen(false);
  };

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
      requestDate: "14, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/photo.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
    },
    {
      requestDate: "10, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "14, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/photo.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
    },
    {
      requestDate: "10, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "14, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/photo.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
    },
    {
      requestDate: "10, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
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
      requestDate: "14, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/photo.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
    },
    {
      requestDate: "10, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "10, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "بني سويف الجديدة",
      user: "محمد عبد الرحمن",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "12, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/profile.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "القاهرة",
      user: "سامي محمود عيسى",
    },
    {
      requestDate: "14, June, 2025",
      images: [
        { name: "صورة بطاقة .jpg", type: "photo", url: "/images/photo.png" },
        {
          name: "صورة رخصة القيادة .jpg",
          type: "photo",
          url: "/images/support.png",
        },
        {
          name: "صورة رخصة السيارة .jpg",
          type: "photo",
          url: "/images/noImage.png",
        },
      ],
      address: "اهناسيا المدينة",
      user: "احمد علي محمد",
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
                      <div
                        onClick={openRejectMethodModal}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-softRed text-white transition duration-300 hover:bg-softRedHover"
                      >
                        <FaTimes size={20} />
                      </div>
                      <div
                        onClick={openApprovalModal}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
                      >
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

                    {/* Address */}
                    <div className="text-center">{row.address}</div>

                    {/* Users */}
                    <div className="flex items-start justify-end">
                      <span className="mx-2">{row.user}</span>
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
                        checked={isAllSelectedHost()}
                        onChange={handleSelectAllHost}
                      />
                      <div
                        className={`h-6 w-6 rounded border-2 ${
                          isAllSelectedHost()
                            ? "border-primary2 bg-primary2"
                            : "border-borderPrimary"
                        } flex items-center justify-center`}
                      >
                        {isAllSelectedHost() && (
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
                      <div
                        onClick={openRejectMethodModal}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-softRed text-white transition duration-300 hover:bg-softRedHover"
                      >
                        <FaTimes size={20} />
                      </div>
                      <div
                        onClick={openApprovalModal}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
                      >
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
                          <div
                            key={i}
                            className="flex cursor-pointer items-center gap-2"
                            onClick={() => openModalHost(image, row.images, i)}
                          >
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
      {/* Modal */}
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
      {isApprovalModalOpen && (
        <div
          className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-black/50"
          onClick={closeApprovalModal}
        >
          <div
            className="relative flex flex-col items-center rounded-lg bg-bgPrimary p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <img src="/images/aproval.png" className="h-auto w-60" />
            </div>
            <Text font={"medium"}>{t.approvalSent}</Text>
          </div>
        </div>
      )}
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
    </>
  );
}

export default RegistrationRequests;
