const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [
        3,
        "The length of the firstname should be a minimum of 3 characters long",
      ],
    },
    lastname: {
      type: String,
      minlength: [
        3,
        "The length of lastname should be minimum of 3 characters long",
      ],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "The email should be a minimum of 5 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketID: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
