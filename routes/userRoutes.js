const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("User Profile")

})

// Use Postman

router.post("/newUser", (req, res) => {
    res.send("Profile created")
})

router.put("/editUser", (req, res) => {
    res.send("Profile Updated");
})

router.delete("/deleteUser", (req, res) => {
    res.send("Profile Deleted");
})

module.exports = router