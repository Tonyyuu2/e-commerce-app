import React from "react";
import "./Home.css";
import backdrop from "../icons/backdrop.png";
import Product from "./Product";
import book from "../icons/book.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={backdrop} className="home__image" alt="backdrop" />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image={book}
            rating={5}
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
