const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index.routes');
const apiRouter = require('./routes/api/index.routes');
const config = require('./config');
const app = express();
const path = require('path');

const jwt = require("jsonwebtoken");
const passport = require('passport');


const port = process.env.PORT || 5000;
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))


app.use(passport.initialize())
app.use(passport.session());
// Add the line below, which you're missing:
// require('./config/auth.config')(passport);
require('./config/jwtAuth.config')(passport);



app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use('/', indexRouter);
app.use('/api', apiRouter);
// set up mongoose
mongoose.connect(config.mongoose.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log(error);
        console.log('Error connecting to database');
    });

app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname, '../client/build/', 'index.html'));
});
app.use('/*', express.static(__dirname+"../client/build"));

app.use(function(err, req, res, next) {
    console.log(err);
});
app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;