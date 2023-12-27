const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserData = require("./userModel");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017/Data").then(r => {
    console.log(r);
});

app.get('/getJsonData', (req, res) => {
    UserData.find()
        .then((users) => {
            return res.json(users[0]);
        })
        .catch(err => res.json(err))
});

app.listen(5000, () => {
    console.log('start')
});
