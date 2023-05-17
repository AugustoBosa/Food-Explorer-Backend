const knex = require("../database/knex")


class AdminsController {

    async show(request,response){
        const user_id = request.user.id

        const isAdmin = await knex("admins").where({user_id}).first()
        return response.status(200).json(isAdmin)
    }          
    
}

module.exports = AdminsController