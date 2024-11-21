import "./home.css";
import lasagna from "../../assets/lasagna.jpg";
import shrimp from "../../assets/shrimpScampi.jpeg";
import alaVodka from "../../assets/penneAllaVodka.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const sampleRecipes = [
  {
    image: lasagna,
    title: "Lasagna",
    ingredients: "Tomato, Cheese",
  },
  {
    image: shrimp,
    title: "Shrimp Scampi",
    ingredients: "Shrimp, Pasta",
  },
  {
    image: alaVodka,
    title: "Penne Ala Vodka",
    ingredients: "Vodka, Pasta",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  const nextRecipe = () => {
    setSlide(slide < sampleRecipes.length - 1 ? slide + 1 : 0);
  };

  const prevRecipe = () => {
    setSlide(slide > 0 ? slide - 1 : sampleRecipes.length - 1);
  };

  const selectedRecipe = sampleRecipes[slide];

  return (
    <>
      <nav className="navbar is-black is-fixed-top">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item has-text-white is-size-5">
            Chef Knows Best
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/about" className="navbar-item has-text-white is-size-5">
              About
            </Link>
            <Link
              to="/contact"
              className="navbar-item has-text-white is-size-5"
            >
              Contact Us
            </Link>
            <Link
              to="/questions"
              className="navbar-item has-text-white is-size-5 suggest-link"
            >
              Suggest
            </Link>
          </div>
        </div>
      </nav>

      <h1 className="WeekHeader">Most Used Recipes This Week</h1>

      <div className="recipe-section">
        <img
          src={selectedRecipe.image}
          alt="recipe"
          className="recipe-background"
        />

        <div className="recipe-container">
          <h2 className="title is-3">{selectedRecipe.title}</h2>
          <p>Ingredients: {selectedRecipe.ingredients}</p>

          <button className="arrow left-arrow" onClick={prevRecipe}>
            {" "}
            &#10094;
          </button>
          <button className="arrow right-arrow" onClick={nextRecipe}>
            {" "}
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
}
