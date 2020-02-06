exports.seed = function(knex, Promise) {
  return knex("instructions").insert([
    { step: "Pour cereal into bowl.", recipe_id: 1 },
    { step: "Pour milk into bowl.", recipe_id: 1 },
    { step: "Enjoy", recipe_id: 1 },
    { step: "Preheat oven to 425°F", recipe_id: 2 },
    { step: "Remove pizza from package", recipe_id: 2 },
    { step: "Place pizza in oven", recipe_id: 2 },
    { step: "Cook for 30 minutes", recipe_id: 2 },
    { step: "Remove from oven and enjoy.", recipe_id: 2 },
    { step: "Bowl water and noodles in a pan until soft", recipe_id: 3 },
    { step: "Drain the water from the pan", recipe_id: 3 },
    { step: "In pan add: cheese, butter, milk.", recipe_id: 3 },
    { step: "Mix together, and enjoy.", recipe_id: 3 }
  ]);
};
