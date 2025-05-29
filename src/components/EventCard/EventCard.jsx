import "./eventCard.css";

const EventCard = (event) => {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <img
          src={event.Eventimage}
          alt="Event"
          loading="lazy"
          className="event-image"
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
