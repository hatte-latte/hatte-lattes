// environment variables
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// set up postgres pool
const {Pool} = require('pg');
const pool = new Pool({connectionString: process.env.pgURI});


// connect to database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

// create express server and apply middleware
app.use(bodyParser.json());

// create server routes here
// create server routes here
require('./routes/auth')(app);
require('./routes/hello')(app);
require('./buyer_routes')(app, pool);
require('./buyer_routes')(app, pool);


const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));

