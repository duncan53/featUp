const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');

var connection = mongoose.createConnection(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);

const typeSchema = mongoose.Schema(
  {
    value: Number,
    label: String
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js

typeSchema.plugin(autoIncrement.plugin, { model: 'Type', field: 'value' });

module.exports = mongoose.model("Type", typeSchema);
