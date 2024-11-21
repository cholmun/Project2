import { Link } from "react-router-dom";
import "./response.css";
export default function Response() {
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

      <div className="resultSection">
        <h1 className="responseHeader">Featured Recipes</h1>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Lasagna</p>
          </header>
        </div>
      </div>
    </>
  );
}
