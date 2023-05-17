const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("favorites",table=>{
    table.increments("id")

    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE")
  
    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
});
  

exports.down = knex=> knex.schema.dropTable("favorites");