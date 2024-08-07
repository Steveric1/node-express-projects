const express = require("express");
const app = express();
const people = require("./routes/people");
const login = require("./routes/auth")

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: true }));

// parse json
app.use(express.json());

// base url 
app.use('/api/people', people);
app.use(login);


app.listen(3000, "127.0.0.1", () => {
	console.log("server running on http://127.0.0.1:3000");
});
 