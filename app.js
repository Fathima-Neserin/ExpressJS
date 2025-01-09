const express = require("express");
const app = express();
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = 3000;


 app.get("/", (req, res) => {
    //  res.send("Hello World, It's me Fathima Nezrin, Welcome to Home Page");
     res.sendFile(path.join(__dirname, "home.html")) ;
})

app.get("/flights/:from-:to", (req, res) => {
    res.send(`Flights from ${req.params.from} to ${req.params.to}`);
});

app.get("/location/:city-:dist-:state", (req, res) => {
    res.send(`Coming from ${req.params.city}, ${req.params.dist}, ${req.params.state}`);
});


// app.get("/", (req, res) => {
//     res.send("<h1>Fathima Nezrin</h1>")
// })

// Product route
// app.get("/product", (req, res) => {
//     // res.send("Product Page");
//     res.sendFile(path.join(__dirname, "product.html"));
// })

// Contact route
// app.get("/contact", (req, res) => {
//     // res.send("Contact Page");
//     res.sendFile(path.join(__dirname, "contact.html"));
// })

// About route
// app.get("/about", (req, res) => {
//     // res.send("Aboutt Page");
//     res.sendFile(path.join(__dirname, "about.html"));

// })
// Only get request is supported in web browser.remaining will be support in postman tool.

// download the image file
app.get("/download", (req, res) => {
    res.download(path.join(__dirname, "public/images/Persian.webp"));
})
// app.use(express.static(path.join(__dirname, "public")));
app.use("/product", productRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    
})