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
        tbl.string("step", 128).notNullable();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          //reference column id, from recipes table
          .references("id")
          .inTable("recipes")
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
          //reference column id, from recipes table
          .references("id")
          .inTable("recipes")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          //reference column id, from ingredients table
          .references("id")
          .inTable("ingredients")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
        tbl.float("QTY", [0]).notNullable();
        tbl.string("measurement").notNullable();

        //becomes our primary key, and enforce unique combinations.
        // tbl.primary(["recipe_id", "ingredient_id"]);
      })
  );
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
