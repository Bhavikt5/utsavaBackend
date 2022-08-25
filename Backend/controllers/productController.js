const Product = require("../models/productModel"); // imported from product model (Scehma model)
const ErrorHandler = require("../utils/errorhandler"); // ErrorHander will Send Error Message
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); // catchAsyncError will try catch asynce function
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

// Create Product -------- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "utsavaa",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  // req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    // 201 - Created
    success: true,
    product,
  });
});

// Update Product---------- Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      // 500 - Internal Server Error
      success: false,
      message: "Product not found",
    });
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "ustavaa",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    // Find Product by id and update the Product
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// Get All Products -- Read -- Admin
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find(); // find() will find all the products in database and json will convert data and show products

  res.status(200).json({
    // 200 - OK
    success: true,
    products,
  });
});

// Delete Product ----- Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id); // Find Product by Id

  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); // 404 - Not Found
  }

  // delete images from cloudinary
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  await product.remove(); /// Remove Product from Database

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id); // Find Product by Id

  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); // 404 - Not Found
  }

  res.status(200).json({
    // 200 - OK
    success: true,
    product,
  });
});

// Get All Products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  // Number of result to view Per Page
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments(); // .countDocuments function will count number of products create by product model or number of products in mongo database
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  let products = await apiFeature.query; // find() will find all the products in database and json will convert data and show products

  res.status(200).json({
    // 200 - OK
    success: true,
    productsCount,
    resultPerPage,
    products,
  });
});

// Get All Products -- HOME
exports.getAllProductsHome = catchAsyncErrors(async (req, res, next) => {
  const totalProductsCount = await Product.countDocuments(); // .countDocuments function will count number of products create by product model or number of products in mongo database
  const apiFeature = new ApiFeatures(Product.find(), req.query);

  let totalProductsList = await apiFeature.query; // find() will find all the products in database and json will convert data and show products

  res.status(200).json({
    // 200 - OK
    success: true,
    totalProductsCount,
    totalProductsList,
  });
});

// Crystals List
exports.getAllProductsByCategory = catchAsyncErrors(async (req, res, next) => {
  // Number of result to view Per Page

  const productsCount = await Product.countDocuments({ category: "Crystals" }); // .countDocuments function will count number of products

  const apiFeature = new ApiFeatures(
    Product.find({ category: "Crystals" }),
    req.query
  );

  let productCrystals = await apiFeature.query;

  res.status(200).json({
    // 200 - OK
    success: true,
    productsCount,
    productCrystals,
  });
});

// Bracelets List
exports.getAllBracelets = catchAsyncErrors(async (req, res, next) => {
  // Number of result to view Per Page

  const productsCount = await Product.countDocuments({ category: "Bracelets" }); // .countDocuments function will count number of products

  const apiFeature = new ApiFeatures(
    Product.find({ category: "Bracelets" }),
    req.query
  );

  let productBracelets = await apiFeature.query;

  res.status(200).json({
    // 200 - OK
    success: true,
    productsCount,
    productBracelets,
  });
});

// Malas List
exports.getAllMalas = catchAsyncErrors(async (req, res, next) => {
  // Number of result to view Per Page

  const productsCount = await Product.countDocuments({ category: "Malas" }); // .countDocuments function will count number of products

  const apiFeature = new ApiFeatures(
    Product.find({ category: "Malas" }),
    req.query
  );

  let productMalas = await apiFeature.query;

  res.status(200).json({
    // 200 - OK
    success: true,
    productsCount,
    productMalas,
  });
});

// Create New Review or Update the Review  --- 3.50hours
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
