const AppError = require("../utils/AppError")
const { hash, compare } = require("bcryptjs")
const knex = require("../database/knex")
const moment = require('moment-timezone')


class UsersController {

    async create(request,response){
        const {name,email,password} = request.body

        if(!name || !email || !password){
            throw new AppError("Para criar um novo usuário é nescessário preencher todos os campos.",400)
        }
 
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
          throw new AppError("Por favor, insira um endereço de e-mail válido.", 400);
        }
      
        const isEmailInUse = await knex("users").where({email}).first()
        if(isEmailInUse!=undefined){
            throw new AppError("O e-mail informado já está em uso, por favor informe um diferente.",400)
        }

        if((Array.from(password)).length<6){
            throw new AppError("Por favor insira uma senha com ao menos 6 caracteres.",400)
        }

        const hashedPassword = await hash(password,10)
        const [newUser] = await knex("users").insert({name, email, password:hashedPassword})

        return response.status(201).json({id:newUser,name,email,password,message:`Usuário ${name} cadastrado com sucesso.`})
    }

    async delete(request,response){
        const user_id = request.user.id

        const userExists = await knex("users").where({id:user_id}).first()
        if(!userExists){
            throw new AppError("Não foi possível localizar o usuário",404)
        }
        
        await knex("users").where({id:user_id}).delete()

        return response.status(200).json(`O usuário ${userExists.name} (Id = ${userExists.id}) foi removido.`)
    }

    async update(request,response){
        const {name,email,password,old_password} = request.body
        const user_id = request.user.id
       
        const user = await knex("users").where({id:user_id}).first()
        if(!user){
            throw new AppError("Não foi possível localizar o usuário.",404)
        }
        
        let updatedEmail,updatedName,updatedPassword
        name ? updatedName=name : updatedName=user.name
        email ? updatedEmail=email : updatedEmail=user.email
        password ? updatedPassword=password : updatedPassword=user.password


        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(updatedEmail)) {
          throw new AppError("Por favor, insira um endereço de e-mail válido.", 400);
        }

        const isEmailInUse= await knex("users").where({email:updatedEmail}).first()
        if(isEmailInUse && isEmailInUse.id !== user.id){
            throw new AppError("O e-mail informado já está em uso, por favor altere para um diferente.",400)
        }

        if(password && !old_password){
            throw new AppError("Para modificar a senha é nescessário informar a senha atual.",400)
        }

        if(password && old_password){

            if((Array.from(password)).length<6){
                throw new AppError("Por favor insira uma nova senha com ao menos 6 caracteres.",400)
            }

            const checkOldPassword = await compare(old_password,user.password)
            if (!checkOldPassword){
                throw new AppError("A senha informada está incorreta.",400)
            }

            updatedPassword = await hash(password,10) 
        }

        await knex("users").where({id:user_id}).update({
            name:updatedName,
            email:updatedEmail,
            password:updatedPassword,
            
            updated_at:moment().tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss')
        })
        
        return response.status(200).json(`Modificações no usuário efetuadas com sucesso.`)
    }

    async show(request,response){
        const user_id = request.user.id

        const user = await knex("users").where({id:user_id}).first()
        if(!user){
            throw new AppError("Não foi possível localizar o usuário.",404)
        }

        return response.status(201).json({...user})
    }

    async index(request,response){
        const {user_id} = request.query
        
        if(user_id){
            const users =  await knex("users").where({id:user_id}).first()

            return response.status(200).json(users)
        }else{
            const users = await knex("users")
            if(!users){
                throw new AppError("Não foi possível listar os usuários.",404)
            }
    
            return response.status(200).json(users)
        }

   
    }
    
}

module.exports = UsersController