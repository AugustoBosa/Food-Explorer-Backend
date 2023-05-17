const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("dishes",table=>{
    table.increments("id")

    table.text("name").notNullable
    table.text("description").notNullable
    table.float("price").notNullable
    table.integer("category").references("id").inTable("categories").notNullable
    
    table.text("image").default(null)

    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
});
  

exports.down = knex=> knex.schema.dropTable("dishes");