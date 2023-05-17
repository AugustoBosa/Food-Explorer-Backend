const {Router} = require("express")
const recipesRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")
const adminAuthentication = require("../middlewares/adminAuthentication")

const RecipesController = require("../controllers/RecipesController")
const recipesController = new RecipesController()

recipesRoutes.post("/",userAuthentication,adminAuthentication,recipesController.create)
recipesRoutes.delete("/:id",userAuthentication,adminAuthentication,recipesController.delete)
recipesRoutes.get("/",userAuthentication,recipesController.index)

module.exports = recipesRoutes

