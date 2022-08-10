const knex = require('knex'); //para crear las tablas lo instancio, el objeto de knex


class Contenedor {
  constructor(config, table) {
    this.table = table;
    this.conexion = knex(config);
  }
  
  async save(producto) {
    try {
      const [id] = await this.conexion(this.table).insert(producto);//se inserta el producto en la tabla q le indico
      return id; //no borramos el id, porque es el que se genera automaticamente
    } catch (error) {
      console.error(error); throw error;
    }
  }
  async getById(id) {
    try {
      const contenido = await this.conexion.from(this.table)
        .select('*').where('id', '=', id);
      console.log({contenido});
      if (contenido.length === 0) {
        return null;
      } else {
        return contenido[0];
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async getAll() {
    try {
      const rows = await this.conexion.from(this.table)
        .select('*');
      return rows;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  async deleteById(id) {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
      const listaDeProducto = JSON.parse(contenido);
      if (listaDeProducto === '') {
      } else {
        const listaActualizada = listaDeProducto.filter(elemento => elemento.id === id);
        const listString = JSON.stringify(listaActualizada, null, 2);
        await fs.promises.writeFile(`./${this.file}`, listString);
      }
    }catch (error) {
      console.error('Error:', error);
    };
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(`./${this.file}`, '');
    } catch (error) {
      console.error('Error:', error);
    };
  }
  async update(id, element) {
    const list = await this.getAll();
    console.log({list})
    console.log({id})

    const elementSaved = list.find((item) => item.id === parseInt(id));
    const indexElementSaved = list.findIndex((item) => item.id === parseInt(id));
    console.log({elementSaved})
    if (!elementSaved) {
      console.error(`Elemento con el id: '${id}' no fue encontrado`);
      return null;
    }

    const elementUpdated = {
      ...elementSaved,
      ...element
    };

    list[indexElementSaved] = elementUpdated;

    const elementsString = JSON.stringify(list, null, 2);
    await fs.promises.writeFile(`./${this.file}`, elementsString);

    return elementUpdated;
  }
}

module.exports = Contenedor;