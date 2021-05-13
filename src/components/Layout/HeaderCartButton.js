import React from "react";

import "./HeaderCartButton.module.css";
import CardIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderButtonCart = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButtonCart;
