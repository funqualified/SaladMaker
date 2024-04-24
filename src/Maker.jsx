import { useState } from "react";
import makeASalad from "./salad";
import "./App.css";
import { Button } from "@mui/joy";

function Maker(props) {
  const [salad, setSalad] = useState([]);

  return (
    <>
      <h2>Make a Salad</h2>
      <div className="card">
        <Button
          onClick={() =>
            setSalad(
              makeASalad("", {
                base: 1,
                topping: 3,
                dressing: 1,
                excludedIngredients: props.saladRules.excludedIngredients,
                saladProfile: props.saladRules.saladProfile,
              })
            )
          }>
          Make a Salad!
        </Button>
        {salad.length > 0 && <p>Your salad ingredients are:</p>}
        <ul>
          {salad.map((ingredient, index) => (
            <li
              style={{ color: ingredient.type == "base" ? "green" : ingredient.type == "topping" ? "red" : ingredient.type == "dressing" ? "orange" : "white" }}
              key={index}>
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Maker;
