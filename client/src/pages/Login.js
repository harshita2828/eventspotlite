import React, { useState } from "react";
import './Login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic (you would typically make an API call here)
    if (formData.email === "test@example.com" && formData.password === "password") {
      setErrorMessage("");
      // Logic for successful login (e.g., redirect to dashboard)
      console.log("Login successful");
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      

      {/* Login Form */}
      <div className="login-form-container">
        <h2>Welcome Back!</h2>
        <p>Please log in to continue.</p>
        <form className="login-form" onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="submit-button">
            Log In
          </button>
        </form>
        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginPage;