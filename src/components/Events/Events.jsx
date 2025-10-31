import { useState, useEffect } from "react";
import EventCard from "../EventCard/EventCard.jsx";
import "./events.css";
import event from "./eventData.jsx";
import EventPlaceHolder from "../../assets/PlaceHolder/img-placeholder.avif";

function Events() {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <section className="event-section">
      <div className="event-section-inner">
        <h1 data-aos="zoom-out-down" data-aos-duration="500">
          EVENTS & WORKSHOPS
        </h1>
        <p data-aos="zoom-in-down" data-aos-duration="800">
          Coding is all about practice and dedication towards learning new
          things. We organise various seminars, workshops, bootcamps, etc to
          help students to get more exposure into various domains of
          programming.
        </p>
        <div
          className="toggle-wrapper"
          data-aos="zoom-in-right"
          data-aos-duration="800"
        >
          <button
            className={`toggle-button ${
              activeTab === "recent" ? "active" : ""
            } `}
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
        <div className="event-container">
          {event[activeTab].map((ev, idx) => (
            <EventCard
              key={activeTab + "-" + idx}
              {...ev}
              EventPlaceHolder={EventPlaceHolder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Events;
