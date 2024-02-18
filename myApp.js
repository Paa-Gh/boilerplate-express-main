let express = require('express');
let app = express();
require('dotenv').config();

/*
const out = function(req,res){
  res.send("Hello Express");
}

app.get('/',out);
*/
/*
const out = function(req,res){
  res.sendfile(__dirname + '/views/index.html')
}

app.get('/',out);
*/

// app.use('/public', express.static(__dirname + '/public'));

const newApi = function(req,res){
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({
      "message": "HELLO JSON"
    })
  } else {
    res.json({
      "message": "hello json"
    })
  }
 
}

app.get('/json', newApi);

// console.log("Hello World")




































 module.exports = app;
