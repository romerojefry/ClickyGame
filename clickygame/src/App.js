import React, { Component } from "react";
import Cardd from "./components/Cardd";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Dogs from "./Dogs.json";

class App extends Component {
  // Setting this.state.Dogs to the Dogs json array
  state = {
    Dogs: Dogs
  };

  removeDogs = id => {
    // Filter this.state.Dogs for Dogs with an id not equal to the id being removed
    const Dogs = this.state.Dogs.filter(Dogs => Dogs.id !== id);
    // Set this.state.Dogs equal to the new Dogs array
    this.setState({ Dogs: Dogs });
  };

  // Map over this.state.Dogs and render a Cardd component for each Dogs object
  render() {
    return (
      <Wrapper>
        <Title>Dogs List</Title>
        {this.state.Dogs.map(Dogs => (
          <Cardd
            id={Dogs.id}
            image={Dogs.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
