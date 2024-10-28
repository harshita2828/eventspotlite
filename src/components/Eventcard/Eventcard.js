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
      <h3 className="event-name">{event.name}</h3> {}
      <p className="event-date">{event.date}</p>
      <p className="event-location">{event.location}</p>
    </div>
  );
};

export default EventCard;
