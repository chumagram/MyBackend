const {Router} = require('express');
const productController = require('../controllers/productos')

const productRouter = Router()

productRouter.get('/', productController.getAll())
productRouter.post('/', productController.save())

module.exports = productRouter