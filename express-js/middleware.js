const express = require("express");
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');
// req => middleware => res

app.use([authorize, morgan('tiny')])

app.get('/', (req, res) => {
	res.send('HOME PAGE');
})

app.get('/about', (req, res) => {
	res.send('ABOUT PAGE');
})

app.get('/api/products', (req, res) => {
	console.log(req.user);
	res.send('Products');
})

app.get('/api/items', (req, res) => {
	res.send('Items');
})


app.listen(3000, "127.0.0.1", () => {
	console.log("server running on http://127.0.0.1:3000");
});
