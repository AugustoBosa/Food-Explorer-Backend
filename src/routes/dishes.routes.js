const { Router } = require("express")
const dishesRoutes = Router()

const multer = require ("multer")
const uploadConfig = require("../configs/upload")
const upload = multer(uploadConfig.MULTER)

const userAuthentication = require("../middlewares/userAuthentication")
const adminAuthentication = require("../middlewares/adminAuthentication")

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController()

const DishImageController = require("../controllers/DishImageController")
const dishImageController = new DishImageController()

dishesRoutes.post("/",userAuthentication,adminAuthentication,dishesController.create)
dishesRoutes.delete("/:id",userAuthentication,adminAuthentication,dishesController.delete)
dishesRoutes.put("/:id",userAuthentication,adminAuthentication,dishesController.update)
dishesRoutes.get("/:id",userAuthentication,dishesController.show)
dishesRoutes.get("/",userAuthentication,dishesController.index)

dishesRoutes.patch("/image/:id",userAuthentication,adminAuthentication, upload.single("image"),dishImageController.update)
dishesRoutes.delete("/image/:id",userAuthentication,adminAuthentication,dishImageController.delete)

module.exports = dishesRoutes

