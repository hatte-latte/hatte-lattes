const express = require('express');
const app = express();
const path = require('path');
const port = 5432; 


app.listen(port, (err) => {
  if(err){
    console.error(err);
  } else {
    console.log('server is listening to port 5432')
  };
});
