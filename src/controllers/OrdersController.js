const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const moment = require('moment-timezone')


class RequestsController {
    
    async create(request,response){
        const {cart_id,dish_id,quantity,removed_ingredients} = request.body


        if(!cart_id || !dish_id || !quantity){

            throw new AppError("Por favor preencha todas as informações para criar um pedido.",412)
        }        

        const cartExists = await knex("carts").where({id:cart_id}).first()
        if(!cartExists){
            throw new AppError("Não foi possível localizar o carrinho para criar o pedido.",404)
        }   

        const dishExists = await knex("dishes").where({id:dish_id}).first()
        if(!dishExists){
            throw new AppError("Não foi possível localizar o prato para criar o pedido.",412)
        }  

        await knex("orders").insert({cart_id,dish_id,quantity,removed_ingredients})

        return response.status(201).json({cart_id,dish_id,quantity,removed_ingredients,message:"Pedido adicionado ao carrinho"})
    }

    async delete(request,response){
        const {id} =request.params

        const requestExists = await knex("orders").where({id}).first()
        if(!requestExists){
            throw new AppError("Não foi possível localizar o pedido.",404)
        }
       
        await knex("orders").where({id}).delete()

        return response.status(200).json(`O pedido Id = ${requestExists.id} foi removido.`)
    }

    async update(request,response){
        const  {quantity,removed_ingredients} = request.body
        const {id} = request.params

        const order = await knex("orders").where({id}).first()
        if(!order){
            throw new AppError("Não foi possível localizar o pedido.",404)
        }

        if(quantity=0){
            throw new AppError("Por favor informe uma quantidade, ou clique no botão remover para cancelar o pedido.",404)
        }

        let newQuantity,newRemoved_ingredients
        quantity ? newQuantity = quantity : newQuantity = request.quantity
        removed_ingredients ? newRemoved_ingredients = removed_ingredients : newRemoved_ingredients = request.removed_ingredients

        await knex("orders").where({id}).update({
            quantity:newQuantity, 
            removed_ingredients:newRemoved_ingredients,
                        
            updated_at: moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        })

        return response.status(200).json(`Modificações no prato efetuadas com sucesso.`)
    }

    async show(request,response){
        const {id} = request.params

        const order = await knex("orders").where({id}).first()
        if(!order){
            throw new AppError("Não foi possível localizar o pedido.",404)
        }

        return response.status(201).json({...order})
    }

    async index(request,response){
        const {cart_id} = request.query

        const orders = await knex("dishes")
        .innerJoin("orders","dishes.id","orders.dish_id")
        .where({cart_id})

        if(!orders){
            throw new AppError("Não foi possível listar os pedidos.",404)
        }

        return response.status(201).json(orders)
    }

}

module.exports = RequestsController