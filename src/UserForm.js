import React, { useState } from 'react';

const UserForm = ({ onUserCreated }) => {
  const [fullName, setFullName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ full_name: fullName }),
    });
    const result = await response.json();
    onUserCreated(result);
    setFullName('');
  };

  return (
    <div className="user-form-container">
      <h2>Student Test Registration</h2>
      <p>Please enter your full legal name to register and gain access to your test answers submission form.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;

