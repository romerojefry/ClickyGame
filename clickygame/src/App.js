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

  shuffleArray = Dogs => {
    for (let i = Dogslength - 1; i> 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [Dogs[i], Dogs[j]] = [Dogs[j], Dogs[i]];
    }
    return (Dogs);
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
