const {Router} = require("express")
const ordersRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")
const adminAuthentication = require("../middlewares/adminAuthentication")

const OrdersController = require("../controllers/OrdersController")
const ordersController = new OrdersController()

ordersRoutes.post("/",userAuthentication,ordersController.create)
ordersRoutes.delete("/:id",userAuthentication,ordersController.delete)
// ordersRoutes.put("/:id",ordersController.update)
// ordersRoutes.get("/:id",userAuthentication,ordersController.show)
ordersRoutes.get("/",userAuthentication,ordersController.index)

module.exports = ordersRoutes

