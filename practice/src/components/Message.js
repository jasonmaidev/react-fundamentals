import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Visitor'
    }
  }

  welcomeUser() {
    this.setState({ message: 'Welcome User!' })
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={() => this.welcomeUser()}>
          Subscribe
        </button>
      </div>
    )
  }
}

export default Message;