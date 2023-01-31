exports.getProducts = async (req, res, next) => {
  //console.log("Someone reached the base products route.");
  res.send("This is the route for getting products.");
};

exports.postNewProduct = async (req, res, next) => {
  //console.log("Someone reached the add products route.");
  res.send("This is the route for adding a new product.");
};

exports.patchProduct = async (req, res, next) => {
  //console.log("Someone reached the patch products route.");
  res.send("This is the route for updating a product.");
};

exports.deleteProduct = async (req, res, next) => {
  //console.log("Someone reached the delete products route.");
  res.send("This is the route for removing a product");
};

exports.getProductCount = async (req, res, next) => {
  //console.log("Someone reached the count products route.");
  res.send("This route gets the total count of products in the database.");
};
