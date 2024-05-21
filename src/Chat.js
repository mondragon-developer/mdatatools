import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/chat', { message });
      setResponse(res.data.choices[0].message.content);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to fetch response')
    }
  };

  return (
    <div>
      <h2>Chat with GPT-3.5</h2>
      <input
        type="text"
        value={ message }
        onChange={(e) => setMessage(e.target.value)}
       />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        <h3>Response:</h3>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
