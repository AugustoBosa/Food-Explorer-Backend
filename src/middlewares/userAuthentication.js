const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")
const knex = require("../database/knex")




function userAuthentication(request,response,next){
    const authHeader = request.headers.authorization


    if(!authHeader){
        throw new AppError("Autenticação de usuário não informada.",401)
    }

    const [bare, token] = authHeader.split(" ")

    try{
       const{sub:user_id} = verify(token, authConfig.jwt.secret)

       request.user={
        id:Number(user_id),
       }

       return next()
    }catch{
        throw new AppError("Autenticação de usuário inválida.",401)
    }
}

module.exports = userAuthentication