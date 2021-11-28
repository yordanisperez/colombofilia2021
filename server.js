const express = require('express');
const app = express();

const path = require('path');


  
const port = process.env.PORT|8080;


app.use(express.urlencoded({ extended: true })); //Usar el bodyparser que enta 
app.use(express.static(path.join(__dirname+'/cliente')));

 
const server=app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });

