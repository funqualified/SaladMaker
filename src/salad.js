let ingredients = [
  {
    name: "romaine lettuce",
    type: "base",
    tags: ["vegetable", "lettuce"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "baby spinach",
    type: "base",
    tags: ["vegetable", "spinach"],
    weight: 0.5,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "kale",
    type: "base",
    tags: ["vegetable", "kale"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "arugula",
    type: "base",
    tags: ["vegetable", "arugula"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "mixed greens",
    type: "base",
    tags: ["vegetable", "mixed greens"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "spring mix",
    type: "base",
    tags: ["vegetable", "spring mix"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "iceberg lettuce",
    type: "base",
    tags: ["vegetable", "lettuce"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "red leaf lettuce",
    type: "base",
    tags: ["vegetable", "lettuce"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "butter lettuce",
    type: "base",
    tags: ["vegetable", "lettuce"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "tomato",
    type: "topping",
    tags: ["vegetable", "tomato", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "cucumber",
    type: "topping",
    tags: ["vegetable", "cucumber", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "carrot",
    type: "topping",
    tags: ["vegetable", "carrot", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "red onion",
    type: "topping",
    tags: ["vegetable", "onion", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "green onion",
    type: "topping",
    tags: ["vegetable", "onion", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "bell pepper",
    type: "topping",
    tags: ["vegetable", "bell pepper", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "broccoli",
    type: "topping",
    tags: ["vegetable", "broccoli", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "cauliflower",
    type: "topping",
    tags: ["vegetable", "cauliflower", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "radish",
    type: "topping",
    tags: ["vegetable", "radish", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "celery",
    type: "topping",
    tags: ["vegetable", "celery", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "avocado",
    type: "topping",
    tags: ["vegetable", "avocado", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "mushroom",
    type: "topping",
    tags: ["vegetable", "mushroom", "fungi", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "crispy fried onion",
    type: "topping",
    tags: ["vegetable", "onion", "fried", "crunchy", "pre packaged"],
    weight: 10,
    likesTags: [],
    dislikesTags: [{ tag: "crunchy", weight: 10 }],
  },
  {
    name: "sun dried tomato",
    type: "topping",
    tags: ["vegetable", "tomato", "dried", "pre packaged"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "sauteed mushroom",
    type: "topping",
    tags: ["vegetable", "mushroom", "fungi", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "sauteed onion",
    type: "topping",
    tags: ["vegetable", "onion", "hot"],
    weight: 1,
    likesTags: [{ tag: "hot", weight: 5 }],
    dislikesTags: [],
  },
  {
    name: "grilled bell pepper",
    type: "topping",
    tags: ["vegetable", "bell pepper", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled zucchini",
    type: "topping",
    tags: ["vegetable", "zucchini", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled eggplant",
    type: "topping",
    tags: ["vegetable", "eggplant", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled asparagus",
    type: "topping",
    tags: ["vegetable", "asparagus", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled corn",
    type: "topping",
    tags: ["vegetable", "corn", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled squash",
    type: "topping",
    tags: ["vegetable", "squash", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled onion",
    type: "topping",
    tags: ["vegetable", "onion", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled tomato",
    type: "topping",
    tags: ["vegetable", "tomato", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled mushroom",
    type: "topping",
    tags: ["vegetable", "mushroom", "fungi", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled pineapple",
    type: "topping",
    tags: ["fruit", "pineapple", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled apple",
    type: "topping",
    tags: ["fruit", "apple", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled pear",
    type: "topping",
    tags: ["fruit", "pear", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled peach",
    type: "topping",
    tags: ["fruit", "peach", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled mango",
    type: "topping",
    tags: ["fruit", "mango", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled watermelon",
    type: "topping",
    tags: ["fruit", "watermelon", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "ranch dressing",
    type: "dressing",
    tags: ["dressing", "ranch"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "peanut sauce",
    type: "dressing",
    tags: ["sauce", "peanut"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "tahini sauce",
    type: "dressing",
    tags: ["sauce", "tahini"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "hummus",
    type: "dressing",
    tags: ["sauce", "hummus"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "tzatziki sauce",
    type: "dressing",
    tags: ["sauce", "tzatziki"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "asian ginger dressing",
    type: "dressing",
    tags: ["dressing", "asian", "ginger"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "caesar dressing",
    type: "dressing",
    tags: ["dressing", "caesar"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "italian dressing",
    type: "dressing",
    tags: ["dressing", "italian"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "balsamic vinaigrette",
    type: "dressing",
    tags: ["dressing", "balsamic"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "honey mustard dressing",
    type: "dressing",
    tags: ["dressing", "honey mustard"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "thousand island dressing",
    type: "dressing",
    tags: ["dressing", "thousand island"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "blue cheese dressing",
    type: "dressing",
    tags: ["dressing", "blue cheese"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "feta cheese",
    type: "topping",
    tags: ["cheese", "feta", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "cheddar cheese",
    type: "topping",
    tags: ["cheese", "cheddar", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "mozzarella cheese",
    type: "topping",
    tags: ["cheese", "mozzarella", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "parmesan cheese",
    type: "topping",
    tags: ["cheese", "parmesan", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "goat cheese",
    type: "topping",
    tags: ["cheese", "goat", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "blue cheese",
    type: "topping",
    tags: ["cheese", "blue", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "walnut",
    type: "topping",
    tags: ["nut", "walnut", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "almond",
    type: "topping",
    tags: ["nut", "almond", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "cashew",
    type: "topping",
    tags: ["nut", "cashew", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "pecan",
    type: "topping",
    tags: ["nut", "pecan", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "peanut",
    type: "topping",
    tags: ["nut", "peanut", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "pistachio",
    type: "topping",
    tags: ["nut", "pistachio", "cold"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "BBQ sauce",
    type: "dressing",
    tags: ["sauce", "BBQ"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "hot sauce",
    type: "dressing",
    tags: ["sauce", "spicy"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "italian croutons",
    type: "topping",
    tags: ["bread", "crunchy", "italian", "pre packaged"],
    weight: 10,
    likesTags: [],
    dislikesTags: [{ tag: "crunchy", weight: 10 }],
  },
  {
    name: "cheetos",
    type: "topping",
    tags: ["crunchy", "cheese", "pre packaged"],
    weight: 10,
    likesTags: [],
    dislikesTags: [{ tag: "crunchy", weight: 10 }],
  },
  {
    name: "doritos",
    type: "topping",
    tags: ["crunchy", "cheese", "pre packaged"],
    weight: 10,
    likesTags: [],
    dislikesTags: [{ tag: "crunchy", weight: 10 }],
  },
  {
    name: "tortilla strips",
    type: "topping",
    tags: ["crunchy", "corn", "pre packaged"],
    weight: 10,
    likesTags: [],
    dislikesTags: [{ tag: "crunchy", weight: 10 }],
  },
  {
    name: "sauteed garlic",
    type: "topping",
    tags: ["vegetable", "garlic", "hot"],
    weight: 1,
    likesTags: [{ tag: "hot", weight: 5 }],
    dislikesTags: [],
  },
  {
    name: "toasted pizza pieces",
    type: "topping",
    tags: ["bread", "crunchy", "pizza", "unusual"],
    weight: 0.1,
    likesTags: [{ tag: "pizza", weight: 10 }],
    dislikesTags: [{ tag: "crunchy", weight: 10 }],
  },
  {
    name: "crispy bacon",
    type: "topping",
    tags: ["meat", "bacon", "crunchy"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled chicken",
    type: "topping",
    tags: ["meat", "chicken", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled steak",
    type: "topping",
    tags: ["meat", "steak", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled salmon",
    type: "topping",
    tags: ["meat", "fish", "salmon", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled shrimp",
    type: "topping",
    tags: ["meat", "shrimp", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled pork",
    type: "topping",
    tags: ["meat", "pork", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled lamb",
    type: "topping",
    tags: ["meat", "lamb", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "grilled tofu",
    type: "topping",
    tags: ["meat", "tofu", "hot"],
    weight: 1,
    likesTags: [],
    dislikesTags: [],
  },
  {
    name: "pizza seasoning",
    type: "topping",
    tags: ["spice", "pizza", "unusual"],
    weight: 0.1,
    likesTags: [{ tag: "pizza", weight: 10 }],
    dislikesTags: [],
  },
  {
    name: "taco seasoning",
    type: "topping",
    tags: ["spice", "taco", "unusual"],
    weight: 0.1,
    likesTags: [{ tag: "taco", weight: 10 }],
    dislikesTags: [],
  },
  {
    name: "italian seasoning",
    type: "topping",
    tags: ["spice", "italian", "unusual"],
    weight: 0.1,
    likesTags: [{ tag: "italian", weight: 10 }],
    dislikesTags: [],
  },
];

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
    console.log(number);
    return number;
  }
}

function makeASalad(
  seed = "",
  rules = {
    base: 1,
    topping: 3,
    dressing: 1,
    excludedTags: [],
  }
) {
  // If no seed is provided, generate a random seed
  if (seed === "") {
    seed = Math.random().toString(36).substring(2);
  }

  var legalIngredients = ingredients.filter((ingredient) => ingredient.tags.every((tag) => !rules.excludedTags.includes(tag)));
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
