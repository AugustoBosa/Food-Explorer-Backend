const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")
const { sign }= require("jsonwebtoken")
const authConfig = require("../configs/auth")

class SessionsController{

    async create(request,response){
        const {email,password} = request.body

        const user = await knex("users").where({email}).first()
        
        if(!user){
            throw new AppError("Nome de usuário e/ou senha inválidos.")
        }

        const passwordMatched = await compare(password,user.password)
        if(!passwordMatched){
            throw new AppError("Nome de usuário e/ou senha inválidos.")
        }
        const { secret, expiresIn} = authConfig.jwt

        const checkAdmin = await knex("admins").where({user_id:user.id}).first()
        
        let role

        if(checkAdmin){
            role = "admin"
        }else{
            role = "user"
        }
 
        const token = sign({role:role},secret,{
            subject:String(user.id),
            expiresIn
        })


        return response.status(201).json({
            user:{
                id:user.id,
                name:user.name,
                email:user.email,
            }, 
            token})
    }
    
}

module.exports = SessionsController