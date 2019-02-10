import React, { Component } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <h1>SocialCard</h1>
          </nav>
        </header>
        <SocialCard data={this.state.data} />
      </div>
    );
  }

  componentDidMount() {
    // Fetch data from the json file.
    fetch("./data.json")
      .then(resp => resp.json())
      .then(data => this.setState({ data }));
  }
}

export default App;
