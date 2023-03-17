const express = require("express");
const {
    registerUser,
    
    loginUser,
    createLikedMovie,
    getLikedMovies,
    deleteLikedMovie
  

} = require("../userController/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/liked/:id").post(createLikedMovie);

router.route("/liked/:id").get(getLikedMovies);

router.route("/liked").delete(deleteLikedMovie);

module.exports = router;
