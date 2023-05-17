const path = require("path")
const multer = require("multer")
const crypto = require("crypto")

const TMP_Folder = path.resolve(__dirname,"..","..","tmp")
const UPLOADS_FOLDER = path.resolve(TMP_Folder,"uploads")
const MULTER = {
    storage:multer.diskStorage({
        destination:TMP_Folder,
        filename(request,file,callback){
            const fileHash = crypto.randomBytes(16).toString("hex")
            const fileName = `${fileHash}-${file.originalname}`

            return callback(null,fileName)
        }
    })
}

module.exports={
    TMP_Folder,
    UPLOADS_FOLDER,
    MULTER
}