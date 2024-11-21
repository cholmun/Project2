import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./questions.css";

interface Ingredient {
  name: string;
}

export default function Questions() {
  const [ingreList, setIngreList] = useState<Ingredient[]>([]);
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();

  const addIngredient = () => {
    if (ingredient !== "") {
      const newIngredient: Ingredient = { name: ingredient };
      setIngreList((oldList) => [...oldList, newIngredient]);
      setIngredient("");
    }
  };

  const removeIndgredient = (indexVal: number) => {
    const newList = [...ingreList];
    newList.splice(indexVal, 1);
    setIngreList(newList);
  };

  const handleSubmit = async () => {
    const ingredients = ingreList.map((ing) => ing.name).join(",");
    try {
      const response = await fetch(`http://localhost:3001/api/recipes?ingredients=${ingredients}`);
      const data = await response.json();
      navigate("/response", { state: { recipes: data } });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

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
            <Link to="/contact" className="navbar-item has-text-white is-size-5">
              Contact Us
            </Link>
            <Link to="/questions" className="navbar-item has-text-white is-size-5 suggest-link">
              Suggest
            </Link>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="promptSection">
          <h1 className="WeekHeader">Which Ingredients Do You Wish to Use?</h1>
          <input
            className="input is-hovered"
            type="text"
            placeholder="Enter Ingredients Here"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addIngredient();
              }
            }}
          />
          <button onClick={addIngredient} className="button is-danger is-dark">
            Add Item
          </button>
        </div>

        <div className="listSection">
          <h1 className="WeekHeader">Ingredient List:</h1>
          <ul>
            {ingreList.map((ingredient, indexVal) => (
              <li className="listText" key={indexVal}>
                {ingredient.name}
                <button onClick={() => removeIndgredient(indexVal)}>
                  &#10060;
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit} className="button is-danger is-dark">
            Submit!
          </button>
        </div>
      </div>
    </>
  );
}
