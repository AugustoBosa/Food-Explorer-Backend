const {Router} = require("express")
const restrictionsRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")
const adminAuthentication = require("../middlewares/adminAuthentication")

const RestrictionsController = require("../controllers/RestrictionsController")
const restrictionsController = new RestrictionsController()

restrictionsRoutes.post("/",userAuthentication,restrictionsController.create)
restrictionsRoutes.delete("/:id",userAuthentication,restrictionsController.delete)
// restrictionsRoutes.put("/:id",restrictionsController.update)
// restrictionsRoutes.get("/:id",restrictionsController.show)
restrictionsRoutes.get("/",userAuthentication,restrictionsController.index)

module.exports = restrictionsRoutes

