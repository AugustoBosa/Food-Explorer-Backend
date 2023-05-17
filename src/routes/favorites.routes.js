const {Router} = require("express")
const favoritesRoutes = Router()

const userAuthentication = require("../middlewares/userAuthentication")

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController()

favoritesRoutes.post("/",userAuthentication,favoritesController.create)
favoritesRoutes.delete("/",userAuthentication,favoritesController.delete)
favoritesRoutes.get("/",userAuthentication,favoritesController.index)

module.exports = favoritesRoutes

