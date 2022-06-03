import React from "react";
import "./Product.css";
import book from "../icons/book.png";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(<p>⭐️</p>)
          }
        </div>
      </div>
      <img src={book} alt="book" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
