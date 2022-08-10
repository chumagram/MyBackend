const productosDao = require('../daos/productos/productoDao')

function getAll() {
    return productosDao.getAll();
}

function save(product) {
    product.createdAt = Date.now();
    let productDTO = productosDao.save(product);

    return productDTO
}

module.exports = {
    getAll,
    save
}