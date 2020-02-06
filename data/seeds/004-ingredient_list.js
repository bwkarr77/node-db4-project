exports.seed = function(knex, Promise) {
  return knex("ingredient_list").insert([
    { recipe_id: 1, ingredient_id: 1, QTY: 1, measurement: "cup" },
    { recipe_id: 1, ingredient_id: 2, QTY: 1, measurement: "bowl" },
    { recipe_id: 2, ingredient_id: 4, QTY: 1, measurement: "package" },
    { recipe_id: 3, ingredient_id: 1, QTY: 1, measurement: "cup" },
    { recipe_id: 3, ingredient_id: 3, QTY: 1, measurement: "stick" },
    { recipe_id: 3, ingredient_id: 5, QTY: 1, measurement: "box" },
    { recipe_id: 3, ingredient_id: 6, QTY: 3, measurement: "cup" }
  ]);
};
