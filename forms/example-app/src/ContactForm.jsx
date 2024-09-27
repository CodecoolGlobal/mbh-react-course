import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }

    if (!email || !isValidEmail(email)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }

    if (!message) {
      setMessageError('Please enter a message');
    } else {
      setMessageError('');
    }

    // If there are no errors, submit the form
    if (!nameError && !emailError && !messageError) {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', { name, email, message });
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p>{nameError}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {messageError && <p>{messageError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;