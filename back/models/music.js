const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');

var connection = mongoose.createConnection(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);

const musicSchema = mongoose.Schema(
  {
    key: Number,
    name: String,
    cover: String,
    musicSrc: String,
    singer: String,
    like: {type: Number, default: 0},
    view: {type: Number, default: 0},
    isPrivate: {type: Boolean, default: false},
    userOwner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    style: [{type: mongoose.Schema.Types.ObjectId, ref: 'Style'}],
    feat: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
  },
  { timestamps: true }
);
// export the new Schema so we could modify it using Node.js

musicSchema.plugin(autoIncrement.plugin, { model: 'Music', field: 'key' });

module.exports = mongoose.model("Music", musicSchema);
