import React, { Component } from "react";
import Cardd from "./components/Cardd";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Dogs from "./Dogs.json";

  //shuffleArray = (Dogs) => {
    //for (let i = Dogs.length - 1; i> 0; i--){
      //const j = Math.floor(Math.random() * (i+1));
      //let temp = [Dogs[i], Dogs[j]] = [Dogs[j], Dogs[i]] = temp;
   //}
    //return Dogs;
 //}
  //newState.match = 1 === Math.floor(Math.random() * 5) + 1;
 class App extends Component {
    // Setting this.state.Dogs to the Dogs json array
   
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

    if (clickedDogs.indexOf(id) === -1) {
      clickedDogs.push(id);
      this.handleIncrement();
      const newList = this.shuffleArray(this.state.Dogs);
      this.setState({
        Dogs: newList
      })
    } else if (this.state.score === 6) {
      alert("see how far you can go")
      this.setState({
        score: 0,
        clickedDogs: []
      });
    } else {
      this.setState({
        score: 0,
        clickedDogs: []
      });
      alert("you clicked on the dog smh")
    }

    if (score > topScore) {
      topScore = score;
      this.setState({ topScore })
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
shuffleArray = (Dogs) => {
    for (let i = Dogs.length - 1; i> 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [Dogs[i], Dogs[j]] = [Dogs[j], Dogs[i]];
   }
    return Dogs;
 }

  // Map over this.state.Dogs and render a Cardd component for each Dogs object
  render() {
    return (
      <Wrapper>
        <Title>Dogs List</Title>
        <div>
          <h2>Top Score</h2>
          {this.state.topScore}
        </div>
        <div>
          <h1>Score</h1>
          {this.state.score}
        </div>
        {this.state.Dogs.map(Dogs => (
          <Cardd
            id={Dogs.id}
            image={Dogs.image}
            clickedDogs={this.clickedImage}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
