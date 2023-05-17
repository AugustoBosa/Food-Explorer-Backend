const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("restrictions",table=>{
    table.increments("id")

    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.integer("ingredient_id").references("id").inTable("ingredients").onDelete("CASCADE")
  
    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))

});
  

exports.down = knex=> knex.schema.dropTable("restrictions");