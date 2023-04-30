const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
//async errors
//Setting up JSON middleware
app.use(express.json());
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const Router = require("./routes/products");

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Store Api</h1><a href='/api/v1/product'>Products Routes</a>");
});

app.use("/api/v1/products", Router);

//Products
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (error) {
    console.log(
      "There was an error starting the server please try again later!"
    );
    console.log(error);
  }
};

start();
