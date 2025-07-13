const captainModel = require("../models/captainModel");

module.exports.createCaptain = async function ({
  firstname,
  lastname,
  email,
  password,
  color,
  vehicleType,
  plate,
  capacity,
}) {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !vehicleType ||
    !plate ||
    !capacity
  ) {
    throw new Error("All fields are required");
  }
  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      vehicleType,
      capacity,
      plate,
      color,
    },
  });
  return captain;
};
