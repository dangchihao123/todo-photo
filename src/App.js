import React, { Component } from "react";
import Puture from "./components/Puture";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div>
        <Puture />
        <Search />
      </div>
    );
  }
}

export default App;
