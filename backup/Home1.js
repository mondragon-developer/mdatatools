import React, { Component } from "react";
import FeedbackForm from "./FeedbackForm";

class Home extends Component {
    render() {
        return(
            <div><p>Looking for a data science or math tool for your class? I have you covered!</p>
            <section className="feedback-section">
            <FeedbackForm />
            </section>
            </div>
        );
    }
}
export default Home;