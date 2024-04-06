import { useState } from "react";
import makeASalad from "./salad";
import "./App.css";

function App() {
  const [salad, setSalad] = useState([]);

  return (
    <>
      <h1>Make a Salad</h1>
      <div className="card">
        <button onClick={() => setSalad(makeASalad())}>Make a Salad!</button>
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

export default App;
