const AppError = require("../utils/AppError")
const knex = require("../database/knex")


class FavoritesController {

    async create(request,response){
        const {user_id,dish_id} = request.body

        await knex("favorites").insert({user_id,dish_id})

        return response.status(201).json({message:`Favorito cadastrado.`})
    }

    async delete(request,response){
        const {user_id,dish_id} = request.query

        const favoriteExists = await knex("favorites").where({user_id,dish_id}).first()

        if(!favoriteExists){
            throw new AppError("Não foi possível localizar o favorito.",404)
        }
       
        await knex("favorites").where( {user_id,dish_id}).delete()

        return response.status(200).json(`Removido.`)
    }

    async index(request,response){
        const {user_id} = request.query

        const favorites = await knex("favorites").where({user_id})
        if(!favorites){
            throw new AppError("Não foi possível listar as receitas.",404)
        }

        return response.status(200).json(favorites)
    }

}

module.exports = FavoritesController