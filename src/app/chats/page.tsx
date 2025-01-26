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


// Define Types
interface Message {
  text: string;
  sender: string;
  time: string;
}

interface Contact {
  id: number;
  name: string;
  message: string;
  time: string;
  badgeCount: number;
  messages: Message[];
}

const Chat: React.FC = () => {
  const language = useLanguageStore((state) => state.language); // Get current language
  const t = translations[language] || translations.en; // Fallback to English

  const [search, setSearch] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("passenger"); // Defaults to passenger
  const [selectedChat, setSelectedChat] = useState<Contact | null>(null); // Tracks the selected chat

  // Sample contacts for "passenger" and "host"
  // Sample contacts for "passenger" and "host"
  const passengers: Contact[] = [
    {
      id: 1,
      name: "Jane Doe",
      message: "Hi, I want to make enquiries about...",
      time: "12:55 am",
      badgeCount: 3,
      messages: [
        {
          text: "Hi, I want to make enquiries about ticket prices.",
          sender: "Jane Doe",
          time: "12:55 am",
        },
        {
          text: "Sure! Which destination are you interested in?",
          sender: "You",
          time: "12:57 am",
        },
        {
          text: "I'm looking for flights to Paris.",
          sender: "Jane Doe",
          time: "12:59 am",
        },
        {
          text: "We have tickets starting from $500. Would you like to book?",
          sender: "You",
          time: "1:00 am",
        },
        {
          text: "Hi, I want to make enquiries about ticket prices.",
          sender: "Jane Doe",
          time: "12:55 am",
        },
        {
          text: "Sure! Which destination are you interested in?",
          sender: "You",
          time: "12:57 am",
        },
        {
          text: "I'm looking for flights to Paris.",
          sender: "Jane Doe",
          time: "12:59 am",
        },
        {
          text: "We have tickets starting from $500. Would you like to book?",
          sender: "You",
          time: "1:00 am",
        },
        {
          text: "Hi, I want to make enquiries about ticket prices.",
          sender: "Jane Doe",
          time: "12:55 am",
        },
        {
          text: "Sure! Which destination are you interested in?",
          sender: "You",
          time: "12:57 am",
        },
        {
          text: "I'm looking for flights to Paris.",
          sender: "Jane Doe",
          time: "12:59 am",
        },
        {
          text: "We have tickets starting from $500. Would you like to book?",
          sender: "You",
          time: "1:00 am",
        },
      ],
    },
    {
      id: 2,
      name: "Ali Khan",
      message: "Can you help me with my boarding pass?",
      time: "2:30 pm",
      badgeCount: 2,
      messages: [
        {
          text: "Can you help me with my boarding pass?",
          sender: "Ali Khan",
          time: "2:30 pm",
        },
        {
          text: "Of course! Did you already check in online?",
          sender: "You",
          time: "2:32 pm",
        },
      ],
    },
    {
      id: 3,
      name: "Sarah Lee",
      message: "What documents do I need travel?",
      time: "11:00 am",
      badgeCount: 1,
      messages: [
        {
          text: "What documents do I need for international travel?",
          sender: "Sarah Lee",
          time: "11:00 am",
        },
        {
          text: "You’ll need your passport, visa (if required), and travel insurance.",
          sender: "You",
          time: "11:02 am",
        },
      ],
    },
    {
      id: 4,
      name: "Chris Brown",
      message: "What is the refund policy for my ticket?",
      time: "9:20 am",
      badgeCount: 2,
      messages: [
        {
          text: "What is the refund policy for my ticket?",
          sender: "Chris Brown",
          time: "9:20 am",
        },
        {
          text: "Refunds depend on the type of ticket you purchased.",
          sender: "You",
          time: "9:23 am",
        },
      ],
    },
    {
      id: 5,
      name: "Lisa Wong",
      message: "Can I reschedule my flight to next week?",
      time: "10:45 am",
      badgeCount: 1,
      messages: [
        {
          text: "Can I reschedule my flight to next week?",
          sender: "Lisa Wong",
          time: "10:45 am",
        },
        {
          text: "Sure, let me check availability for next week.",
          sender: "You",
          time: "10:48 am",
        },
      ],
    },
    {
      id: 6,
      name: "David Wilson",
      message: "Is priority boarding included in my ticket?",
      time: "3:15 pm",
      badgeCount: 0,
      messages: [
        {
          text: "Is priority boarding included in my ticket?",
          sender: "David Wilson",
          time: "3:15 pm",
        },
        {
          text: "It depends on your ticket class. May I check your booking?",
          sender: "You",
          time: "3:18 pm",
        },
      ],
    },
    {
      id: 7,
      name: "Maria Gonzalez",
      message: "Can I bring a stroller on board?",
      time: "7:10 pm",
      badgeCount: 1,
      messages: [
        {
          text: "Can I bring a stroller on board?",
          sender: "Maria Gonzalez",
          time: "7:10 pm",
        },
        {
          text: "Yes, strollers are allowed and will be gate-checked.",
          sender: "You",
          time: "7:13 pm",
        },
      ],
    },
    {
      id: 8,
      name: "Alex Morgan",
      message: "Does my ticket include lounge access?",
      time: "5:25 pm",
      badgeCount: 1,
      messages: [
        {
          text: "Does my ticket include lounge access?",
          sender: "Alex Morgan",
          time: "5:25 pm",
        },
        {
          text: "Lounge access is only available for business and first-class tickets.",
          sender: "You",
          time: "5:27 pm",
        },
      ],
    },
    {
      id: 9,
      name: "Sophia Evans",
      message: "How can I check my frequent flyer points?",
      time: "1:50 pm",
      badgeCount: 0,
      messages: [
        {
          text: "How can I check my frequent flyer points?",
          sender: "Sophia Evans",
          time: "1:50 pm",
        },
        {
          text: "You can check it on our website under the 'Frequent Flyer' section.",
          sender: "You",
          time: "1:53 pm",
        },
      ],
    },
    {
      id: 10,
      name: "Tom Hanks",
      message: "What happens if I miss my flight?",
      time: "8:30 am",
      badgeCount: 2,
      messages: [
        {
          text: "What happens if I miss my flight?",
          sender: "Tom Hanks",
          time: "8:30 am",
        },
        {
          text: "You can rebook on the next available flight for a fee.",
          sender: "You",
          time: "8:35 am",
        },
      ],
    },
  ];

  const hosts: Contact[] = [
    {
      id: 11,
      name: "John Smith",
      message: "Hi, how can I upgrade my room?",
      time: "3:45 pm",
      badgeCount: 1,
      messages: [
        {
          text: "Hi, how can I upgrade my room?",
          sender: "John Smith",
          time: "3:45 pm",
        },
        {
          text: "Let me check availability for you. What room type are you interested in?",
          sender: "You",
          time: "3:47 pm",
        },
      ],
    },
    {
      id: 12,
      name: "Emily Davis",
      message: "The Wi-Fi in my room isn't working.",
      time: "5:10 pm",
      badgeCount: 2,
      messages: [
        {
          text: "The Wi-Fi in my room isn't working.",
          sender: "Emily Davis",
          time: "5:10 pm",
        },
        {
          text: "I’m sorry to hear that. Let me reset it for you.",
          sender: "You",
          time: "5:12 pm",
        },
      ],
    },
    {
      id: 13,
      name: "Michael Johnson",
      message: "Can I extend my stay for one more night?",
      time: "6:30 pm",
      badgeCount: 0,
      messages: [
        {
          text: "Can I extend my stay for one more night?",
          sender: "Michael Johnson",
          time: "6:30 pm",
        },
        {
          text: "Let me check availability. Please hold on.",
          sender: "You",
          time: "6:32 pm",
        },
      ],
    },
    {
      id: 14,
      name: "Laura Green",
      message: "What time is breakfast served?",
      time: "7:00 am",
      badgeCount: 0,
      messages: [
        {
          text: "What time is breakfast served?",
          sender: "Laura Green",
          time: "7:00 am",
        },
        {
          text: "Breakfast is served from 7:00 am to 10:30 am.",
          sender: "You",
          time: "7:02 am",
        },
      ],
    },
    {
      id: 15,
      name: "Kevin Wright",
      message: "Can you arrange airport pickup for me?",
      time: "9:45 pm",
      badgeCount: 1,
      messages: [
        {
          text: "Can you arrange airport pickup for me?",
          sender: "Kevin Wright",
          time: "9:45 pm",
        },
        {
          text: "Certainly! Please provide your flight details.",
          sender: "You",
          time: "9:47 pm",
        },
      ],
    },
    {
      id: 16,
      name: "Sophia Martinez",
      message: "Is there a spa in the hotel?",
      time: "4:15 pm",
      badgeCount: 1,
      messages: [
        {
          text: "Is there a spa in the hotel?",
          sender: "Sophia Martinez",
          time: "4:15 pm",
        },
        {
          text: "Yes, our spa is open from 9:00 am to 8:00 pm.",
          sender: "You",
          time: "4:17 pm",
        },
      ],
    },
    {
      id: 17,
      name: "Tom Hardy",
      message: "Can I request extra towels?",
      time: "11:30 am",
      badgeCount: 1,
      messages: [
        {
          text: "Can I request extra towels?",
          sender: "Tom Hardy",
          time: "11:30 am",
        },
        {
          text: "Sure, we’ll have them delivered to your room shortly.",
          sender: "You",
          time: "11:32 am",
        },
      ],
    },
    {
      id: 18,
      name: "Anna Bell",
      message: "Are there vegetarian options for lunch?",
      time: "12:15 pm",
      badgeCount: 0,
      messages: [
        {
          text: "Are there vegetarian options for lunch?",
          sender: "Anna Bell",
          time: "12:15 pm",
        },
        {
          text: "Yes, we have a variety of vegetarian dishes available.",
          sender: "You",
          time: "12:17 pm",
        },
      ],
    },
    {
      id: 19,
      name: "David Clark",
      message: "Can I book a meeting room?",
      time: "3:00 pm",
      badgeCount: 1,
      messages: [
        {
          text: "Can I book a meeting room?",
          sender: "David Clark",
          time: "3:00 pm",
        },
        {
          text: "Yes, we have several meeting rooms. What time do you need it?",
          sender: "You",
          time: "3:02 pm",
        },
      ],
    },
    {
      id: 20,
      name: "Jessica White",
      message: "Is late check-out available?",
      time: "10:15 am",
      badgeCount: 1,
      messages: [
        {
          text: "Is late check-out available?",
          sender: "Jessica White",
          time: "10:15 am",
        },
        {
          text: "Late check-out is available until 2:00 pm for a small fee.",
          sender: "You",
          time: "10:17 am",
        },
      ],
    },
  ];

  // Determine which contacts to display based on the selected option
  const contacts = selectedOption === "passenger" ? passengers : hosts;

  const handleContactClick = (contact: Contact) => {
    setSelectedChat(contact);
  };

  return (
    <Container>
      <div className="flex h-full gap-4">
        {/* Sidebar */}
        <Box
          className="w-2/5"
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
                  className={`group flex h-14 w-full flex-col items-center justify-center rounded-md border border-borderPrimary/25 px-4 text-center shadow-md transition duration-300 ${
                    selectedOption === option
                      ? "bg-chat text-white"
                      : "text-chat hover:bg-chat bg-transparent hover:text-white"
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
        </Box>

        {/* Chat Content */}
        <Box
          className="flex-grow"
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
        </Box>
      </div>
    </Container>
  );
};

export default Chat;
