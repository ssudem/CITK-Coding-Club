import "./eventCard.css";
// import ImageEvent from "../../assets/EventImg/E1.jpeg"; // Make sure this path is correct

// const event = {
//   registeration: true,
//   registerationLink: "https://www.google.com",
//   Eventimage: ImageEvent,
//   Eventdate: "8th April 2025",
//   medium: "Google meet",
//   time: "7:00pm - 8:00 pm",
//   title:
//     "Debug Dialouges with Ahmed Abid | An interactive session where we bring insiring minds from the tech world to your screen!",
// };

const EventCard = (event) => {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={event.Eventimage} alt="Event" className="event-image" />
        <div className="event-date">{event.Eventdate}</div>
      </div>
      <div className="event-content">
        <div className="event-meta">
          <span>📍 {event.medium}</span>
          <span>⏰ {event.time}</span>
        </div>
        <h3 className="event-title">{event.title}</h3>

        {event.registeration ? (
          <button className="event-button-register">
            <a href={event.registerationLink} target="_blank">
              Register here
            </a>
          </button>
        ) : (
          <button className="event-button-registerclosed">
            Resgistration Closed
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
