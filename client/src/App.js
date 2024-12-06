import React, { useState, useEffect } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import fetchEvents from "./services/dataService";
import EventListing from "./components/Eventlisting/Eventlisting";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/Aboutus";

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
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <p className="esl">EventSpot Lite</p>
                <p className="text-center">Discover Local Events</p>
                <EventListing events={events} onEventClick={openModal} />
                {selectedEvent && (
                  <Modal
                    isOpen={isModalOpen}
                    event={selectedEvent}
                    onClose={closeModal}
                  />
                )}
              </>
            }
          />
          {/* Events Page Route */}
          <Route
            path="/events"
            element={
              <>
                <p className="esl">EventSpot Lite - Events Page</p>
                <p className="text-center">Discover Local Events</p>
                <EventListing events={events} onEventClick={openModal} />
                {selectedEvent && (
                  <Modal
                    isOpen={isModalOpen}
                    event={selectedEvent}
                    onClose={closeModal}
                  />
                )}
              </>
            }
          />
          {/* Contact Page Route */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        
      </div>
      <Footer/>
    </div>
  );
};

export default App;
