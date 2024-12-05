import React from "react";
import "./Eventcard.css";

const EventCard = ({ event, onClick }) => {
  if (!event) {
    return null;
  }

  return (
    <div className="event-card" onClick={onClick}>
      {" "}
      {}
      <p className="event-name">{event.name}</p> {}
      <p className="event-date">{event.date}</p>
      <p className="event-location">{event.location}</p>
    </div>
  );
};

export default EventCard;
