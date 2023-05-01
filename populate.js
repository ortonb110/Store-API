require("dotenv").config();
const jsonProducts = require("./products.json");
const Products = require("./models/product");
const connectDB = require("./db/connect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Products.deleteMany();
    await Products.create(jsonProducts);
    process.exit(0);
    console.log("Success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
