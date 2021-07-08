const mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
const config = require('../config.json');

var connection = mongoose.createConnection(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(connection);

const userSchema = mongoose.Schema({
  value: Number,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  type: {type: mongoose.Schema.Types.ObjectId, ref: 'Type', required: true},
  pseudo: { type: String, required: true, unique: true  },
  featUpPlus: { type: Boolean, default: false },
  image: { type: String, default: "/images/defaultUser.png" },
  style: [{type: mongoose.Schema.Types.ObjectId, ref: 'Style'}]
  },
  { timestamps: true }
);


userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'value' });
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", userSchema);
