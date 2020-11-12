import React, { Component } from "react";
import Cardd from "./components/Cardd";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Dogs from "./Dogs.json";

  shuffleArray = Dogs => {
    for (let i = Dogs.length - 1; i> 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [Dogs[i], Dogs[j]] = [Dogs[j], Dogs[i]];
    }
    return (Dogs);
  }
  class App extends Component {
    // Setting this.state.Dogs to the Dogs json array
    state = {
      Dogs: Dogs
    };
  state = {
    Dogs,
    score: 0,
    topScore: 0,
    clickedDogs: []
  };

  clickedImage = id => {
    let clickedDogs = this.state.clickedDogs;
    let score = this.state.score;
    let topScore = this.state.topScore;

    if (clickedDogs.indexOf(id) === 0) {
      clickedDogs.push(id);
      this.handleIncrement();
      this.Dogshuffle();
    } else if (this.state.score === 6) {
      alert("make your loudest bark")
      this.setState({
        score: 0,
        clickedDogs: []
      });
    } else {
      this.setState({
        score: 0,
        clickedDogs: []
      });
      alert("you bark at the same dog smh")
    }

    if (score > topScore) {
      topScore = score;
      this.setState({ topScore })
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + -1 });
  }

  shuffleArray = () => {
    this.setState({ Dogs: shuffleArray(Dogs) })
  };

  shuffleArray = Dogs => {
    for (let i = Dogs.length - 1; i> 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [Dogs[i], Dogs[j]] = [Dogs[j], Dogs[i]];
    }
    return (Dogs);

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
