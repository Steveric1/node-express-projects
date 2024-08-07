const express = require("express");
const path = require('path');
const app = express();

const resource = path.resolve(__dirname, 'navbar-app/index.html')

// server static files
app.use(express.static('./public'))

// app.get("/", (req, res) => {
// 	res.status(200).sendFile(resource);
// });

app.get('/about', (req, res) => {
	res.status(200).send('<h1>Welcome to the about page</h1>');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>Resource not found </h1>');
});

app.listen(3000, "127.0.0.1", () => {
	console.log("server is listening http://127.0.0.1:3000");
});
