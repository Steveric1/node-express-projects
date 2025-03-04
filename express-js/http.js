const http = require("http");
const { readFileSync } = require('fs');

const homePage = readFileSync('index.html')

const server = http.createServer((req, res) => {
	console.log(req.url);
	// Home page
	if (req.url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(homePage);
		res.end();
	} else if (req.url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>About Page</h1>");
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		res.write("<h1>Page not found </h1>");
		res.end();
	}
});

server.listen(3000, "127.0.0.1", () => {
	console.log("Sever is running on: http://127.0.0.1:3000");
});
