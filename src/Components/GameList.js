import React from "react";
import Game from "./Game";
import FavoritesList from "./FavoritesList";
// import styles from './css.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      isRated: false,
    };
  }
  handleRate = () => {
    this.setState({ isRated: !this.state.isRated });
  };

  handleFav = (game) => {
    this.setState((prevState) => ({
      favorites: prevState.favorites.includes(game)
        ? prevState.favorites.filter((favory) => favory !== game)
        : [...prevState.favorites, game],
    }));
  };

  componentDidMount() {
    this.props.getGames();
  }

  render() {
    const { games } = this.props;
    return (
      <>
        <div>
          <Container>
            <div>
              <Button
                onClick={this.handleRate}
                variant="outline-info"
                size="lg"
              >
                {this.state.isRated ? "All Games" : "Best ratings"}
              </Button>
            </div>
            {this.state.favorites.length > 0 && (
              <FavoritesList favorites={this.state.favorites} />
            )}
            {games &&
              games
                .filter((game) => !this.state.isRated || game.rating > "4.5")
                .map((game) => (
                  <Game
                    key={game.id}
                    game={game}
                    favorites={this.state.favorites}
                    handleFav={this.handleFav}
                  />
                ))}
          </Container>
        </div>
      </>
    );
  }
}

export default GameList;
