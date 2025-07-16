// image link -> "../../assets/EventImg/EventImage.webp"
/*
  Event object ->
    {
      registeration: true,
      registerationLink: "https://www.google.com",
      Eventimage: EventImage_variable,
      Eventdate: "8th April 2025",
      medium: "Google meet",
      time: "7:00pm - 8:00 pm",
      title: "write Title 15-20 words",  
    },
    {
      registeration: false,
      Eventimage: EventImage_variable,
      Eventdate: "8th April 2025",
      medium: "Google meet",
      time: "7:00pm - 8:00 pm",
      title: "write Title 15-20 words",  
    },  
*/
// Recent Events :-
import E1image from "../../assets/EventImg/E1.webp";
import E2image from "../../assets/EventImg/E2.webp";
import E3image from "../../assets/EventImg/E3.webp";
import E4image from "../../assets/EventImg/E4.avif";

const event = {
  recent: [
    {
      registeration: true,
      registerationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeCeAzi_wN8gMCQCszpqb5aElRVG8sT1RXD1EIeDtrlBpc9LQ/viewform", // (link not explicitly given)
      Eventimage: E4image,
      Eventdate: "18 July 2025", // (year not in image)
      medium: "Google meet",
      time: "7:30 pm", // (end time unspecified)
      title:
        "Debug Dialogues with Nipnil Raj Deka | An interactive session with tech experts from industry & academia!",
    },
    {
      registeration: false,
      // registerationLink: "https://www.google.com",
      Eventimage: E3image,
      Eventdate: "8th April 2025",
      medium: "Google meet",
      time: "7:00pm - 8:00 pm",
      title:
        "Debug Dialouges with Ahmed Abid | An interactive session where we bring insiring minds from the tech world to your screen!",
    },
    {
      registration: false,
      Eventimage: E2image,
      Eventdate: "12th October 2024",
      medium: "CSE Lab 2",
      time: "4:00pm - 5:00 pm",
      title:
        " Weekly Problem Solving Coding Session | A dynamic,hands-on experience where you can learn,solve and grow together",
    },
    {
      registration: false,
      Eventimage: E1image,
      Eventdate: "20th Sep 2024",
      medium: "BKB Seminar Hall",
      time: "4:00pm - 5:30 pm",
      title:
        "Orientation Program of Coding Club CITK | Join us and be a part of a vibrant community that codes ,creates and collaborates!",
    },
  ],
  past: [
    {
      registeration: false,
      Eventimage: E1image,
      Eventdate: "5th May 2025",
      medium: "Online",
      time: "6:00pm - 7:30 pm",
      title:
        "Introduction to Blockchain Technology | Discover the basics of blockchain and its applications in the modern world.",
    },
    {
      registeration: false,
      Eventimage: E2image,
      Eventdate: "8th April 2025",
      medium: "Google meet",
      time: "7:00pm - 8:00 pm",
      title:
        "Debug Dialouges with Ahmed Abid | An interactive session where we bring insiring minds from the tech world to your screen!",
    },
    {
      registeration: false,
      Eventimage: E3image,
      Eventdate: "12th March 2025",
      medium: "Auditorium",
      time: "5:00pm - 7:00 pm",
      title:
        "Annual Coding Marathon | Test your coding skills in a 2-hour marathon with exciting prizes!",
    },
    {
      registeration: false,
      Eventimage: E2image,
      Eventdate: "28th Feb 2025",
      medium: "Online",
      time: "6:00pm - 7:30 pm",
      title:
        "Web Development Bootcamp | Learn the basics of web development in this interactive session.",
    },
    {
      registeration: false,
      Eventimage: E3image,
      Eventdate: "15th Feb 2025",
      medium: "Google meet",
      time: "7:00pm - 8:30 pm",
      title:
        "Tech Talk: Future of AI | Explore the advancements and future scope of Artificial Intelligence.",
    },
    {
      registeration: false,
      Eventimage: E1image,
      Eventdate: "2nd Feb 2025",
      medium: "CSE Lab 1",
      time: "3:00pm - 5:00 pm",
      title:
        "Hands-on Python Workshop | Get started with Python programming with practical examples.",
    },
    {
      registeration: false,
      Eventimage: E2image,
      Eventdate: "20th Jan 2025",
      medium: "Seminar Hall",
      time: "4:00pm - 6:00 pm",
      title:
        "UI/UX Design Principles | Learn the fundamentals of designing user-friendly interfaces.",
    },
    {
      registeration: false,
      Eventimage: E3image,
      Eventdate: "10th Jan 2025",
      medium: "Google meet",
      time: "5:00pm - 6:30 pm",
      title:
        "Competitive Programming 101 | Tips and tricks to excel in coding competitions.",
    },
    {
      registeration: false,
      Eventimage: E1image,
      Eventdate: "25th Dec 2024",
      medium: "Online",
      time: "6:00pm - 7:00 pm",
      title:
        "Holiday Hackathon | Collaborate and build fun projects during the holidays.",
    },
    {
      registeration: false,
      Eventimage: E2image,
      Eventdate: "10th Dec 2024",
      medium: "BKB Seminar Hall",
      time: "4:00pm - 5:30 pm",
      title:
        "Career Guidance Session | Get insights from industry experts on tech careers.",
    },
    {
      registeration: false,
      Eventimage: E3image,
      Eventdate: "1st Dec 2024",
      medium: "Google meet",
      time: "7:00pm - 8:00 pm",
      title:
        "Debugging Best Practices | Learn how to debug your code efficiently.",
    },
  ],
};

export default event;
