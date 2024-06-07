import "./App.css";

import ingredients from "./ingredients";

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Checkbox from "@mui/joy/Checkbox";
import Chip from "@mui/joy/Chip";
import CheckIcon from "@mui/icons-material/Check";
import Link from "@mui/joy/Link";

import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DeleteForever from "@mui/icons-material/DeleteForever";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

import { useState, useEffect } from "react";

function Profile(props) {
  const [selectedExclude, setSelectedExclude] = useState([]);
  const [selectedFave, setSelectedFave] = useState([]);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [resetOpen, setResetOpen] = useState(false);
  const [saladDeletionIndex, setSaladDeletionIndex] = useState(-1);

  const ResetProfile = () => {
    props.setSaladRules({ excludedIngredients: [], saladProfile: [] });
    setResetOpen(false);
  };

  //Combo variables
  const [comboIngredients, setComboIngredients] = useState([]);
  const getTwoRandomIngredients = () => {
    const randomIngredients = ingredients
      .filter((ingredient) => props.saladRules.excludedIngredients.includes(ingredient.name) === false)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    return randomIngredients;
  };

  const handleComboAnswer = (answer) => {
    var rules = props.saladRules;
    switch (answer) {
      case "Yes":
        let p1 = addLikesTags(comboIngredients[0], comboIngredients[1].tags, true);
        let p2 = addLikesTags(comboIngredients[1], comboIngredients[0].tags, true);
        rules = {
          ...rules,
          saladProfile: [...rules.saladProfile.filter((profile) => profile.ingredient !== p1.ingredient && profile.ingredient !== p2.ingredient), p1, p2],
        };

        props.sendRule({
          type: "likes",
          data: { ingredient1: comboIngredients[0].name, ingredient2: comboIngredients[1].name },
        });

        break;
      case "No":
        let dislike1 = addLikesTags(comboIngredients[0], comboIngredients[1].tags, false);
        let dislike2 = addLikesTags(comboIngredients[1], comboIngredients[0].tags, false);
        rules = {
          ...rules,
          saladProfile: [
            ...rules.saladProfile.filter((profile) => profile.ingredient !== dislike1.ingredient && profile.ingredient !== dislike2.ingredient),
            dislike1,
            dislike2,
          ],
        };

        props.sendRule({
          type: "dislikes",
          data: { ingredient1: comboIngredients[0].name, ingredient2: comboIngredients[1].name },
        });

        break;
    }
    props.setSaladRules(rules);

    setComboIngredients(getTwoRandomIngredients());
  };

  const addLikesTags = (ingredient, tags, doesLike) => {
    let profile = props.saladRules.saladProfile.find((profile) => profile.ingredient === ingredient.name);

    //If the profile doesn't exist, create it
    if (profile === undefined) {
      profile = { ingredient: ingredient.name, weightAdjustment: 0, likesTags: [], dislikesTags: [] };
    }

    //Modify the profile based on the answer
    tags.forEach((tag) => {
      if (doesLike) {
        if (profile.likesTags.some((like) => like.tag === tag)) {
          profile.likesTags.find((like) => like.tag === tag).weight += 1;
        } else {
          profile.likesTags.push({ tag: tag, weight: 1 });
        }
      } else {
        if (profile.dislikesTags.some((dislike) => dislike.tag === tag)) {
          profile.dislikesTags.find((dislike) => dislike.tag === tag).weight += 1;
        } else {
          profile.dislikesTags.push({ tag: tag, weight: 1 });
        }
      }
    });

    //Return the profile
    return profile;
  };

  useEffect(() => {
    //Set the name and tags
    setName(getName());
    setTags(getSaladTags());
    setComboIngredients(getTwoRandomIngredients());
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
    const tagCounts = ingredients.reduce((acc, ingredient) => {
      ingredient.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {});

    const tags = Object.keys(tagCounts).filter((tag) => tagCounts[tag] > 1);

    return tags;
  };

  const handleCheckExcludeIngredient = (event) => {
    var rules = props.saladRules;
    if (event.target.checked) {
      rules = { ...rules, excludedIngredients: [...rules.excludedIngredients, event.target.name] };

      props.sendRule({
        type: "exclude",
        data: { ingredient: event.target.name },
      });
    } else {
      rules = { ...rules, excludedIngredients: rules.excludedIngredients.filter((rule) => rule !== event.target.name) };
    }
    props.setSaladRules(rules);
  };

  const handleCheckFavoriteIngredient = (event) => {
    var rules = props.saladRules;
    if (event.target.checked) {
      rules = { ...rules, favoriteIngredients: [...rules.favoriteIngredients, event.target.name] };

      props.sendRule({
        type: "favorite",
        data: { ingredient: event.target.name },
      });
    } else {
      rules = { ...rules, favoriteIngredients: rules.favoriteIngredients.filter((rule) => rule !== event.target.name) };
    }
    props.setSaladRules(rules);
  };

  return (
    <>
      <h1>Hello {name}, personalize your salad preferences here!</h1>
      <div className="card">
        <Tabs defaultValue={0}>
          <TabList>
            <Tab>Excluded Ingredients</Tab>
            <Tab>Favorite Ingredients</Tab>
            <Tab>Combo Questions</Tab>
            <Tab>Saved Salads</Tab>
            <Tab>Review the Rules</Tab>
          </TabList>
          <TabPanel value={0}>
            <h3>Excluded Ingredients</h3>
            <p>
              This page allows you to exclude specific ingredients from all your salads. Use the check boxes below to exclude an ingredient. Use the tags to
              filter the display of ingredients.
            </p>
            <Box role="group" aria-label="filters" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {tags.map((tag, index) => {
                const checked = selectedExclude.includes(tag);
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
                        setSelectedExclude((tags) => (!event.target.checked ? tags.filter((n) => n !== tag) : [...tags, tag]));
                      }}
                    />
                  </Chip>
                );
              })}
            </Box>
            <ul style={{ textAlign: "left" }}>
              {ingredients
                .filter((ingredient) => selectedExclude.length === 0 || ingredient.tags.some((tag) => selectedExclude.includes(tag)))
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
            <h3>Favorite Ingredients</h3>
            <p>
              This page allows you to favorite specific ingredients, making them more likely to appear in your salads. Use the check boxes below to favorite an
              ingredient. Use the tags to filter the display of ingredients.
            </p>
            <Box role="group" aria-label="filters" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {tags.map((tag, index) => {
                const checked = selectedFave.includes(tag);
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
                        setSelectedFave((tags) => (!event.target.checked ? tags.filter((n) => n !== tag) : [...tags, tag]));
                      }}
                    />
                  </Chip>
                );
              })}
            </Box>
            <ul style={{ textAlign: "left" }}>
              {ingredients
                .filter((ingredient) => selectedFave.length === 0 || ingredient.tags.some((tag) => selectedFave.includes(tag)))
                .map((ingredient, index) => (
                  <li key={index}>
                    <Checkbox
                      id={ingredient.name}
                      name={ingredient.name}
                      label={ingredient.name}
                      checked={props.saladRules.favoriteIngredients.includes(ingredient.name)}
                      onChange={handleCheckFavoriteIngredient}
                    />
                  </li>
                ))}
            </ul>
          </TabPanel>
          <TabPanel value={2}>
            <h3>Combo Questions</h3>
            <p>
              Yes? No? Do these ingredients belong together? Answering these questions will improve your salad profile. On a regular basis, all salad profiles
              will be analyzed to improve salad generation for everyone.{" "}
            </p>
            {props.username == "" && (
              <p>
                (By the way, salad profiles are stored locally, but{" "}
                <Link href="https://app.funqualified.com/dashboard/login?redirect=https://app.funqualified.com/salad">logging in</Link> will allow you to use it
                from any device. And keep it safe from being cleared)
              </p>
            )}
            <p>
              <b>{comboIngredients?.length == 2 ? comboIngredients[0].name : "X"}</b> and{" "}
              <b>{comboIngredients?.length == 2 ? comboIngredients[1].name : "X"}</b>
            </p>
            <Button color="primary" sx={{ margin: "3px" }} onClick={() => handleComboAnswer("Yes")}>
              Yes
            </Button>
            <Button color="danger" sx={{ margin: "3px" }} onClick={() => handleComboAnswer("No")}>
              No
            </Button>
            <Button color="warning" sx={{ margin: "3px" }} onClick={() => handleComboAnswer("Skip")}>
              Skip
            </Button>
          </TabPanel>
          <TabPanel value={3}>
            <h3>Saved Salads</h3>
            <p>Here are all your saved salads</p>
            {props.saladRules.favoriteSalads && props.saladRules.favoriteSalads.length > 0 ? (
              <ul style={{ textAlign: "left" }}>
                {props.saladRules.favoriteSalads.map((salad, index) => (
                  <li key={index}>
                    <ul>
                      {salad.map((ingredient, index) => (
                        <li
                          style={{
                            color:
                              ingredient.type == "base" ? "green" : ingredient.type == "topping" ? "red" : ingredient.type == "dressing" ? "orange" : "white",
                          }}
                          key={index}>
                          {ingredient.name}
                        </li>
                      ))}
                    </ul>
                    <Button
                      color="danger"
                      onClick={() => {
                        setSaladDeletionIndex(index);
                        setResetOpen(true);
                      }}>
                      <DeleteForever />
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No saved salads</p>
            )}
            <Modal open={resetOpen} onClose={() => setResetOpen(false)}>
              <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                  <WarningRoundedIcon />
                  Confirmation
                </DialogTitle>
                <Divider />
                <DialogContent>Are you sure you want to delete this salad? You cannot get it back.</DialogContent>
                <DialogActions>
                  <Button
                    variant="solid"
                    color="danger"
                    onClick={() => {
                      var saladList = props.saladRules.favoriteSalads;
                      saladList.splice(saladDeletionIndex, 1);

                      var rules = props.saladRules;
                      rules = { ...rules, favoriteSalads: saladList };
                      props.setSaladRules(rules);
                      setResetOpen(false);
                    }}>
                    Delete Salad
                  </Button>
                  <Button variant="plain" color="neutral" onClick={() => setResetOpen(false)}>
                    Cancel
                  </Button>
                </DialogActions>
              </ModalDialog>
            </Modal>
          </TabPanel>
          <TabPanel value={4}>
            <h3>Review the Rules</h3>
            <p>Here are all the rules currently applied to your salads</p>
            <ul style={{ textAlign: "left" }}>
              {props.saladRules.excludedIngredients.map((rule, index) => (
                <li key={index}>
                  <label htmlFor={rule}>{rule} is excluded</label>
                </li>
              ))}
              {props.saladRules.saladProfile.map((rule, index) => (
                <li key={index}>
                  <label>{rule.ingredient} has likes and dislikes</label>
                  {/* TODO: Better display salad profile rules */}
                </li>
              ))}
            </ul>
            <p>You can clear all the rules by pressing the button below. This is irriversable.</p>
            <Button color="danger" onClick={() => setResetOpen(true)}>
              Clear all rules
            </Button>
            <Modal open={resetOpen} onClose={() => setResetOpen(false)}>
              <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                  <WarningRoundedIcon />
                  Confirmation
                </DialogTitle>
                <Divider />
                <DialogContent>Are you sure you want to reset your salad profile?</DialogContent>
                <DialogActions>
                  <Button variant="solid" color="danger" onClick={() => ResetProfile()}>
                    Reset Profile
                  </Button>
                  <Button variant="plain" color="neutral" onClick={() => setResetOpen(false)}>
                    Cancel
                  </Button>
                </DialogActions>
              </ModalDialog>
            </Modal>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
