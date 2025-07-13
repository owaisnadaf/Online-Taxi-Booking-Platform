const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");
const userServices = require("../services/userServices");
const blackListTokens = require("../models/blacklistTokenModel");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const hashedPassword = await userModel.hashPassword(password);
   const isUserAlreadyExist = await userModel.findOne({email})
     if(isUserAlreadyExist){
      return res.status(401).json({message:"User already exists"})
     }
  const user = await userServices.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  return res
    .status(200)
    .json({ message: "User Logged in successfully", token, user });
};

module.exports.getProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logout = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token||req.headers.authorization.split(' ')[1]
  await blackListTokens.create({ token });
  res.status(200).json({ message: "Logout successful" });
};
