// CartBtn.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const state = useSelector((state) => state.addItems);

  return (
    <Link to="/cart" className="btn btn-outline-dark ms-2">
      <span className="fa fa-shopping-cart me-1">Cart ({state.length})</span>
    </Link>
  );
};

export default CartBtn;
