const express = require('express')

const router = express.Router()

const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const authToken = require('../middleware/authToken')
const userDetailsController = require('../controller/user/userDetails')
const userLogoutController = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const uploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProductOne = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details", authToken, userDetailsController)
router.get("/userLogout", userLogoutController)

// Admin Panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

// Product
router.post("/upload-product",authToken,uploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProductSingle", getCategoryProductOne)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)


module.exports = router;