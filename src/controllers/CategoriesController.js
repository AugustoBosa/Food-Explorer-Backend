const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const moment = require('moment-timezone')


class CategoriesController {

    async create(request,response){
        const {name} = request.body
        
        if(!name){
            throw new AppError("Por favor informe o nome da categoria.",400)
        }

        const isNameInUse = await knex("categories").where({name}).first()

        if(isNameInUse){
            throw new AppError("Já existe uma categoria cadastrada com esse nome, por favor utilize um nome diferente.",400)
        }

        
        const fixedname = String(name).trim()

        await knex("categories").insert({name:fixedname})

        return response.status(201).json({message:`Categoria ${name} cadastrada com sucesso.`})
    }

    async delete(request,response){
        const {id} =request.params

        const categoryExists = await knex("categories").where({id}).first()
        if(!categoryExists){
            throw new AppError("Não foi possível localizar a categoria.",404)
        }
       
        await knex("categories").where({id}).delete()

        return response.status(200).json(`O categoria ${categoryExists.name} (Id = ${categoryExists.id}) foi removido.`)
    }

    async update(request,response){
        const {name} = request.body
        const {id} = request.params

        if(!name){
            throw new AppError("Por favor informe um novo nome para a categoria.",404)
        }

        const category = await knex("categories").where({id}).first()
        if(!category){
            throw new AppError("Não foi possível localizar a categoria.",404)
        }
        
        const isNameInUse= await knex("categories").where({name}).first()
        if(isNameInUse && isNameInUse.id !== category.id){
            throw new AppError("O nome informado já está em uso, por favor informe um diferente para a categoria.",409)
        }

        const fixedname = String(name).trim()

        await knex("categories").where({id}).update({
            name:fixedname,
            updated_at: moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        })
        
        return response.status(200).json(`Modificações na categoria efetuadas com sucesso.`)
    }

    async show(request,response){
        const {id} = request.params

        const ingredient = await knex("categories").where({id}).first()
        if(!ingredient){
            throw new AppError("Não foi possível localizar a categoria.",404)
        }

        return response.status(201).json({...ingredient})
    }

    async index(request,response){
        const categories = await knex("categories").orderBy("id")
        if(!categories){
            throw new AppError("Não foi possível listar os categoria.",404)
        }

        return response.status(201).json(categories)
    }

}

module.exports = CategoriesController