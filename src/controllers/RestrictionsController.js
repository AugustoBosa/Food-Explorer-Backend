const AppError = require("../utils/AppError")
const knex = require("../database/knex")


class RestrictionsController {

    async create(request,response){
        const {ingredient_id} = request.body
        const user_id = request.user.id

        await knex("restrictions").insert({ingredient_id,user_id})

        return response.status(201).json({message:`Restrição cadastrada com sucesso.`})
    }

    async delete(request,response){
        const {id} =request.params


        const restrictionExists = await knex("restrictions").where({id}).first()
        if(!restrictionExists){
            throw new AppError("Não foi possível localizar a restrição.",404)
        }
       
        await knex("restrictions").where({id}).delete()

        return response.status(200).json(`A restrição Id = ${restrictionExists.id} foi removida.`)
    }


    async index(request,response){
        const {user_id} = request.query

        const restrictions = await knex("ingredients")
        .innerJoin("restrictions","ingredients.id","restrictions.ingredient_id")
        .where({user_id})

        if(!restrictions){
            throw new AppError("Não foi possível listar as restrições.",404)
        }

        return response.status(201).json(restrictions)
    }
    
}

module.exports = RestrictionsController