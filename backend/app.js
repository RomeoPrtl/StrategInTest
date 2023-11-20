const express = require('express');
const mongoose = require('mongoose');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login')
const usersRoute = require('./routes/users');
const config = require('../config');
const cors = require('cors');


const app = express();
app.use(cors());


mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à notre bdd réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(express.json());
app.use(express.urlencoded({ extended:false}));


app.use('/register', registerRoute);
app.use('/login' , loginRoute);
app.use('/users' , usersRoute);


module.exports = app;