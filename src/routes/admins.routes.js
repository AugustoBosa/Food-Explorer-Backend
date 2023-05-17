const {Router} = require("express")
const recipesRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")

const AdminsController = require("../controllers/AdminsController")
const adminsController = new AdminsController()

recipesRoutes.get("/:id",userAuthentication,adminsController.show)

module.exports = recipesRoutes

