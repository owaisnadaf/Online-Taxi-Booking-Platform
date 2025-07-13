const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controller/captainController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",(req,res)=>{
  res.send("Captain page")
})

router.post(
  "/register",
  [body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("Firstname must be atleast 3 characters long"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("color must be atleast 6 characters long"),
  body("vehicle.plate")
    .isLength({ min: 6 })
    .withMessage("Plate must be atleast 6 characters long"),
  body("vehicle.capacity")
    .isInt({ min: 1 })
    .withMessage("Capacity must be atleast 1"),
  body("vehicle.vehicleType")
    .isIn(["car", "motorcycle", "auto"])
    .withMessage("Invalid Vehicle")],
  captainController.register
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Inavlid email"),
  body("password")
    .isLength(6)
    .withMessage("Password must be atleast 6 characters long"),
  captainController.login
);

router.get("/profile", authMiddleware.authCaptain, captainController.profile);

router.get("/logout", authMiddleware.authCaptain, captainController.logout);
module.exports = router;
