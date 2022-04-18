const express = require('express');
const cookieParser = require('cookie-parser');
const HttpStatus = require("http-status-codes");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

require('./models/index');

global.HTTP_STATUS = HttpStatus;




const app = express();


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.use(cookieParser());


require('./models');

app.use(
    bodyParser.urlencoded({
      parameterLimit: 100000,
      limit: "50mb",
      extended: true,
    })
  );
  app.use(bodyParser.json());



routes.initialize(app);

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`APP IS STARTED AT ${PORT} `);
})


