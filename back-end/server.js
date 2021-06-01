const app = require('express')();
const cors = require('cors');
const { Product } = require('./src/models/');

const http = require('http').createServer(app);
app.use(cors());
app.use(require('express').json());

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'], 
  }});

io.on('connection', (socket) => {
  console.log(`Usuário conectado. ID: ${socket.id} `);

  socket.on('bidClient', async ({ id , price}) => {
    await Product.update({ price: price + 5 }, { where: { id } });
    const productUpdated = await Product.findOne({ where: { id } });

    io.emit('updatePrice', productUpdated);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.route('/products')
  .get(async (req, res) => {
    const products = await Product.findAll();
    return res.status(200).json(products);
  });

http.listen(3333, () => {
  console.log('Servidor ouvindo na porta 3333');
});
