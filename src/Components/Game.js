import React from "react";
import styles from "./css.module.css";
import { Button, Card } from "react-bootstrap";
import { Rating } from "@material-ui/lab";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }
  FavChoice = () => {
    const newChoice = !this.state.isFavorite;
    this.setState({ isFavorite: newChoice });
  };

  render() {
    const { game, handleFav } = this.props;
    return (
      <div className={styles.card}>
        <Card>
          <Card.Img
            className={styles.cardImg}
            variant="top"
            src={game.background_image}
            alt={game.slug}
          />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>
              <Rating name="read-only" value={game.rating} readOnly />(
              {game.rating})
            </Card.Text>
            <Button
              variant={this.state.isFavorite ? "danger" : "outline-danger"}
              onClick={() => {
                this.FavChoice();
                handleFav(game);
              }}
            >
              ❤️
            </Button>{" "}
            <Button variant="outline-secondary">🗑️</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Game;
