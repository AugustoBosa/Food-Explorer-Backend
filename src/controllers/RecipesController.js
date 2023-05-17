const AppError = require("../utils/AppError")
const knex = require("../database/knex")


class RecipesController {

    async create(request,response){
        const {dish_id,ingredient_id} = request.body

        if(!dish_id || !ingredient_id){
            throw new AppError("Por favor informe o prato e o ingrediente.",400)
        }

        await knex("recipes").insert({ingredient_id,dish_id})

        return response.status(201).json({message:`Receita cadastrada com sucesso.`})
    }

    async delete(request,response){
        const {id} =request.params

        const recipeExists = await knex("recipes").where({id}).first()
        if(!recipeExists){
            throw new AppError("Não foi possível localizar a receita.",404)
        }
       
        await knex("recipes").where({id}).delete()

        return response.status(200).json(`A receita Id = ${recipeExists.id} foi removida.`)
    }

    async index(request,response){
        const {id} = request.query

        const recipes = await knex("ingredients")
        .innerJoin("recipes","ingredients.id","recipes.ingredient_id")
        .where({dish_id:id})


        if(!recipes){
            throw new AppError("Não foi possível listar as receitas.",404)
        }

        return response.status(201).json(recipes)

    }
    
}

module.exports = RecipesController