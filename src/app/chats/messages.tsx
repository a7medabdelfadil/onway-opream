// Define Types
export interface Message {
  text: string;
  sender: string;
  time: string;
}

export interface Contact {
  id: number;
  name: string;
  message: string;
  time: string;
  badgeCount: number;
  messages: Message[];
}

export const passengers: Contact[] = [
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

export const hosts: Contact[] = [
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
