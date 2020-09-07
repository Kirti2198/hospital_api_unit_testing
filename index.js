const express = require('express');
const port = 5000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

const app = express();
const bodyParser = require("body-parser");
app.use(express.json());

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

//redirecting routes
app.use('/', require('./routes'));


app.listen(port, function (err) {
    if (err) { console.log('error'); return; }

    console.log(`server is running on ${port}`);
});


module.exports = app;
