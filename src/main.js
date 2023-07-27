const express = require('express');
const { Server } = require('http');
const { address } = require('./lib/address');
const { dir } = require('./lib/dir');

const app = express();
const server = new Server(app);

app.set('views', dir('views'));
app.set('view engine', 'hbs');

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.render('main', {});
});

server.listen(8080, '0.0.0.0', () => {
  console.log(`Server start on ${address(server)}`);
});