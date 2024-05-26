import React, { useState } from "react";

const FeedbackForm = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);
    formData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Thank you for your feedback!');
        setMessage('');
        setEmail('');
      } else {
        setStatus('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      setStatus('An error occurred while sending feedback. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Got a Minute? Share Your Feedback!</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default FeedbackForm;
