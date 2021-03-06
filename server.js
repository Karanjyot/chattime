const express = require("express");
var compression = require('compression')

// Sets up the Express App
// =============================================================
var app = express();
app.use(compression());
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`connected to http://localhost:${PORT}`);
  });