const { hash } = require("bcryptjs")
const moment = require('moment-timezone')

async function hashPassword(){
    let hashedPassword = await hash("administrador",10)
    return hashedPassword
}

exports.up = knex=> knex.schema.createTable("users",table=>{
    table.increments("id")

    table.text("name").notNullable
    table.text("email").notNullable
    table.text("password").notNullable

    table.timestamp("created_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
    table.timestamp("updated_at").defaultTo(moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss'))
}).then(async ()=>
    knex("users").insert({name:"administrador",email:"administrador",password:String(await hashPassword())})
);
  

exports.down = knex=> knex.schema.dropTable("users");