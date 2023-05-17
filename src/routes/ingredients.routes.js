const {Router} = require("express")
const ingredientsRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")
const adminAuthentication = require("../middlewares/adminAuthentication")

const IngredientsController = require("../controllers/IngredientsController")
const ingredientsController = new IngredientsController()

ingredientsRoutes.post("/",userAuthentication,adminAuthentication,ingredientsController.create)
ingredientsRoutes.delete("/:id",userAuthentication,adminAuthentication,ingredientsController.delete)
ingredientsRoutes.put("/:id",userAuthentication,adminAuthentication,ingredientsController.update)
ingredientsRoutes.get("/:id",userAuthentication,ingredientsController.show)
ingredientsRoutes.get("/",userAuthentication,ingredientsController.index)

module.exports = ingredientsRoutes

