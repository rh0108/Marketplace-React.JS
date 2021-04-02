const router = require('express').Router();
const authController = require('./controllers/authController');
const productController = require('./controllers/productController')
const userController = require('./controllers/userController')
const isAuth = require('./middlewares/isAuth');

router.use('/auth', authController);
router.use('/products', productController);
router.use('/user', userController);


module.exports = router;