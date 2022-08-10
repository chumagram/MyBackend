const Contenedor = require('../../Contenedor.js');
const { options } = require('./databases');

const productosContenedor = new Contenedor(options,'products');

const getAllProducts = async () => {
  const list = await productosContenedor.getAll();
  return list;
};

const getProduct = async (id) => {
  const list = await productosContenedor.getById(id);
  return list;
};

const createProduct = async (product) => {
  const idProductoGuardado = await productosContenedor.save(product);
  return idProductoGuardado;
};

module.exports = {
  getAllProducts,
  createProduct,
  getProduct
};