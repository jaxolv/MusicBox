const multer = require('multer')
const crypto = require('crypto')
const { resolve, extname } = require('path')

const multerConfig = multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (request, file, callback) => {
        crypto.randomBytes(16, (erro, value) => {
            if (erro) {
                return callback(erro)
            }

            return callback(null, value.toString('hex') + extname(file.originalname))
        })
    }
})

module.exports = multerConfig