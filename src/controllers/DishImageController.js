const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")
const knex = require("../database/knex")


class DishImageController{
    async update(request,response){

        const {id} = request.params

        const dishImageFileName = request.file.filename

        const diskStorage=new DiskStorage()

        const dish = await knex("dishes").where({id}).first()

        if(!dish){
            throw new AppError("Prato não encontrado.",404)
        }

        if(dish.image){
            await diskStorage.deleteFile(dish.image).catch(error=>{})

        }

        const filename = await diskStorage.saveFile(dishImageFileName)
        dish.image = filename

        await knex("dishes").update(dish).where({id})

        return response.status(200).json(dish)
    }

    async delete(request,response){

        const {id} = request.params

        const dish = await knex("dishes").where({id}).first()

        const diskStorage=new DiskStorage()


        await diskStorage.deleteFile(dish.image)
        .catch(error=>{})

        return response.status(200).json()

    }

}

module.exports = DishImageController