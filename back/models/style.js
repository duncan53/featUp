const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');

var connection = mongoose.createConnection(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);

const styleSchema = mongoose.Schema(
  {
    value: Number,
    label: String
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js

styleSchema.plugin(autoIncrement.plugin, { model: 'Style', field: 'value' });

module.exports = mongoose.model("Style", styleSchema);
