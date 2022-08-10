const products = [];

function getAll() {
    return products;
}

function save (product) {
    products.push(product)
    return product
}

module.exports = {
    getAll,
    save
}