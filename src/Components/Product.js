import React from "react";
import Data from "../Data"
import { Link } from "react-router-dom";
import "../pagescss/Product.css"

const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card my-2 py-4 card-product  " style={{ width: "18rem" }} key={item.id}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">Price: {item.price} $</p>
          <Link to={`/product/${item.id}`} className="btn btn-outline-dark">
            BUY NOW
          
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mb-3 py-5">
        <div className="row">
          <div className="col-12 text-center mt-2">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container  ">
        <div className="row justify-content-around  ">{Data.map(cardItem)}</div>
      </div>
    </>
  );
};

export default Product;
