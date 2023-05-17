const {Router} = require("express")
const routes=Router()

const usersRoutes = require("./users.routes")
const dishesRoutes = require("./dishes.routes")
const ingredientsRoutes = require("./ingredients.routes")
const recipesRoutes = require("./recipes.routes")
const cartsRoutes = require("./carts.routes")
const ordersRoutes = require("./orders.routes")
const categoriesRoutes = require("./categories.routes")
const favoritesRoutes = require("./favorites.routes")
const restrictionsRoutes = require("./restrictions.routes")


const sessionsRoutes = require("./sessions.routes")
const adminsRoutes = require("./admins.routes")

routes.use("/users",usersRoutes)
routes.use("/dishes",dishesRoutes)
routes.use("/ingredients",ingredientsRoutes)
routes.use("/recipes",recipesRoutes)
routes.use("/carts",cartsRoutes)
routes.use("/orders",ordersRoutes)
routes.use("/categories",categoriesRoutes)
routes.use("/favorites",favoritesRoutes)
routes.use("/restrictions",restrictionsRoutes)


routes.use("/sessions",sessionsRoutes)
routes.use("/admins",adminsRoutes)


module.exports = routes
