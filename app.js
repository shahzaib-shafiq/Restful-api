const express = require("express");
const app = express();
const productsRouter = require("./api/routes/products"); // Adjust path as necessary

app.use("/products", productsRouter);

// Other middlewares and routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
