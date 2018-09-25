import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Form />

        <Results />
      </div>
    );
  }
}

export default App;
