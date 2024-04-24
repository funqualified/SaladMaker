import "./App.css";

import { ingredients } from "./salad";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import CheckIcon from "@mui/icons-material/Check";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";

import { useState, useEffect } from "react";

function Profile(props) {
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    //Set the name and tags
    setName(getName());
    setTags(getSaladTags());
  }, []);

  const getName = () => {
    if (props?.username != "") {
      return props.username;
    }
    const names = [
      "partner",
      "stranger",
      "sir, ma'am, or other",
      "fellow",
      "gal",
      "friend",
      "comrade",
      "salad lover",
      "salad enthusiast",
      "salad connoisseur",
      "salad aficionado",
      "you",
      "human",
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
  };

  const getSaladTags = () => {
    var tags = ingredients.reduce(
      (acc, ingredient) => {
        ingredient.tags.forEach((tag) => {
          if (!acc.tags.includes(tag)) {
            acc.tags.push(tag);
          }
        });
        return acc;
      },
      { tags: ["base", "topping", "dressing"] }
    );

    return tags;
  };

  const handleCheckExcludeIngredient = (event) => {
    if (event.target.checked) {
      props.setSaladRules((rules) => ({ ...rules, excludedIngredients: [...rules.excludedIngredients, event.target.name] }));
    } else {
      props.setSaladRules((rules) => ({ ...rules, excludedIngredients: rules.excludedIngredients.filter((rule) => rule !== event.target.name) }));
    }
  };

  return (
    <>
      <h1>Hello {name}, personalize your salad preferences here!</h1>
      <div className="card">
        <Tabs defaultValue={0}>
          <TabList>
            <Tab>Universal Filters</Tab>
            <Tab>Combo Questions</Tab>
            <Tab>Review the Rules</Tab>
          </TabList>
          <TabPanel value={0}>
            <h3>Universal Filters</h3>
            <p>
              This page allows you to filter out specific ingredients from all your salads. Use the check boxes below to label an ingredient for filtering. Use
              the tags to display specific categories of ingredients.
            </p>
            <Box role="group" aria-label="filters" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {getSaladTags().tags.map((tag, index) => {
                const checked = selected.includes(tag);
                return (
                  <Chip
                    key={tag}
                    variant="plain"
                    color={checked ? "primary" : "neutral"}
                    startDecorator={checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />}>
                    <Checkbox
                      variant="outlined"
                      color={checked ? "primary" : "neutral"}
                      disableIcon
                      overlay
                      label={tag}
                      checked={checked}
                      onChange={(event) => {
                        setSelected((tags) => (!event.target.checked ? tags.filter((n) => n !== tag) : [...tags, tag]));
                      }}
                    />
                  </Chip>
                );
              })}
            </Box>
            <ul style={{ textAlign: "left" }}>
              {ingredients
                .filter((ingredient) => selected.length === 0 || ingredient.tags.some((tag) => selected.includes(tag)))
                .map((ingredient, index) => (
                  <li key={index}>
                    <Checkbox
                      id={ingredient.name}
                      name={ingredient.name}
                      label={ingredient.name}
                      checked={props.saladRules.excludedIngredients.includes(ingredient.name)}
                      onChange={handleCheckExcludeIngredient}
                    />
                  </li>
                ))}
            </ul>
          </TabPanel>
          <TabPanel value={1}>
            <h3>Combo Questions</h3>
            <p>
              Yes? No? Do these ingredients belong together? Answering these questions will improve your salad profile. On a regular basis, all salad profiles
              will be analyzed to improve salad generation for everyone.{" "}
            </p>
            <p>(By the way, salad profiles are stored locally, but logging in will allow you to use it from any device. And keep it safe from being cleared)</p>
            <p>
              <b>TODO:Dynamic ingredients</b> and <b>other ingredient</b>
            </p>
            <Button color="primary" sx={{ margin: "3px" }}>
              Yes
            </Button>
            <Button color="danger" sx={{ margin: "3px" }}>
              No
            </Button>
            <Button color="warning" sx={{ margin: "3px" }}>
              Skip
            </Button>
          </TabPanel>
          <TabPanel value={2}>
            <h3>Review the Rules</h3>
            <p>Here are all the rules currently applied to your salads</p>
            <ul style={{ textAlign: "left" }}>
              {props.saladRules.excludedIngredients.map((rule, index) => (
                <li key={index}>
                  <label htmlFor={rule}>{rule} is excluded</label>
                </li>
              ))}
              {props.saladRules.excludedIngredients.map((rule, index) => (
                <li key={index}>
                  <label>{rule.ingredient} has likes and dislikes</label>
                  {/* TODO: Better display salad profile rules */}
                </li>
              ))}
            </ul>
            <p>You can clear all the rules by pressing the button below. This is irriversable.</p>
            <Button color="danger">Clear all rules TODO:Add functionality</Button>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
