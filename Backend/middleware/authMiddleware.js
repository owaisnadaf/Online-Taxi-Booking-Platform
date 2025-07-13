const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistTokenModel");
const captainModel = require("../models/captainModel");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token||req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  const blackListToken = await blacklistTokenModel.findOne({ token: token });
  if (blackListToken) {
    return res.status(401).json({ message: "Unauthorized user" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized user" });
  }
};

module.exports.authCaptain = async function (req, res, next) {
    const token = req.cookies.token||req.headers.authorization.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: "Unauthorized captain " });
  }
  const blackListed = await blacklistTokenModel.findOne({ token: token });

  if (blackListed) {
    return res.status(401).json({ message: "Unauthorized captain" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);

    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized captain" });
  }
};
