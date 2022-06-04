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
            id="3992342"
            title="The lean startup"
            price={29.99}
            image={book}
            rating={5}
          />
          <Product
            id="3992342"
            title="The lean startup"
            price={29.99}
            image={book}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="39923422"
            title="Samsung LC4938589 49' Curved LED Gaming Monitor"
            price={129.99}
            image={book}
            rating={3}
          />
          <Product
            id="3992342"
            title="The lean startup"
            price={29.99}
            image={book}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3992342"
            title="The lean startup"
            price={29.99}
            image={book}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
