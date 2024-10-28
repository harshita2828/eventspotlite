import React, { useState, useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import fetchEvents from './services/dataService';
import EventListing from './components/Eventlisting/Eventlisting';

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadEvents = async () => {
    const eventList = await fetchEvents();
    setEvents(eventList);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <p className="esl">EventSpot Lite</p>
        <p className="text-center">Discover Local Events</p>
        <EventListing events={events} onEventClick={openModal} />
        {selectedEvent && (
          <Modal isOpen={isModalOpen} event={selectedEvent} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default App;
