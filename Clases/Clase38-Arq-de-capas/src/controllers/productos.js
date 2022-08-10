const productService = require('../services/productos')

function getAll (req, res) {
    let products = productService

    return res.json(products);
}

function save (req, res) {
    let product = req.body;
    productDTO = productService.save(product);

    return res.status(201).json(productDTO); // DTO es data transfer object
}

module.exports = {
    getAll,
    save
}