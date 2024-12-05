import React, { useState } from "react";
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    setSuccessMessage("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <div className="contact-page">

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>We’d Love to Hear From You!</h2>
        <p>Fill out the form below and we’ll get in touch with you shortly.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>Message:
            <textarea
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        {/* Success Message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
