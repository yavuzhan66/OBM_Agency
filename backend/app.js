const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const RouteProducts = require('./router/product');
const ejs = require('ejs');


mongoose.connect('mongodb+srv://obmagency:thewarriors@cluster0.3apnmqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log("Connexion Réussi !");
}).catch((error) => {
  console.log("Connexion Echouée")
});


app.use(bodyParser.json());
app.use('/api/products/', RouteProducts);














module.exports = app;


