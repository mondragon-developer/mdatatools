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
    render() {
        const { currentUser } = this.state;
        return(
            <div>
            {!this.state.currentUser ? (
          <UserForm onUserCreated={this.handleUserCreated} />
        ) : (
          <TestForm userId={currentUser._id} />
        )}
            </div>
        );
    }
}
export default Test;
