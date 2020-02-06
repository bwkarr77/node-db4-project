exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Milk" },
    { ingredient_name: "Frosted Flakes" },
    { ingredient_name: "Butter" },
    { ingredient_name: "Digorno" },
    { ingredient_name: "Kraft Blue Blox" },
    { ingredient_name: "Water" }
  ]);
};
