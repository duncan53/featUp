const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');

var connection = mongoose.createConnection(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);

const playlistSchema = mongoose.Schema({
  value: Number,
  Label: String,
  isPrivate: { type: Boolean, default: true },
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  music: [{type: mongoose.Schema.Types.ObjectId, ref: 'Music'}]
  },
  { timestamps: true }
);


playlistSchema.plugin(autoIncrement.plugin, { model: 'Playlist', field: 'value' });
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Playlist", playlistSchema);
