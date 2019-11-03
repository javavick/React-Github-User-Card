import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      javavick: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/javavick")
      .then((response) => {
        console.log(response);
        this.setState({ javavick: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Card user={this.state["javavick"]} />
      </div>
    );
  }
}

export default App;
