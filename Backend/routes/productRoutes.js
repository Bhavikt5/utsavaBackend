const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getAdminProducts,
  getProductReviews,
  deleteReview,
  getAllProductsByCategory,
  getAllProductsHome,
  getAllBracelets,
  getAllMalas,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// Make a Router for route
const router = express.Router(); // This will help to Create Router Routes

// Common Route
router.route("/products").get(getAllProducts); // Get All product details
router.route("/product/:id").get(getProductDetails); // Get Single Product details
router.route("/products/crystals").get(getAllProductsByCategory);
router.route("/products/lists").get(getAllProductsHome);
router.route("/products/bracelets").get(getAllBracelets);
router.route("/products/malas").get(getAllMalas);

//Admin route
router.route("/admin/product/new").post(createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router; // exporting router
