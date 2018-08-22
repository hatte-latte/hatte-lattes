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
// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

// create express server and apply middleware
app.use(bodyParser.json());

// create server routes here
console.log(process.env.pgURI)
// create server routes here
require('./auth_routes')(app);
require('./seller_routes')(app, pool);
require('./buyer_routes')(app, pool);

app.get('/',
  
  () => {
    console.log("at seller")
    console.log('herexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    // res.send(res.locals.formInfo);
  }
);
const port = 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
 