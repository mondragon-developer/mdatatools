import React, { useState } from "react";
import { createInteraction } from "./apiService";
import { jsPDF } from "jspdf";

const TestForm = () => {
  const [userId, setUserId] = useState("");
  const [questions, setQuestions] = useState({
    name: "",
    question1a: "",
    question1b: "",
    question1c: "",
    question2a: "",
    question2b: "",
    question2c: "",
    question3a: "",
    question3b: "",
    question3c: "",
    question4a: "",
    question4b: "",
    question4c: "",
    question5a: "",
    question5b: "",
    question5c: "",
  });
  const [openedWebsites, setOpenedWebsites] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestions({ ...questions, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const interactionData = {
      user_id: userId,
      ...questions,
      opened_websites: openedWebsites,
    };
    try {
      const interaction = await createInteraction(interactionData);
      console.log("Interaction created:", interaction);

      // Generate PDF
      const doc = new jsPDF();
      doc.text("Test Results", 10, 10);
      doc.text(`User ID: ${userId}`, 10, 20);
      Object.keys(questions).forEach((key, index) => {
        doc.text(`${key}: ${questions[key]}`, 10, 30 + index * 10);
      });
      doc.text(
        `Opened Websites: ${openedWebsites}`,
        10,
        30 + Object.keys(questions).length * 10
      );
      doc.save("test-results.pdf");
    } catch (error) {
      console.error("Error creating interaction", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="test-form">
      <div className="form-group">
        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={questions.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
      </div>

      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="question-block">
          <h3>Question {num}</h3>
          <div className="form-group">
            <label htmlFor={`question${num}a`}>Question {num}a</label>
            <input
              type="text"
              id={`question${num}a`}
              name={`question${num}a`}
              value={questions[`question${num}a`]}
              onChange={handleChange}
              placeholder={`Question ${num}a`}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`question${num}b`}>Question {num}b</label>
            <input
              type="text"
              id={`question${num}b`}
              name={`question${num}b`}
              value={questions[`question${num}b`]}
              onChange={handleChange}
              placeholder={`Question ${num}b`}
            />
          </div>
          <div className="form-group">
            <label htmlFor={`question${num}c`}>Question {num}c</label>
            <input
              type="text"
              id={`question${num}c`}
              name={`question${num}c`}
              value={questions[`question${num}c`]}
              onChange={handleChange}
              placeholder={`Question ${num}c`}
            />
          </div>
        </div>
      ))}

      <div className="form-group">
        <label htmlFor="openedWebsites">Opened Websites</label>
        <input
          type="text"
          id="openedWebsites"
          value={openedWebsites}
          onChange={(e) => setOpenedWebsites(e.target.value)}
          placeholder="Opened Websites"
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default TestForm;
