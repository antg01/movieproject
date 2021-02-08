import styles from "./css.module.css";

const FavoritesList = ({ favorites }) => (
  <div className="jumbotron jumbotron-fluid">
    <h2>Your Choice : </h2>
    <div className="container">
      {favorites.map((game) => (
        <img
          className={styles.card2}
          key={`${game.id}-game`}
          src={game.background_image}
          alt={game.name}
        />
        // <h5> - {game.name}</h5>
      ))}
    </div>
  </div>
);

export default FavoritesList;
