import React from "react";

class TestButton extends React.Component {
  openTestWindow = () => {
    const testWindow = window.open(
      `${window.location.origin}/test`,
      "TestWindow",
      "width=800,height=600"
    );
    // Optionally, set up a listener for messages from the test window
    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin) {
        return;
      }
      console.log(event.data);
    });
  };

  render() {
    return (
      <div className="test-button-container">
        <h2>If you are taking a test</h2>
        <button className="test-button" onClick={this.openTestWindow}>
          Start Test
        </button>
      </div>
    );
  }
}

export default TestButton;
