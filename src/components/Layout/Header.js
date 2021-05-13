import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderButtonCart from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>YourMeals</h1>
        <HeaderButtonCart />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Delecious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
