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
//Events images imports :-
import E1image from "../../assets/EventImg/Pritam_Prasad_DDS3.webp";
import E4image from "../../assets/EventImg/E4.avif";
import E3image from "../../assets/EventImg/E3.webp";
import E2image from "../../assets/EventImg/E2.webp";
import P1image from "../../assets/EventImg/p1.png";
import P2image from "../../assets/EventImg/p2.jpeg";
import P3image from "../../assets/EventImg/p3.png";
import P4image from "../../assets/EventImg/p4.jpeg";
import P5image from "../../assets/EventImg/p5.jpeg";
import P6image from "../../assets/EventImg/p6.png";
import P7image from "../../assets/EventImg/E1.webp";
import DD4image from "../../assets/EventImg/DD4.webp";

//  eventDate ="DD/MM/YYYY" and  eventTime = "7:30 pm" (Format)
function isRegistrationOpen(eventDate, eventTime) {
  // Parse DD/MM/YYYY format
  const [day, month, year] = eventDate.split("/").map(Number);

  // Parse time (format: "h:mm am/pm")
  const [time, period] = eventTime.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  // Convert to 24-hour format
  if (period.toLowerCase() === "pm" && hours !== 12) {
    hours += 12;
  } else if (period.toLowerCase() === "am" && hours === 12) {
    hours = 0;
  }

  // Create event datetime (month-1 because JS months are 0-indexed)
  const eventStart = new Date(year, month - 1, day, hours, minutes || 0);
  const registrationDeadline = new Date(eventStart.getTime() - 60 * 60 * 1000); // 1 hour before
  const now = new Date();

  return now < registrationDeadline;
}

const event = {
  recent: [
    {
      Eventimage: DD4image,
      Eventdate: "31th October 2025",
      medium: "Google meet",
      time: "5:00pm - 6:00pm",
      title:
        "DDebug Dialogues: Session 04 with Prithwiraj Adhikary | Insights on Finance, Technology, and Career Growth at Morgan Stanley",
      get registeration() {
        return isRegistrationOpen("31/10/2025", "5 pm");
      },
      registerationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdmqcBTfK4MkT2eIAs9Hi9FQUa9iCuYIoQk9waqUS3WI9LgcA/viewform",
    },
    {
      Eventimage: E1image,
      Eventdate: "30th August 2025",
      medium: "Google meet",
      time: "7:30pm - 8:30pm",
      title:
        "Debug Dialogues: Session 03 with Pritam Prasad | Exploring Scalable Backend Systems, Design Principles, and Industry Insights",
      get registeration() {
        return isRegistrationOpen("30/08/2025", "7:30 pm");
      },
      registerationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe0swFYosZhuAS_F42iQrw5rB1JkE6p-x5qaOuFBrvkyvCiEw/viewform",
    },
    {
      Eventimage: E4image,
      Eventdate: "18th July 2025",
      medium: "Google meet",
      time: "7:30pm - 8:30pm",
      title:
        "Debug Dialogues with Nipnil Raj Deka | An interactive session with tech experts from industry & academia!",
      get registeration() {
        return isRegistrationOpen("18/7/2025", "7:30 pm");
      },
      registerationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeCeAzi_wN8gMCQCszpqb5aElRVG8sT1RXD1EIeDtrlBpc9LQ/viewform",
    },
    {
      Eventimage: E3image,
      Eventdate: "8th April 2025",
      medium: "Google meet",
      time: "7:00pm - 8:00pm",
      title:
        "Debug Dialouges with Ahmed Abid | An interactive session where we bring insiring minds from the tech world to your screen!",
      get registeration() {
        return isRegistrationOpen("18/7/2025", "7:30 pm");
      },
    },
  ],
  past: [
    ,
    {
      Eventimage: E2image,
      Eventdate: "12th October 2024",
      medium: "CSE Lab 2",
      time: "4:00pm - 5:00pm",
      title:
        "Weekly Problem Solving Coding Session | A dynamic,hands-on experience where you can learn,solve and grow together",
      registeration: false,
    },
    {
      Eventimage: P7image,
      Eventdate: "20th Sep 2024",
      medium: "BKB Seminar Hall",
      time: "4:00pm - 5:30pm",
      title:
        "Orientation Program of Coding Club CITK | Join us and be a part of a vibrant community that codes ,creates and collaborates!",
      registeration: false,
    },
    {
      registeration: false,
      Eventimage: P3image,
      Eventdate: "4th week January, 2023",
      medium: "Online",
      time: "07:00 PM - 08:30 PM",
      title:
        "An exclusive live webinar on Data Structures and Algorithms, presented by a seasoned expert from GeeksforGeeks.",
    },
    {
      registeration: false,
      Eventimage: P5image,
      Eventdate: "5th & 6th Nov 2022",
      medium: "Offline",
      time: "10:00 AM onwards",
      title:
        "An immersive hands-on Python programming workshop led by an Amazon SDE, designed to build foundational and advanced skills.",
    },

    {
      registeration: false,
      Eventimage: P6image,
      Eventdate: "4 November 2022",
      medium: "Online",
      time: "05:20 PM - 6:30 PM",
      title:
        "Explore modern web development in this insightful webinar series with Dr. Amit Datta, a Senior Architect from Cognizant.",
    },

    {
      registeration: false,
      Eventimage: P1image,
      Eventdate: "from 30th April, 2022",
      medium: "Offline",
      time: "1:00 PM - 3:00 PM",
      title:
        "A comprehensive 36-hour bootcamp covering all fundamental concepts of the C programming language from scratch for beginners.",
    },
    {
      registeration: false,
      Eventimage: P4image,
      Eventdate: "20th September, 2022",
      medium: "Google meet",
      time: "10:30 AM - 12:30 PM",
      title:
        "A welcoming introductory session for new members on 'Getting Started with Coding,' covering the essential first steps.",
    },

    {
      registeration: false,
      Eventimage: P2image,
      Eventdate: "16th September, 2022",
      medium: "BKB Seminar Hall",
      time: "4:00 PM onwards",
      title:
        "The official orientation cum joining session for the new 2022 batch to introduce them to the Coding Club.",
    },
  ],
};

export default event;
