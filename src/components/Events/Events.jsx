import { useState } from "react";
import EventCard from "../EventCard/EventCard.jsx";
import "./events.css";
import event from "./eventData.jsx";

function Events() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <section className="event-section container">
      <h1>EVENTS & WORKSHOPS</h1>
      <p>
        Coding is all about practice and dedication towards learning new things.
        We organise various seminars, workshops, bootcamps, etc to help students
        to get more exposure into various domains of programming.
      </p>

      <div className="toggle-wrapper">
        <button
          className={`toggle-button ${activeTab === "recent" ? "active" : ""} `}
          onClick={() => setActiveTab("recent")}
        >
          Recent Events
        </button>
        <button
          className={`toggle-button ${activeTab === "past" ? "active" : ""}`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div>

      {/* <div>
        <button
          className={activeTab === "recent" ? "active" : ""}
          onClick={() => setActiveTab("recent")}
        >
          Recent Events
        </button>
        <button
          className={activeTab === "past" ? "active" : ""}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div> */}

      <div className="event-container">
        {event[activeTab].map((ev, idx) => (
          <EventCard key={idx} {...ev} />
        ))}
      </div>
    </section>
  );
}
export default Events;
