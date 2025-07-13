const { validationResult } = require("express-validator");
const captainModel = require("../models/captainModel");
const captainServices = require("../services/captainServices");
const blacklistTokenModel = require("../models/blacklistTokenModel");

module.exports.register = async function (req, res, next) {
   const error = validationResult(req)
   if(!error.isEmpty()){
    return res.status(400).json(error.array())
   }
   const { fullname, email, password, vehicle } = req.body;
  
   
   const hashed = await captainModel.hashPassword(password)

   const isCaptainAlreadyExist = await captainModel.findOne({email})
   if(isCaptainAlreadyExist){
    return res.status(401).json({message:"Captain already exists"})
   }
  const captain = await captainServices.createCaptain({
    firstname: fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashed,
    color:vehicle.color,
    vehicleType:vehicle.vehicleType,
    plate:vehicle.plate,
    capacity:vehicle.capacity
  }); 
  const token = await captain.generateAuthToken()
  return res.status(201).json({token,captain});
};

module.exports.login = async function(req,res,next){
  const error = validationResult(req)
  if(!error.isEmpty()){
    return res.status(401).json({error:error.array()})
  }
  const {email,password} = req.body
  
  const captain = await captainModel.findOne({email}).select("+password")
  if(!captain){
    return res.status(401).json({message:"Invalid email or password"})
  }
  const isMatch = await captain.comparePassword(password)
  if(!isMatch){
    return res.status(401).json({message:"Invalid email or password"})
  }
  const token = captain.generateAuthToken()
  res.cookie("token",token)
  return res.status(200).json({message:"Captain Logged in successfully",token,captain})
}

module.exports.profile = async function(req,res,next){
  return res.status(200).json({Captain:req.captain})
}
module.exports.logout = async function(req,res,next){
  const token = req.cookies.token
  
  await blacklistTokenModel.create({token})
  res.clearCookie("token")
  res.status(200).json({message:"Logged out"})
}
