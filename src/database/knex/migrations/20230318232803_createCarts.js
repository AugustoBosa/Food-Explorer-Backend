const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("carts",table=>{
    table.increments("id")

    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    
    table.boolean("active").default(true)
    
    table.text("status").default("Aberto")

    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
});
  

exports.down = knex=> knex.schema.dropTable("carts");