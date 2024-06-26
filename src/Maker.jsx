import { useState } from "react";
import makeASalad from "./salad";
import "./App.css";
import { Button } from "@mui/joy";
import { Input } from "@mui/joy";

function Maker(props) {
  const [salad, setSalad] = useState([]);
  const [rules, setRules] = useState({ base: 1, topping: 3, dressing: 1 });
  const [saladSaved, setSaladSaved] = useState(false);

  const saveCurrentSalad = (salad) => {
    const saladBasic = salad.map((ingredient) => {
      return { name: ingredient.name, type: ingredient.type };
    });
    props.sendSalad({
      type: "salad",
      data: saladBasic,
    });

    var rules = props.saladRules;
    rules.favoriteSalads.push(saladBasic);
    props.setSaladRules(rules);
    setSaladSaved(true);
  };

  return (
    <>
      <h1>Make a Salad</h1>

      <div className="card">
        <div className="card-body">
          <h2>Minimums</h2>
          Bases
          <Input
            value={rules.base}
            onChange={(event) => setRules({ ...rules, base: event.target.value })}
            slotProps={{
              input: {
                min: 1,
                max: 3,
                step: 1,
                type: "number",
              },
            }}
          />
          Toppings
          <Input
            value={rules.topping}
            onChange={(event) => setRules({ ...rules, topping: event.target.value })}
            slotProps={{
              input: {
                min: 1,
                max: 10,
                step: 1,
                type: "number",
              },
            }}
          />
          Dressings
          <Input
            value={rules.dressing}
            onChange={(event) => setRules({ ...rules, dressing: event.target.value })}
            slotProps={{
              input: {
                min: 1,
                max: 5,
                step: 1,
                type: "number",
              },
            }}
          />
        </div>
        <br />
        <div className="card-body">
          <Button
            onClick={() => {
              setSalad(makeASalad("", { ...rules, ...props.saladRules }));
              setSaladSaved(false);
            }}>
            Make a Salad!
          </Button>
          {salad.length > 0 && <p>Your salad ingredients are:</p>}
          <ul>
            {salad.map((ingredient, index) => (
              <li
                style={{
                  color: ingredient.type == "base" ? "green" : ingredient.type == "topping" ? "red" : ingredient.type == "dressing" ? "orange" : "white",
                }}
                key={index}>
                {ingredient.name}
              </li>
            ))}
          </ul>
          {salad.length > 0 && (
            <Button disabled={saladSaved} onClick={() => saveCurrentSalad(salad)}>
              Save Salad
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Maker;
