import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Card from "./components/Card.js";
import FollowerCards from "./components/FollowerCards.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      javavick: {},
      followers: []
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

    axios
      .get("https://api.github.com/users/javavick/followers")
      .then((response) => {
        console.log(response);
        response["data"].map((item) => {
          axios
            .get(item["url"])
            .then((response) => {
              this.setState({
                followers: [...this.state["followers"], response["data"]]
              });
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Div>
        <Card key={0} user={this.state["javavick"]} />
        <FollowerCards followers={this.state["followers"]} />
      </Div>
    );
  }
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: gray;
`;

export default App;
