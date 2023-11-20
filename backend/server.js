const express = require("express");
const app = express();
const db = require("./confg/db.config.js");
const Cliente = db.Cliente;

var bodyParser = require("body-parser");
let router = require("./routes/router.js");

const cors = require("cors");
const corsOptions = {
	origin: "http://localhost:5173",
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static("resources"));
app.use("/", router);

const server = app.listen(8080, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log("App está rodando no endereço http://%s:%s", host, port);
});
