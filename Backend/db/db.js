const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((er) => console.log(err));
};

module.exports = connect;
