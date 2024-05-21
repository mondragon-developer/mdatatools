import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm";
// import Chat from "./Chat";

class Home extends Component {
    render() {
        return(
            <div><p>Looking for a data science or math tool for your class? I have you covered!</p>
            <section className="feedback-section">
            <FeedbackForm />
            </section>
            {/* <Chat /> */}
            </div>
        );
    }
}
export default Home;
