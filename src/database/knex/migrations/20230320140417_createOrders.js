const moment = require('moment-timezone')

exports.up = knex=> knex.schema.createTable("orders",table=>{
    table.increments("id")

    table.integer("cart_id").references("id").inTable("carts").onDelete("CASCADE")
    table.integer("dish_id").references("id").inTable("dishes").onDelete("CASCADE")
    table.integer("quantity")
    table.text("removed_ingredients").default("[]")

    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
});
  

exports.down = knex=> knex.schema.dropTable("orders");