const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://amauridev:amauridev1@cluster0.nh6kw.mongodb.net/devRadar?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,


});

app.use(express.json());

app.use(routes);

app.listen(3333);