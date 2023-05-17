const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const moment = require('moment-timezone')


class CartsController {

    async create(request,response){
        const user_id = request.user.id

        if(!user_id){
            throw new AppError("Porfavor informe o usuário para o qual será criado um carrinho.",400)
        }        

        const userExists = await knex("users").where({id:user_id}).first()
        if(!userExists){
          throw new AppError("Não foi possível criar um novo carrinho, o usuário informado não existe.",404)
        }   

        const isAdmin = await knex("admins").where({user_id}).first()
        if(isAdmin){ 
            throw new AppError("usuário administrador",400)
        }

        const userHasActiveCart = await knex("carts").where({user_id,active:true}).first()
        if(userHasActiveCart){
            throw new AppError("Não foi possível criar um novo carrinho, o usuário já possui um carrinho ativo.",400)
          }   

        await knex("carts").insert({user_id})

        return response.status(201).json({user_id,message:"Novo carrinho criado."})
    }
    
    async delete(request,response){
        const {id} =request.params

        const cartExists = await knex("carts").where({id}).first()
        if(!cartExists){
            throw new AppError("Não foi possível localizar o carrinho.",404)
        }
    
        await knex("carts").where({id}).delete()

        return response.status(200).json(`O carrinho Id=${cartExists.id} foi removido.`)
    }

    async update(request,response){
        const {active,status} = request.body
        const {id} = request.params


        const cart = await knex("carts").where({id})

        if(!cart){
            throw new AppError("Não foi possível localizar o carrinho.",404)
        }

        let updatedActive,updatedStatus

        active ? updatedActive=active : updatedActive=cart.active
        status ? updatedStatus=status : updatedStatus=cart.status
     
        

        await knex("carts").where({id}).update({
            active:updatedActive,
            status:updatedStatus,

            updated_at:moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        })

        return response.status(200).json(`Modificações no carrinho efetuadas com sucesso.`)
    }

    async show(request,response){
        const {id} = request.params

        const cart = await knex("carts").where({id,active:true}).first()
        if(!cart){
            throw new AppError("Não foi possível localizar o carrinho.",404)
        }

        return response.status(201).json({...cart})
    }

    async index(request,response){
        const {user_id,user_history} = request.query
        

        if (user_id){
            const carts = await knex("carts").where({user_id,active:true}).first()
            return response.status(201).json(carts)
        }
        if(user_history){

            if(user_history=="full"){
                const carts = await knex("carts")
                .orderBy("updated_at","desc")

                return response.status(201).json(carts)

            }else{
                const carts = await knex("carts")
                .where({user_id:user_history}).orderBy("updated_at","desc")
                
                return response.status(201).json(carts)
                
            }

            

        }else{
            const carts = await knex("carts").whereNot({status:"Aberto"}).orderBy("updated_at","asc")
            
            return response.status(201).json(carts)
        }
        
    }

}

module.exports = CartsController