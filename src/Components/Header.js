import React from "react";
import styles from "./css.module.css";

const Header = ({ title }) => {
  return (
    <div className={styles.head}>
      <h1>Welcome to {title}</h1>
    </div>
  );
};
export default Header;
