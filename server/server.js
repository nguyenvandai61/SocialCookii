const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index.routes');
const apiRouter = require('./routes/api/index.routes');
const config = require('./config');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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



app.use(express.static("../client/build"));
// app.use(express.static('../client/build'));
// Handle React routing, return all requests to React app
console.log("production")
app.get('/*', function (req, res) {
    res.sendFile('index.html');
});
app.listen(port, () => console.log(`Listening on port ${port}`));


module.exports = app;