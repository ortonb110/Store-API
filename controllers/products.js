const Products = require('../models/product');
//Get all products 

const getAllProductsStatic = async (req, res) => {
    const products = await Products.find({name: 'vase table'});
    res.status(200).json({msg: products, nbHits: products.length})
}
const getAllProducts = async(req, res) => {
    console.log(req.query);
    res.status(200).json({msg: "Products route"})
}

module.exports = {getAllProducts, getAllProductsStatic}