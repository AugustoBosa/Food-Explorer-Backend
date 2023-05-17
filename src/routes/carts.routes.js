const {Router} = require("express")
const cartsRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")

const CartsController = require("../controllers/CartsController")
const cartsController = new CartsController()


cartsRoutes.post("/",userAuthentication,cartsController.create)
// cartsRoutes.delete("/:id",cartsController.delete)
cartsRoutes.put("/:id",userAuthentication,cartsController.update)
cartsRoutes.get("/:id",userAuthentication,cartsController.show)
cartsRoutes.get("/",userAuthentication,cartsController.index)

module.exports = cartsRoutes

