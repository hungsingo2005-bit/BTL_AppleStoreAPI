
import { productService } from "../services/product.service.js";
import { CreateProductDTO } from "../dtos/products/create-product.dto.js";
import { UpdateProductDTO } from "../dtos/products/update-product.dto.js";
import { validateCreateProduct } from "../validators/products/create-product.validator.js";
import { validateUpdateProduct } from "../validators/products/update-product.validator.js";
import { logger } from "../config/logger.js";

export const productController = {
    getAllProducts: async (request, response) => {
        try {
          logger.info("Controller: Đã lấy tất cả sản phẩm");
          const result = await productService.getAllProducts();
          response.json(result);
        } catch (err) {
          logger.error("Controller Error: getAll failed", err);
          response.status(500).json({ message: err.message });
        }
    },

    getByProductId: async (request, response) => {
        const productId = +request.params.productId;
        logger.info(`Controller: Đã lấy sản phẩm ${productId}`);
        try {
          const result = await productService.getByProductId(productId);
          response.json(result);
        } catch (error) {
          logger.error(`Controller Error: getByProductId failed (${productId})`, error);
          response.status(404).json({ message: error.message });
        }
    },
    createProduct: async (req, res) => {
      try {
        logger.info("Controller: POST /product");
        
        // VALIDATE INPUT
        const validData = validateCreateProduct(req.body);
  
        // CREATE DTO
        const dto = new CreateProductDTO(validData);
  
        const user = await productService.createProduct(dto);
        res.status(201).json(user);
      } catch (err) {
        logger.error("Controller Error: create failed", err);
        res.status(400).json({ message: err.message });
      }
    },
    updateProduct: async (req, res) => {
      const id = +req.params.id;
      logger.info(`Controller: PUT /products/${id}`);
  
      try {
        // VALIDATE INPUT
        const validData = validateUpdateProduct(req.body);
  
        // CREATE DTO
        const dto = new UpdateProductDTO(validData);
  
        const result = await productService.updateProduct(id, dto);
        res.json(result);
      } catch (err) {
        logger.error(`Controller Error: update failed (${id})`, err);
        res.status(400).json({ message: err.message });
      }
    },
    deleteProduct: async (req, res) => {
      const id = +req.params.id;
      logger.info(`Controller: DELETE /products/${id}`);
  
      try {
        const result = await productService.deleteProduct(id);
        res.json(result);
      } catch (err) {
        logger.error(`Controller Error: delete failed (${id})`, err);
        res.status(404).json({ message: err.message });
      }
    },

    // productByCategoryName: async (request, response) => {
    //     try {
    //         const categoryName = request.params.categoryName;
    //         const result = await productService.productByCategoryName(categoryName);
    //         response.json(result);
    //     } catch (error) {
    //         response.status(500).json({
    //             message: "Lỗi server",
    //             error: error.message
    //         });
    //     }
    // },
};