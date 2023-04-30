const {getAllProducts, getAllProductsStatic} = require('../controllers/products')
const router = require('express').Router();

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);





module.exports = router;