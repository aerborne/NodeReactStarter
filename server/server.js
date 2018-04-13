var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(path.join(__dirname, '../client')));

app.get('*', function (req,res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
});

app.listen(3000, ()=>{
    console.log('app running at port 3000')
})

module.exports = app;
