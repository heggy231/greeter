import React, {Component} from "react";
import Greeter from "./components/Greeter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Greeter name="Sweetie" />
      </div>
    );
  }
}

export default App;
