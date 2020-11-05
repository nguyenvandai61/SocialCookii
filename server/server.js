const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index.routes');
const apiRouter = require('./routes/api/index.routes');
const { createUser } = require('./controller/user.controller');
const config = require('./config');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
        // let req = {};
        // req.body = {
        //     "username": "ad",
        //     "password": "123",
        //     "role": "admin"
        // };
        // let res = {};
        // createUser(req, res);
    })
    .catch((error) => {
        console.log(error);
        console.log('Error connecting to database');
    });




if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Listening on port ${port}`));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;