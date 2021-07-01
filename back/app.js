const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');

const config = require('./config.json');

const userRoutes = require('./routes/user');
const musicRoutes = require('./routes/music');
const playlistRoutes = require('./routes/playlist');
const colabRoutes = require('./routes/colab');
const typeRoutes = require('./routes/type');
const styleRoutes = require('./routes/style');

const app = express();

mongoose.connect(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/files', express.static(path.join(__dirname, 'files')));

app.use('/api/auth', userRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/playlist', playlistRoutes);
app.use('/api/colab', colabRoutes);
app.use('/api/type', typeRoutes);
app.use('/api/style', styleRoutes);

module.exports = app;
