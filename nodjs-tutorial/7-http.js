const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end("Welcome to our home page")
	} else if (req.url === '/about') {
		res.end('Welcome to about page')
	} else {
		res.end(
			`
			<h1>Oops!</h1>
			<p>We can't seem to find the page you are looking for </p>
			<a href="/">Go back</a>
			`
		)
	}
});


const hostname = '127.0.0.1';
const port = 5000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});