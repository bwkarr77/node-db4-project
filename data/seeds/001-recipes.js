exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Cereal" },
    { recipe_name: "Pizza" },
    { recipe_name: "Mac N Cheese" }
  ]);
};
