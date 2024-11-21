import React from 'react';
import { useLocation } from 'react-router-dom';
import "./response.css";

const Response: React.FC = () => {
  const location = useLocation();
  const { recipes }: { recipes: { strMeal: string; strMealThumb: string }[] } = location.state || { recipes: [] };

  return (
    <>
      <nav className="navbar is-black is-fixed-top">
        <div className="navbar-brand">
          <a href="/" className="navbar-item has-text-white is-size-5">
            Chef Knows Best
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <a href="/about" className="navbar-item has-text-white is-size-5">
              About
            </a>
            <a href="/contact" className="navbar-item has-text-white is-size-5">
              Contact Us
            </a>
            <a href="/questions" className="navbar-item has-text-white is-size-5 suggest-link">
              Suggest
            </a>
          </div>
        </div>
      </nav>

      <div className="resultSection">
        <h1 className="responseHeader">Featured Recipes</h1>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div className="card" key={index}>
              <header className="card-header">
                <p className="card-header-title">{recipe.strMeal}</p>
              </header>
              <div className="card-content">
                <div className="content">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </>
  );
};

export default Response;
