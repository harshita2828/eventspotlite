import React, { useState } from "react";
import './Signup.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sign-up logic
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
    } else if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage("Sign-up successful! You can now log in.");
      console.log("User data submitted:", formData);
    }
  };

  return (
    <div className="signup-page">

      {/* Sign-Up Form */}
      <div className="signup-form-container">
        <h2>Create Your Account</h2>
        <p>Join us and start your journey today.</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {/* Success Message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
