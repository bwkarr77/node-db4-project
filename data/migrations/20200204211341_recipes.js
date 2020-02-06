exports.up = async function(knex) {
  exports.up = function(knex) {
    return (
      knex.schema
        .createTable("recipes", tbl => {
          tbl.increments("id");
          tbl.string("recipe_name", 200).notNullable();
        })
        //
        .createTable("ingredients", tbl => {
          tbl.increments("id");
          tbl
            .string("ingredient_name", 100)
            .unique()
            .notNullable();
        })
        //
        .createTable("instructions", tbl => {
          tbl.increments("id");
          tbl
            .string("step")
            .notNullable()
            .references("recipes.id")
            // .inTable("recipes")
            .onDelete("RESTRICT") //CAN'T delete if a child element exists
            .onUpdate("CASCADE");
          tbl
            .integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.id")
            // .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
        })
        //
        .createTable("ingredient_list", tbl => {
          tbl.increments("id");
          tbl
            .integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipes.id")
            // .inTable("recipes")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
          tbl
            .integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredients.id")
            // .inTable("ingredients")
            .onUpdate("CASCADE")
            .onDelete("RESTRICT");
          tbl.float("QTY", [0]).notNullable();
          tbl.string("measurement").notNullable();

          //becomes our primary key, and enforce unique combinations.
          table.primary(["recipe_id", "ingredient_id"]);
        })
    );
  };
};

exports.down = function(knex) {
  return (
    knex.schema
      //remove tables in opposite order that they appear
      .dropTableIfExists("ingredient_list")
      .dropTableIfExists("instructions")
      .dropTableIfExists("ingredients")
      .dropTableIfExists("recipes")
  );
};
