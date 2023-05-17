const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const moment = require('moment-timezone')


class IngredientsController {

    async create(request,response){
        const {name} = request.body

        if(!name){
            throw new AppError("Por favor informe o nome do ingrediente.",400)
        }

        const fixedname = String(name).trim().toLowerCase()

        const isNameInUse = await knex("ingredients").where({name:fixedname}).first()
        if(isNameInUse){
            throw new AppError("Já existe um ingrediente cadastrado com esse nome, por favor utilize um nome diferente.",400)
        }

        await knex("ingredients").insert({name:fixedname})

        return response.status(201).json({message:`Ingrediente ${fixedname} cadastrado com sucesso.`})
    }

    async delete(request,response){
        const {id} =request.params

        const ingredientExists = await knex("ingredients").where({id}).first()
        if(!ingredientExists){
            throw new AppError("Não foi possível localizar o ingrediente.",404)
        }
       
        await knex("ingredients").where({id}).delete()

        return response.status(200).json(`O ingrediente ${ingredientExists.name} (Id = ${ingredientExists.id}) foi removido.`)
    }

    async update(request,response){
        const {name} = request.body
        const {id} = request.params

        const ingredient = await knex("ingredients").where({id}).first()

        if(!ingredient){
            throw new AppError("Não foi possível localizar o ingrediente.",404)
        }

        if(!name){
            throw new AppError("Por favor informe um novo nome para o ingrediente.",404)
        }
        
        const isNameInUse= await knex("ingredients").where({name}).first()
        if(isNameInUse && isNameInUse.id !== ingredient.id){
            throw new AppError("O nome informado já está em uso, por favor informe um diferente para o ingrediente.",400)
        }

        const fixedname = String(name).trim().toLowerCase()

        await knex("ingredients").where({id}).update({
            name:fixedname,
            updated_at: moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        })
        
        return response.status(200).json(`Modificações no ingrediente efetuadas com sucesso.`)
    }

    async show(request,response){
        const {id} = request.params

        const ingredient = await knex("ingredients").where({id}).first()
        if(!ingredient){
            throw new AppError("Não foi possível localizar o ingrediente.",404)
        }

        return response.status(200).json({...ingredient})
    }

    async index(request,response){
        const {search} = request.query
        const {name} = request.query


        if(search){

            const ingredients = await knex("ingredients").whereLike("name",`%${search}%`) 
            return response.status(201).json(ingredients)

        }  
        
        if(name){

            const ingredients = await knex("ingredients").where({name}).first()
            return response.status(201).json(ingredients)

        }
    

        const ingredients = await knex("ingredients").orderBy("name")
        if(!ingredients){
            throw new AppError("Não foi possível listar os ingredientes.",404)
        }

        return response.status(200).json(ingredients)
        
    }
    
}

module.exports = IngredientsController