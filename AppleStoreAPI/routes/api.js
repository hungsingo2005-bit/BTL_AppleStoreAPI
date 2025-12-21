import { Router } from "express";
//import { userController } from "../controllers/user.controller.js";
import { productController } from "../controllers/product.controller.js";
// import { categoryController } from "../controllers/category.controller.js";

const router = Router();

// ----------------------- USERS -------------------------------------
// router.get("/users", userController.getAllUsers);
// router.get("/users/:id", userController.getById);
// router.post("/users", userController.create);
// router.put("/users/:id", userController.update);
// router.delete("/users/:id", userController.delete);



// ----------------------- Apple Store -------------------------------------
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getByProductId);
// router.get("/products/categories/:categoryName", productController.productByCategoryName);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

// router.get("/products/:id", productController.getById);
// router.post("/products", productController.create);
// router.put("/products/:id", productController.update);
// router.delete("/products/:id", productController.delete);

// ----------------------- Categories -------------------------------------
// router.get("/categories", categoryController.getAllCategory);
export default router;
