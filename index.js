var express = require('express');

// App setup
var app = express();
var port = 4000;
var server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


app.use(express.static('public'));