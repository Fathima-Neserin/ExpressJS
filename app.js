const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

 app.get("/", (req, res) => {
    //  res.send("Hello World, It's me Fathima Nezrin, Welcome to Home Page");
     res.sendFile(path.join(__dirname, "home.html")) ;
})
// app.get("/", (req, res) => {
//     res.send("<h1>Fathima Nezrin</h1>")
// })

// Product route
app.get("/product", (req, res) => {
    // res.send("Product Page");
    res.sendFile(path.join(__dirname, "product.html"));
})

// Contact route
app.get("/contact", (req, res) => {
    // res.send("Contact Page");
    res.sendFile(path.join(__dirname, "contact.html"));
})

// About route
app.get("/about", (req, res) => {
    // res.send("Aboutt Page");
    res.sendFile(path.join(__dirname, "about.html"));

})
// Only get request is supported in web browser.remaining will be support in postman tool.

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    
})