const db = require("./db-config.js");

const getRecipes = () => {
  return db("recipes");
};

const getList = recipe_id => {
  return db("ingredient_list")
    .select("ingredients.ingredient_name")
    .where({ recipe_id })
    .join("ingredients", "ingredients.id", "ingredient_list.ingredient_id");
};

function getInstructions = (recipe_id) =>{
  return db('instructions')
  .select('recipes.recipe_name', 'instructions.step')
  .where({recipe_id})
  .join('recipes','recipes.id', 'i.recipe_id')
}

module.exports = {
  getRecipes,
  getList,
  getInstructions
};
