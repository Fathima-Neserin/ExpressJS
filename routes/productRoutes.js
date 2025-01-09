const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   res.send("All Products");
})

router.get("/details", (req, res) => {
    res.send("Product Details Fetched")

})

// Use Postman

router.post("/", (req, res) => {
    res.send(" Product created")
})

router.put("/", (req, res) => {
    res.send("Product Updated");
})

router.delete("/", (req, res) => {
    res.send("Product Deleted");
})


module.exports = router;