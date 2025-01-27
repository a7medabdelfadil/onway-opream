/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import Button from "~/_components/Button";
import TextEditor from "~/_components/TextEditor";

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

function Dashboard() {
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [isRejectMethodModalOpen, setIsRejectMethodModalOpen] = useState(false);
  const [isRejectReasonModalOpen, setIsRejectReasonModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [currentRowImages, setCurrentRowImages] = useState<Image[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [selectedUsers, setSelectedUsers] = useState<Record<number, boolean>>(
    {},
  );

  const tableData: TableRow[] = [
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

  const openModal = (image: Image, images: Image[], index: number) => {
    setSelectedImage(image);
    setCurrentRowImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentRowImages([]);
    setCurrentImageIndex(0);
    setIsModalOpen(false);
  };

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
  };

  const openRejectReasonModal = () => {
    setIsRejectReasonModalOpen(true);
  };

  const closeRejectReasonModal = () => {
    setIsRejectReasonModalOpen(false);
    setIsRejectMethodModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentRowImages.length;
    setSelectedImage(currentRowImages[nextIndex] || null);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + currentRowImages.length) %
      currentRowImages.length;
    setSelectedImage(currentRowImages[prevIndex] || null);
    setCurrentImageIndex(prevIndex);
  };

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
    <>
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
          <div className="w-[calc(100%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(60%-8px)]">
            <WeeklyChart />
          </div>
          <div className="w-[calc(100%-8px)] md:w-[calc(50%-8px)] lg:w-[calc(40%-8px)]">
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
                    <div 
                    onClick={openRejectMethodModal}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-softRed text-white transition duration-300 hover:bg-softRedHover">
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
                          onClick={() => openModal(image, row.images, i)}
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
      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            className="relative m-4 flex items-center rounded-lg bg-bgPrimary p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <RiArrowDropLeftLine
              size={60}
              className="absolute left-4 h-10 w-10 cursor-pointer rounded-lg bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
              onClick={prevImage}
            />
            <div className="flex flex-col items-center px-60 py-40">
              <img
                src={selectedImage.url} // Correct image URL path
                alt={selectedImage.name}
                className="h-auto w-96"
              />
            </div>
            <RiArrowDropRightLine
              size={60}
              className="absolute right-4 h-10 w-10 cursor-pointer rounded-lg bg-primary2 text-white transition duration-300 hover:bg-primary2Hover"
              onClick={nextImage}
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
            className="relative m-4 flex flex-col items-center rounded-lg bg-bgPrimary p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <img src="/images/aproval.png" className="h-auto w-60" />
            </div>
            <Text font={"medium"}>Approval sent successfully</Text>
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
                Reject Reason
              </Text>
              <div className="mb-5 bg-bgPrimary">
                <TextEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Enter your content here..."
                />
              </div>
            </label>
            <div className="flex justify-center gap-10">
              <Button
                theme="outline"
                className="px-10"
                onClick={closeRejectMethodModal}
              >
                Cancel
              </Button>
              <Button onClick={openRejectReasonModal} className="px-10">
                Send
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
            <Text font={"medium"}>The reason for rejection has been sent</Text>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
