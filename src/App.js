import React from "react";
// import './App.css';
import axios from "axios";
import Header from "./Components/Header";
import GameList from "./Components/GameList";
// import styles from './Components/css.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dudeism",
      games: [],
    };
  }

  getGames = () => {
    axios.get("https://apis.wilders.dev/wild-games/games/").then(({ data }) =>
      this.setState({
        games: data,
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <GameList getGames={this.getGames} games={this.state.games} />
      </div>
    );
  }
}

export default App;
