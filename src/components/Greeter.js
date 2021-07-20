import React, {Component} from 'react';

class Greeter extends Component {
  render() {
    return (
      <h2>Greetings! {this.props.name}!</h2>
    )
  }
}

export default Greeter;
