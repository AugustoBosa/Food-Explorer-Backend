require("dotenv/config")
require("express-async-errors")

const cors = require("cors")
const express = require("express")
const app = express()
app.use(cors())
app.use(express.json())

const routes = require("./routes")
app.use(routes)

const uploadConfig = require("./configs/upload")
app.use("/files",express.static(uploadConfig.UPLOADS_FOLDER))

const knex = require("./database/knex")
knex.migrate.latest()

const AppError = require("./utils/AppError")
app.use((error,request,response,next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message: error.message
        })
    } 

    return response.status(500).json({
        status:"error",
        message:"- Internal Server Error - "
    })
})


const PORT = process.env.SERVER_PORT || 3333
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}.`)
})