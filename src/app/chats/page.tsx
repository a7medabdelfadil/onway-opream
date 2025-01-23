/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";

function Chat() {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("passenger");

  const [activeTab, setActiveTab] = useState("meeting");

  const [screenHeight, setScreenHeight] = useState(0); // Initialize with 0 or a default value

  useEffect(() => {
    // Check if `window` is available to avoid SSR issues
    if (typeof window !== "undefined") {
      // Set the initial screen height
      setScreenHeight(window.innerHeight);

      // Define the resize handler
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          console.log("Screen is larger than md (768px)");
          executeYourFunction();
        }
        // Update screen height whenever the window is resized
        setScreenHeight(window.innerHeight);
      };

      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures this runs only once

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const handleNavBarMobileClick = (value: any) => {
    setActiveTab(value);
  };

  const executeYourFunction = () => {
    setActiveTab("meeting");
  };

  const messages = [
    {
      name: "Jane Doe",
      message: "Hi, I want to make enquiries about...",
      time: "12:55 am",
      badgeCount: 2,
    },
    {
      name: "Jane Doe",
      message: "Hi, I want to make enquiries about...",
      time: "12:55 am",
      badgeCount: 2,
    },
    {
      name: "Jane Doe",
      message: "Hi, I want to make enquiries about...",
      time: "12:55 am",
      badgeCount: 2,
    },
    {
      name: "Jane Doe",
      message: "Hi, I want to make enquiries about...",
      time: "12:55 am",
      badgeCount: 2,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
    {
      name: "John Smith",
      message: "Can you provide more details about...",
      time: "1:15 pm",
      badgeCount: 1,
    },
  ];

  return (
    <Container>
      <div className="flex gap-4">
        <Box width="2/5" style={{ maxHeight: `${screenHeight - 120}px` }}>
          <div className="flex justify-between">
            <Text font={"medium"} size={"2xl"}>
              {t.contacts}
            </Text>
            <Text size={"2xl"} font={"medium"} color={"gray"}>
            {t.totalContacts}
            </Text>
          </div>
          <div>
            <div className="mb-3 w-full">
              <label htmlFor="icon" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                  <FaSearch className="text-textSecondary" size={16} />
                </div>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="icon"
                  name="icon"
                  className="mt-4 block h-10 w-full rounded border border-borderPrimary/50 px-4 py-2 ps-11 text-sm shadow outline-none focus:border-[#3E5AF0] focus:ring-[#3E5AF0] disabled:pointer-events-none disabled:opacity-50"
                  placeholder={t.searchPlaceholder}
                />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center pb-4">
            <RadioGroup.Root
              className="flex w-3/4 gap-6 p-2"
              value={selectedOption}
              onValueChange={handleOptionChange}
              aria-labelledby="groups-label"
            >
              <RadioGroup.Item
                key="passenger"
                value="passenger"
                className="group flex h-14 w-full flex-col items-center justify-center rounded-md border border-borderPrimary/25 bg-transparent px-4 text-center text-[#3E5AF0] shadow-md transition duration-300 hover:bg-[#3E5AF0] hover:text-white focus-visible:ring focus-visible:ring-blue-200 data-[state=checked]:border-primary data-[state=checked]:bg-[#3E5AF0] data-[state=checked]:text-white"
                aria-labelledby="passenger-label"
              >
                <span
                  id="passenger-label"
                  className="text-md font-semibold xl:text-xl"
                >
                  {t.passenger}
                </span>
              </RadioGroup.Item>
              <RadioGroup.Item
                key="host"
                value="host"
                className="group flex h-14 w-full flex-col items-center justify-center rounded-md border border-borderPrimary/25 bg-transparent px-4 text-center text-[#3E5AF0] shadow-md transition duration-300 hover:bg-[#3E5AF0] hover:text-white focus-visible:ring focus-visible:ring-blue-200 data-[state=checked]:border-primary data-[state=checked]:bg-[#3E5AF0] data-[state=checked]:text-white"
                aria-labelledby="host-label"
              >
                <span
                  id="host-label"
                  className="text-md font-semibold xl:text-xl"
                >
                   {t.host}
                </span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          {/* Chats */}
          <div
            className="overflow-y-auto scrollbar-hide"
            style={{ maxHeight: `${screenHeight - 350}px` }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-borderPrimary p-4 transition duration-300 hover:bg-bgSecondary"
              >
                <div className="relative">
                  <img
                    src="/images/profile.png"
                    alt={message.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <div className="absolute -right-[3px] -top-[2px] h-3 w-3 rounded-full border-2 border-blackOrWhite bg-[#3E5AF0]"></div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between">
                    <Text font={"bold"} color={"gray"}>
                      {message.name}
                    </Text>
                    <span className="flex items-center gap-2">
                      {message.badgeCount && (
                        <span className="rounded bg-warning/25 px-2 py-0.5 text-xs font-semibold text-yellow-600">
                          {t.new}
                        </span>
                      )}
                      {message.badgeCount && (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3E5AF0] text-xs font-bold text-white">
                          {message.badgeCount}
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm text-textSecondary">
                    <p className="truncate">{message.message}</p>
                    <span className="text-xs">{message.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Box>
        <Box width="3/5">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-bgSecondary p-4">
                <BiSolidMessageRounded
                  className="text-textSecondary"
                  size={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Text font={"bold"} size={"2xl"} className="my-6">
                  {t.messages}
                </Text>
                <Text font={"semiBold"} color={"gray"}>
                  {t.clickToViewMessages}
                </Text>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default Chat;
