const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("categories",table=>{
    table.increments("id")

    table.text("name").notNullable
    
    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
});
  

exports.down = knex=> knex.schema.dropTable("categories");