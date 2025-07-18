const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expries: 86400,
  },
});

module.exports = mongoose.model("blackListTokens", blackListTokenSchema);
