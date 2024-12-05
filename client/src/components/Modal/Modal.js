import React, { useEffect, useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, event }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setFadeOut(false);
    } else {
      setFadeOut(true);
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;
  return (
    <div className={`modal-overlay ${fadeOut ? 'fade-out' : 'fade-in'}`} onClick={onClose}>
      <div className={`modal-container ${fadeOut ? 'slide-out' : 'slide-in'}`} onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        {event.image && <img src={event.image} alt={event.name} className="modal-image" />}
      </div>
    </div>
  );
};

export default Modal;
