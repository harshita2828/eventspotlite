import React from "react";
import EventCard from "../Eventcard/Eventcard";
import "../Eventcard/Eventcard.css";
import "./Eventlisting.css";

const EventListing = ({ events, onEventClick }) => {
  return (
    <div className="event-listing">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onClick={() => onEventClick(event)}
        />
      ))}
    </div>
  );
};

export default EventListing;
