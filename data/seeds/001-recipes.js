exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { id: 1, recipe_name: "Cereal" },
    { id: 2, recipe_name: "Pizza" },
    { id: 3, recipe_name: "Mac N Cheese" }
  ]);
};
