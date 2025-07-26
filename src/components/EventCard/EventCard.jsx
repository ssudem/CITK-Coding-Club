import "./eventCard.css";

import Image from "../Image/Image.jsx";

const EventCard = (event) => {
  const isMobileView = window.innerWidth <= 768; // Check if the view is mobile
  return (
    <div
      className="event-card"
      data-aos={isMobileView ? "fade-in" : "zoom-in-up"}
      data-aos-duration={isMobileView ? "800" : "500"}
    >
      <div className="event-image-container">
        <Image
          className="event-image"
          src={event.Eventimage}
          placeholder={event.EventPlaceHolder}
          alt="Event"
          lazy={true}
        />
        <div className="event-date">{event.Eventdate}</div>
      </div>
      <div className="event-content">
        <div className="event-meta">
          <span>📍 {event.medium}</span>
          <span>⏰ {event.time}</span>
        </div>

        <p className="event-title">{event.title}</p>

        {event.registeration ? (
          <button className="event-button-register">
            <a
              href={event.registerationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register here
            </a>
          </button>
        ) : (
          <button className="event-button-registerclosed" disabled>
            Registration Closed
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
