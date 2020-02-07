const router = require("express").Router();

const {
  getAll,
  createNew,
  getIndividual,
  deleteIndividual,
  updateIndividual
} = require("./controllers.jsx");

const {
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
} = require("./recipeController.jsx");

router
  .route("/recipes")
  .get(getAll)
  .post(createNew);

router
  .route("/recipes/:id")
  .get(getIndividual)
  .delete(deleteIndividual)
  .put(updateIndividual);

router.route("/recipes/:id/shoppinglist").get(getShoppingList); //get shopping list for recipe.id

router.route("/recipes/:id/instructions").get(getInstructions); //get instructions for recipe.id

router.route("/ingredients/:id/recipes").get(getRecipesByIngredient); //get all recipes that use ingredient.
module.exports = router;
