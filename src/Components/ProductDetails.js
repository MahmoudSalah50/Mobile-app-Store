import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";
import "../pagescss/Productdetails.css";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetails = () => {
  const params = useParams();
  const ProDetail = Data.filter((x) => x.id === params.id);
  const product = ProDetail.length > 0 ? ProDetail[0] : {};
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  const dispatch = useDispatch();

  const handleCart = () => {
    if (cartBtn === "Add To Cart") {
      setCartBtn("Remove From Cart");
      dispatch(addItem(product));
    } else {
      setCartBtn("Add To Cart");
      dispatch(delItem(product));
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product mt-5">
            {product.img && (
              <img
                src={product.img}
                alt={product.title}
                height="400px"
                width="400px"
              />
            )}
          </div>
          <div className="col-md-6 d-flex justify-content-center flex-column">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">{product.price}$</h2>
            <p className="lead">{product.desc}</p>
            <button
              className="btn btn-outline-dark w-100 my-3"
              onClick={handleCart}
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
