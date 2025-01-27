/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
import { FaCheck } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import Input from "~/_components/Input";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { Contact, hosts, passengers } from "./messages";




const Chat: React.FC = () => {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("passenger"); // Defaults to passenger
  const [selectedChat, setSelectedChat] = useState<Contact | null>(null); // Tracks the selected chat

  // Sample contacts for "passenger" and "host"
  // Sample contacts for "passenger" and "host"


  // Determine which contacts to display based on the selected option
  const contacts = selectedOption === "passenger" ? passengers : hosts;

  const handleContactClick = (contact: Contact) => {
    setSelectedChat(contact);
  };

  return (
    <Container>
      <div className="flex h-full gap-4">
        {/* Sidebar */}
        <div
          className="w-1/3 bg-bgPrimary p-4 rounded-xl"
          style={{
            height: "calc(100vh - 120px)",
          }}
        >
          <div className="flex justify-between">
            <Text font={"medium"} size={"2xl"}>
              {t.contacts}
            </Text>
            <Text size={"2xl"} font={"medium"} color={"gray"}>
              {contacts.length}
            </Text>
          </div>
          <div className="mb-3 w-full">
            <div className="relative w-full">
              <FaSearch
                className="absolute inset-y-0 start-0 z-20 flex items-center ps-4 text-textSecondary"
                size={16}
              />
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="focus:border-chat focus:ring-chat mt-4 block h-10 w-full rounded border border-borderPrimary/50 px-4 py-2 ps-11 text-sm shadow outline-none"
                placeholder={t.searchPlaceholder}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center pb-4">
            <RadioGroup.Root
              className="flex w-3/4 gap-6 p-2"
              value={selectedOption}
              onValueChange={setSelectedOption}
            >
              {["passenger", "host"].map((option) => (
                <RadioGroup.Item
                  key={option}
                  value={option}
                  className={`group flex h-12 flex-col items-center justify-center rounded-md border border-borderPrimary/25 px-4 text-center transition duration-300 ${
                    selectedOption === option
                      ? "bg-chat text-white w-full shadow-lg"
                      : "text-chat hover:bg-chat w-fit bg-transparent hover:text-white"
                  }`}
                >
                  <span className="text-md font-semibold">
                    {option === "passenger" ? t.passenger : t.host}
                  </span>
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </div>
          {/* Contact List */}
          <div
            className="overflow-y-auto scrollbar-hide"
            style={{ maxHeight: "calc(100vh - 350px)" }}
          >
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex cursor-pointer items-center gap-4 border-b border-borderPrimary/25 p-4 transition duration-300 hover:bg-bgSecondary"
                onClick={() => handleContactClick(contact)}
              >
                <div className="relative">
                  <img
                    src="/images/profile.png"
                    alt={contact.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                  <div className="bg-chat absolute -right-[3px] -top-[2px] h-3 w-3 rounded-full border-2 border-blackOrWhite"></div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between">
                    <Text font={"bold"} color={"gray"}>
                      {contact.name}
                    </Text>
                    <span className="flex items-center gap-2">
                      {contact.badgeCount > 0 && (
                        <>
                          <span className="rounded bg-warning/25 px-2 py-0.5 text-xs font-semibold text-warning">
                            New
                          </span>
                          <span className="bg-chat flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                            {contact.badgeCount}
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-sm text-textSecondary">
                    <p className="truncate">{contact.message}</p>
                    <span className="text-xs">{contact.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Content */}
          <div
          className="flex-grow bg-bgPrimary p-4 rounded-xl"
          style={{
            height: "calc(100vh - 120px)",
          }}
        >
          {selectedChat ? (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-borderPrimary/25 p-4">
                {/* Left Section: Profile Info */}
                <div className="flex items-center gap-4">
                  {/* Profile Picture */}
                  <img
                    src="/images/profile.png" // Replace with dynamic profile image URL if available
                    alt={selectedChat.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  {/* User Info */}
                  <div>
                    <Text font={"bold"} size={"lg"}>
                      {selectedChat.name}
                    </Text>
                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                      <span className="flex items-center">
                        <span className="bg-chat mr-1 h-2 w-2 rounded-full"></span>
                        Online
                      </span>
                      <span>{selectedChat.messages[0]?.time || ""}</span>
                    </div>
                  </div>
                </div>

                {/* Right Section: View Profile */}
                <button className="text-chat text-sm font-medium hover:underline">
                  View Profile
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
                {selectedChat.messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "You" ? "justify-start" : "justify-end"} mb-4`}
                  >
                    <div>
                      <div
                        className={`max-w-xs rounded-t-xl p-3 ${
                          msg.sender === "You"
                            ? "bg-chat rounded-r-xl text-white"
                            : "rounded-l-xl bg-bgSecondary text-textPrimary"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span
                        className={`mt-1 block text-sm ${
                          msg.sender === "You" ? "text-start" : "text-end"
                        } text-textSecondary`}
                      >
                        {msg.time}
                        <FaCheck
                          size={20}
                          className={`ml-2 rounded-full bg-bgSecondary p-1 text-textPrimary ${
                            msg.sender === "You" ? "hidden" : "inline-block"
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4">
                <div className="relative flex items-center gap-4">
                <HiPlus size={30}
                    className="cursor-pointer z-10 absolute left-4 top-1/2 flex -translate-y-1/2 rounded-lg text-white bg-primary2/10 p-1 transition duration-300 hover:bg-primary2/25"
                    />

                  <Input
                    border="none"
                    theme="transparent"
                    type="text"
                    className="pl-14 h-14 w-full rounded-md border border-borderPrimary p-2 focus:outline-none focus:ring-2 focus:ring-primary2"
                    placeholder="Your message"
                  />
                  <HiOutlineEmojiHappy
                    size={25}
                    className="cursor-pointer z-10 absolute right-32 top-1/2 flex -translate-y-1/2 text-primary2 transition duration-300 hover:text-primary2Hover"
                  />
                  <button className="absolute right-2 top-1/2 flex -translate-y-1/2 transform items-center gap-2 rounded-md bg-primary2 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-primary2Hover">
                    Send
                    <BsFillSendFill className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-bgSecondary p-4">
                  <BiSolidMessageRounded
                    className="text-textSecondary"
                    size={100}
                  />
                </div>
                <div className="mt-6 text-center">
                  <Text font={"bold"} size={"2xl"}>
                    {t.messages}
                  </Text>
                  <Text font={"semiBold"} color={"gray"} className="mt-2">
                    {t.clickToViewMessages}
                  </Text>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Chat;
