const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Firstname should be atleast 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Lastname should be atleast 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
    minLength: [6, "email must be atleast 6 characters long"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Passwrod must be atleast 6 characters long"],
    select:false
  },
  socketID: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required:true,
      minlength:[3,"Color must be atleast 3 characters long"]
    },
    plate: {
      type: String,
      required:true,
      minlength:[3,"plate number must be atleast 3 characters long"]
    },
    capacity: {
      type: Number,
       required:true,
      minLength: [1, "Capacity of the vehicle should be atleast 1"],
    },
    vehicleType:{
        type:String,
        required:true,
        enum:["car","motorcycle","auto"]
    }
  },
  location:{
    lat:{
        type:Number,
    },
    long:{
     type:Number
    }
  }
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:"24h"})
  return token;
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password,this.password);
};

const captainModel = mongoose.model("captains", captainSchema);
module.exports = captainModel;
