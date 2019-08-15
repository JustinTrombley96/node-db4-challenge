exports.up = function(knex) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments('recipeId');
			tbl.string('recipe_name', 50).notNullable().unique();
			tbl.string('instructions', 1000).notNullable();
		})
		.createTable('ingredients', tbl => {
			tbl.increments('ingredientId');
			tbl.string('ingrediant_name', 50).notNullable().unique();
			tbl.decimal('quantity');
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('recipes'), dropTableIfExists('ingredients');
};
