import React, { useState } from 'react';
import './App.css';

function App() {
  const [event, setEvent] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState('');
  const [summary, setSummary] = useState({});

  const handleSubmit = async () => {
    const response = await fetch("https://college-feedback-backend.onrender.com/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedback,
        rating,
      }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
      />
      <br />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
