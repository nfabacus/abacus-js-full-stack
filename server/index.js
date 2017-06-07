//Main starting point of the server application
const express = require('express'); //Parse response + routing
const http = require('http');  //http module from node.js
const bodyParser = require('body-parser');  //Help parse incoming HTTP requests
const morgan = require('morgan'); //for logging
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost/abacus-learning-db');

// App Setup middlewares
app.use(morgan('combined')); //morgan logs incoming requests, used for debugging. It shows you how requests are made,etc.
app.use(cors()); //tell the app to use cors middleware
app.use(bodyParser.json({ type: '*/*'})); //parse incoming requests to json object (as req.body), to make it easy to handle.
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);
