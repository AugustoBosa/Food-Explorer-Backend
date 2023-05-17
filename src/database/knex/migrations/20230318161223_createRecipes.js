const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("recipes",table=>{
    table.increments("id")

    table.integer("ingredient_id").references("id").inTable("ingredients").onDelete("CASCADE")
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE")
    
    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
});
  

exports.down = knex=> knex.schema.dropTable("recipes");