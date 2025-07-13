const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS2;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;
  try {
    const response = await axios.get(url);

    if (response.data.status == "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Unable to fetch  coordinate");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports.getDistanceTime = async (origin, destination) => {
   
    
  if (!origin || !destination) {
    throw new Error("Origin and destination is required");
  }

  const apiKey = process.env.GOOGLE_MAPS2;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origin=${encodeURIComponent}(
    address
  )}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    console.log(response);
    
    if (response.data.status == "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes Found");
      }
      return response.data.rows[0].elements[0];
    } else {
      throw new Error("Unable to fetch distance and time");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
