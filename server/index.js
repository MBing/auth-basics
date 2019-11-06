const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// APP SETUP
const app = express();


// SERVER SETUP
const PORT = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

