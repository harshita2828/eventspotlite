import React, { useState } from "react";
import events from "../data/events"; // Import events data
import EventCard from "../components/Eventcard/Eventcard";

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on search query (event name or location)
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="events-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1>EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search events"
          className="search-input"
          value={searchQuery}
          onChange={handleSearch}
        />
      </nav>

      {/* Event Listing */}
      <div className="event-listing">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
