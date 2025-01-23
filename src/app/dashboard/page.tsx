"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { TbPhoto } from "react-icons/tb";
import Box from "~/_components/Box";
import BoxGrid from "~/_components/BoxGrid";
import Container from "~/_components/Container";
import NewBookingChart from "~/_components/NewBookingChat";
import { Text } from "~/_components/Text";
import WeeklyChart from "~/_components/WeeklyChat";

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
        Dashboard
      </Text>
      <BoxGrid columns={4} mdColumns={2} gap={1}>
        <Box className="p-8">
          <Text color={"gray"}>Total Users</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              250
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              +3.4%
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>Total Guest</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              63
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              +3.4%
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>Total Income</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              $52.6k
            </Text>
            <Text className="w-fit rounded-full bg-limeGreen/10 px-3 py-1 text-limeGreen">
              +3.4%
            </Text>
          </div>
        </Box>
        <Box className="p-8">
          <Text color={"gray"}>New Booking</Text>
          <div className="flex items-center justify-between">
            <Text font={"semiBold"} size={"2xl"}>
              21
            </Text>
            <Text className="w-fit rounded-full bg-error/10 px-3 py-1 text-error">
              -3.4%
            </Text>
          </div>
        </Box>
      </BoxGrid>
      <div className="mt-4 flex gap-4">
        <Box className="w-3/5">
          <Text className="text-error">Not the last version! style will be updated</Text>
          <WeeklyChart />
        </Box>
        <Box className="w-2/5">
        <Text className="text-error">Not the last version! style will be updated</Text>
        <NewBookingChart />
        </Box>
      </div>
      <Box className="overflow-x-auto mb-8 mt-4">
          <Text font={"semiBold"} size={"xl"} className="mb-4">
            Last Registration Request
          </Text>
          <div className="min-w-[900px]">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 px-4 py-2 font-medium text-textSecondary">
              <div className="text-start">Status</div>
              <div className="text-center">Request Date</div>
              <div className="text-center">Images</div>
              <div className="text-center">Address</div>
              <div className="flex items-center justify-end gap-2">
                Users
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
                          : "border-gray-400"
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
                  className="grid grid-cols-5 gap-4 px-4 py-2 mt-4"
                >
                  {/* Status */}
                  <div className="flex justify-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-softRed hover:bg-softRedHover transition duration-300 cursor-pointer text-white">
                      <FaTimes size={20} />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary2 hover:bg-primary2Hover transition duration-300 cursor-pointer text-white">
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
                        checked={selectedUsers[index] || false}
                        onChange={() => handleUserSelection(index)}
                      />
                      <div
                        className={`h-6 w-6 rounded border-2 transition-all ${
                          selectedUsers[index]
                            ? "border-primary2 bg-primary2"
                            : "border-gray-400 bg-white"
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
