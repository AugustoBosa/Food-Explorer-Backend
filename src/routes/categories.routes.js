const {Router} = require("express")
const categoriesRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")
const adminAuthentication = require("../middlewares/adminAuthentication")

const CategoriesController = require("../controllers/CategoriesController")
const categoriesController = new CategoriesController()


categoriesRoutes.post("/",userAuthentication,adminAuthentication,categoriesController.create)
categoriesRoutes.delete("/:id",userAuthentication,adminAuthentication,categoriesController.delete)
categoriesRoutes.put("/:id",userAuthentication,adminAuthentication,categoriesController.update)
// categoriesRoutes.get("/:id",categoriesController.show)
categoriesRoutes.get("/",userAuthentication,categoriesController.index)

module.exports = categoriesRoutes

