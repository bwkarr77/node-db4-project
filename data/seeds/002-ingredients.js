exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { id: 1, ingredient_name: "Milk" },
    { id: 2, ingredient_name: "Frosted Flakes" },
    { id: 3, ingredient_name: "Butter" },
    { id: 4, ingredient_name: "Digorno" },
    { id: 5, ingredient_name: "Kraft Blue Blox" },
    { id: 6, ingredient_name: "Water" }
  ]);
};
