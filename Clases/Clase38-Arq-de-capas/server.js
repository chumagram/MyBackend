const express = require('express');
const productRouter = require('./src/routes/productos')
const PORT = 8080;

const app = express();
app.use(express.json());

app.use('/api/productos', productRouter);

const server = app.listen(PORT, () => {
    console.log('listening on port 8080')
})

server.on('error',error => console.error('Error en servidor', error))