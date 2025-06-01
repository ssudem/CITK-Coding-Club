import "./eventCard.css";

import Image from "../Image/Image.jsx";
import EventPlaceHolder from "../../assets/PlaceHolder/img-placeholder.avif";

const EventCard = (event) => {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <Image
          className="event-image"
          src={event.Eventimage}
          placeholder={EventPlaceHolder}
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
        <h3 className="event-title">{event.title}</h3>

        {event.registeration ? (
          <a
            className="event-button-register"
            href={event.registerationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register here
          </a>
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
