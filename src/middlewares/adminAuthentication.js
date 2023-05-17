const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")


function adminAuthentication(request,response,next){
    const authHeader = request.headers.authorization
 
    if(!authHeader){
        throw new AppError("Autenticação de usuário não informada.",400)
    }

    const [bare, token] = authHeader.split(" ")

    try{
        const { role } = verify(token, authConfig.jwt.secret)
        
        if(role === "admin"){
            return next()
        }else{
            throw new AppError("Autenticação de usuário inválida.",400)
        }
 
     }catch{
         throw new AppError("Autenticação de usuário inválida.",400)
     }

}

module.exports = adminAuthentication