import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.addItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>
          <img
            src={item.img}
            alt={item.title}
            style={{ width: "80px", height: "70px" }}
          />
        </td>
        <td>{item.price}$</td>
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleRemove(item)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
      {state.length > 0 ? (
        <div className="container my-3 py-5">
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{state.map(cartItems)}</tbody>
            </table>
          </div>
          <Link to="/checkout" className="btn btn-outline-dark w-100 mt-3">
            Proceed To Checkout
          </Link>
        </div>
      ) : (
        <div className="container my-3 py-5 text-center">
          <h1>Your cart is empty.</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
