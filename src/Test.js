import React, { Component } from "react";
import UserForm from './UserForm';
import TestForm from './TestForm';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  handleUserCreated = (user) => {
    this.setState({ currentUser: user });
  };

  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.language = "JavaScript";
  //   script.src = "https://na1.documents.adobe.com/public/embeddedWidget?wid=CBFCIBAA3AAABLblqZhBG3XmRNEh7Fp4N_CsU0MPztUMM8PR0ehkvMsX5EC9XuJwvHbJpOBDDvTqM9bpiD60*";
  //   script.async = true;
  //   document.getElementById("adobe-widget-container").appendChild(script);
  // }

  render() {
    const { currentUser } = this.state;
    const testLink = "https://na1.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBG3XmRNEh7Fp4N_CsU0MPztUMM8PR0ehkvMsX5EC9XuJwvHbJpOBDDvTqM9bpiD60*";

    return (
      <div>
        {/* {!currentUser ? (
          <UserForm onUserCreated={this.handleUserCreated} />
        ) : (
          <TestForm userId={currentUser._id} />
        )} */}
        {/* <div id="adobe-widget-container"></div> */}
        <div className="link-container">
          <a href={testLink} className="test-link" target="_blank" rel="noopener noreferrer">
            Submit Answers of your test
          </a>
        </div>
      </div>
    );
  }
}

export default Test;
