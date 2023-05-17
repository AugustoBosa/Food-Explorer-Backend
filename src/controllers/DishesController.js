const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const moment = require('moment-timezone')


class DishesController {

    async create(request,response){
        const {name,description,price,category} = request.body

        if(!name || !description || !price || !category || price==0){
            throw new AppError("Por favor preencha todas as informações para criar um novo prato.",400)
        }

        const isNameInUse = await knex("dishes").where({name}).first()
        if(isNameInUse){
            throw new AppError("Já existe um prato cadastrado com esse nome, por favor utilize um nome diferente.",400)
        }

        const fixedname = String(name).trim()
        
        await knex("dishes").insert({name:fixedname,description,price,category})

        return response.status(201).json({name,description,price,category,message:"Prato cadastrado com sucesso."})
    }

    async delete(request,response){
        const {id} =request.params

        const dishExists = await knex("dishes").where({id}).first()
        if(!dishExists){
            throw new AppError("Não foi possível localizar o prato.",404)
        }
       
        await knex("dishes").where({id}).delete()

        return response.status(200).json(`O prato ${dishExists.name} (Id = ${dishExists.id}) foi removido.`)
    }

    async update(request,response){

        const {name,description,price,category} = request.body
        const {id} = request.params

        const dish = await knex("dishes").where({id}).first()
        if(!dish){
            throw new AppError("Não foi possível localizar o prato.",404)
        }

        let newName,newDescription,newPrice,newCategory
        name ? newName = name : newName = dish.name
        description ? newDescription = description : newDescription = dish.description
        price ? newPrice = price : newPrice = dish.price
        category ? newCategory = category : newCategory = dish.category

        const isNameInUse= await knex("dishes").where({name:newName}).first()
        if(isNameInUse && isNameInUse.id !== dish.id){
            throw new AppError("O nome do prato informado já está em uso, por favor informe um diferente.",400)
        }

        const fixedname = String(newName).trim()

        await knex("dishes").where({id}).update({
            name:fixedname, 
            description:newDescription,
            price:newPrice,
            category:newCategory,
            
            updated_at:moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        })

        return response.status(200).json(`Modificações no prato efetuadas com sucesso.`)
    }

    async show(request,response){
        const {id} = request.params

        const dish = await knex("dishes").where({id}).first()

        if(!dish){
            throw new AppError("Não foi possível localizar o prato.",404)
        }

    
        return response.status(200).json(dish)
    }

    async index(request,response){
        const {name} = request.query
        const {search} = request.query

        if(name){
            const dish = await knex("dishes").where({name}).first()
            return response.status(200).json(dish)
        }
        if(search){
            const dishesByName = await knex("dishes").whereLike("name",`%${search}%`)

            const ingredients = await knex("ingredients").whereLike("name",`%${search}%`)

            const ingredientIds = ingredients.map(ingredient=>ingredient.id)
            const recipes = await knex("recipes").whereIn("ingredient_id",ingredientIds)
            const dishIdsFromRecipes = recipes.map(recipe=>recipe.dish_id)
            const dishesByIngredient = await knex("dishes").whereIn("id",dishIdsFromRecipes)

            let addedItemsId=[]
            let SearchResponse=[]

            dishesByName && dishesByName.forEach(dish => {
                if(!addedItemsId.includes(dish.id)){
                    SearchResponse.push(dish)
                    addedItemsId.push(dish.id)
                }
            });

            dishesByIngredient && dishesByIngredient.forEach(dish => {
                if(!addedItemsId.includes(dish.id)){
                    SearchResponse.push(dish)
                    addedItemsId.push(dish.id)
                }
            });
        
            return response.status(201).json(SearchResponse)
            
        }

        const dishes = await knex("dishes").orderBy("name")  
        if(!dishes){
            throw new AppError("Não foi possível listar os pratos.",404)
        }

        return response.status(200).json(dishes)
    }

}

module.exports = DishesController