import ingredients from "./ingredients.js";

class numberMaker {
  constructor(seed) {
    this.index = 0;

    // Create a series of random numbers based on the seed with values between 0 and 1 inclusive
    this.randomNumbers = [];
    let index = 0;
    for (let i = 0; i < 50; i++) {
      // turn character into a number
      let x = seed.charCodeAt(index) * (i + Math.PI);
      // multiply by a prime number and take the modulo of a large prime number
      x = (x * 16807) % 2147483647;

      x = x.toString();
      x = `.${x.substring(1, 9)}`;
      this.randomNumbers.push(parseFloat(x));

      index++;
      if (index >= seed.length) {
        index = 0;
      }
    }
  }

  //returns a random number between 0 and 1 inclusive
  next() {
    let number = this.randomNumbers[this.index];
    this.index++;
    return number;
  }
}

function makeASalad(
  seed = "",
  rulesInput = {
    base: 1,
    topping: 3,
    dressing: 1,
    excludedIngredients: [],
    favoriteIngredients: [],
    saladProfile: [],
  }
) {
  let rules = { ...rulesInput };
  // If no seed is provided, generate a random seed
  if (seed === "") {
    seed = Math.random().toString(36).substring(2);
  }

  // Deep copy ingredients and filter out excluded ingredients
  let legalIngredients = JSON.parse(JSON.stringify(ingredients));
  legalIngredients = legalIngredients.filter((ingredient) => !rules.excludedIngredients.includes(ingredient.name));

  // Modify ingredient weights based on favorite ingredients
  if (rules.favoriteIngredients.length > 0) {
    legalIngredients.forEach((ingredient) => {
      if (rules.favoriteIngredients.includes(ingredient.name)) {
        ingredient.weight *= 2;
      }
    });
  }

  // Modify ingredient weights based on the salad profile
  if (rules.saladProfile.length > 0) {
    legalIngredients.forEach((ingredient) => {
      if (rules.saladProfile.some((profile) => profile.ingredient === ingredient.name)) {
        let profile = rules.saladProfile.find((profile) => profile.ingredient === ingredient.name);
        ingredient.weight += profile.weightAdjustment;

        profile.likesTags.forEach((like) => {
          if (ingredient.likesTags.some((tag) => tag.tag === like.tag)) {
            ingredient.likesTags.find((tag) => tag.tag === like.tag).weight += like.weight;
          } else {
            ingredient.likesTags.push(like);
          }
        });

        profile.dislikesTags.forEach((dislike) => {
          if (ingredient.dislikesTags.some((tag) => tag.tag === dislike.tag)) {
            ingredient.dislikesTags.find((tag) => tag.tag === dislike.tag).weight += dislike.weight;
          } else {
            ingredient.dislikesTags.push(dislike);
          }
        });
      }
    });
  }

  let rand = new numberMaker(seed);

  // Create a salad based on the random numbers
  let salad = [];
  while (rules.base > 0 || rules.topping > 0 || rules.dressing > 0) {
    let ingredient = getIngredientWithWeights(legalIngredients, rand);
    salad.push(ingredient);

    // Modify ingredient weights based on the ingredient chosen
    ingredient.likesTags.forEach((like) => {
      legalIngredients.forEach((ingredientLoop) => {
        if (ingredientLoop.tags.includes(like.tag)) {
          ingredientLoop.weight += like.weight;
        }
      });
    });
    ingredient.dislikesTags.forEach((dislike) => {
      legalIngredients.forEach((ingredientLoop) => {
        if (ingredientLoop.tags.includes(dislike.tag)) {
          ingredientLoop.weight -= dislike.weight;
        }
      });
    });

    if (salad[salad.length - 1].type === "base" && rules.base > 0) {
      rules.base -= rand.next() > 0.05 ? 1 : 0;
    } else if (salad[salad.length - 1].type === "topping" && rules.topping > 0) {
      rules.topping -= rand.next() > 0.15 ? 1 : 0;
    } else if (salad[salad.length - 1].type === "dressing" && rules.dressing > 0) {
      rules.dressing -= rand.next() > 0.09 ? 1 : 0;
    }
    if (rules.base === 0) {
      legalIngredients = legalIngredients.filter((ingredient) => ingredient.type !== "base");
    }
    if (rules.topping === 0) {
      legalIngredients = legalIngredients.filter((ingredient) => ingredient.type !== "topping");
    }
    if (rules.dressing === 0) {
      legalIngredients = legalIngredients.filter((ingredient) => ingredient.type !== "dressing");
    }
  }

  // sort salad by type, base, then topping, then dressing
  salad.sort((a, b) => {
    if (a.type === "base" && b.type !== "base") {
      return -1;
    }
    if (a.type !== "base" && b.type === "base") {
      return 1;
    }
    if (a.type === "topping" && b.type === "dressing") {
      return -1;
    }
    if (a.type === "dressing" && b.type === "topping") {
      return 1;
    }
    return 0;
  });

  return salad;
}

function getIngredientWithWeights(ingredients, rand) {
  let weightSum = ingredients.reduce((sum, ingredient) => sum + Math.max(ingredient.weight, 0), 0);
  let random = rand.next() * weightSum;
  let currentSum = 0;
  for (let i = 0; i < ingredients.length; i++) {
    currentSum += Math.max(ingredients[i].weight, 0);
    if (random < currentSum) {
      let ingredient = ingredients[i];
      ingredients.splice(i, 1);
      return ingredient;
    }
  }
  let ingredient = ingredients[0];
  ingredients.splice(0, 1);
  return ingredient;
}

export default makeASalad;
export { ingredients };
