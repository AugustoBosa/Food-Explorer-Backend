const {Router} = require("express")
const usersRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")

const UsersController = require("../controllers/UsersController")
const usersController = new UsersController()

usersRoutes.post("/",usersController.create) 
// usersRoutes.delete("/", usersController.delete)
usersRoutes.put("/",userAuthentication,usersController.update)
usersRoutes.get("/:user_id",userAuthentication,usersController.show)
usersRoutes.get("/",userAuthentication,usersController.index)

module.exports = usersRoutes

