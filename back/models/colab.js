const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');

var connection = mongoose.createConnection(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);

const colabSchema = mongoose.Schema({
  value: Number,
  genre: String,
  type: String,
  role: String,
  location: String,
  description: String,
  isFinish: { type: Boolean, default: false },
  isPrivate: { type: Boolean, default: false },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  response: [{
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message: String
  }]
  },
  { timestamps: true }
);


colabSchema.plugin(autoIncrement.plugin, { model: 'Colab', field: 'value' });
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Colab", colabSchema);
