import { Link } from "react-router-dom";
import { useState } from "react";
import "./questions.css";

interface Ingredient {
  name: string;
}

export default function Questions() {
  const [ingreList, setIngreList] = useState<Ingredient[]>([]);
  const [ingredient, setIngredient] = useState("");

  const addIngredient = () => {
    if (ingredient != "") {
      const newIngredient: Ingredient = { name: ingredient };
      setIngreList((oldList) => [...oldList, newIngredient]);
      setIngredient("");
    }
  };

  const removeIndgredient = (indexVal: number) => {
    // console.log(ingreList);
    const newList = [...ingreList];
    newList.splice(indexVal, 1);
    setIngreList(newList);
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
          <Link to="/response">
            <button className="button is-danger is-dark">Submit!</button>
          </Link>
        </div>
      </div>
    </>
  );
}
