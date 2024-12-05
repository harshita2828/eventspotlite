import React, { useState } from "react";
import events from "../data/events";
import EventCard from "../components/Eventcard/Eventcard";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-page">
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

export default HomePage;
