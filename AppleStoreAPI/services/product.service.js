// product.service.js
import { productRepository } from "../repositories/product.repository.js";
import { ProductDTO } from "../dtos/products/product.dto.js";
import { logger } from "../config/logger.js";

export const productService = {
    getAllProducts: async () => {
        logger.info("Service: Đang lấy tất cả sản phẩm");
        const result = await productRepository.getAllProducts();
        return result.map((p) => new ProductDTO(p));
    },
    getByProductId: async (ProductID) => {
        logger.info(`Service: Đang lấy sản phẩm ID ${ProductID}`);
        const result = await productRepository.getByProductId(ProductID);

        if (!result) {
          logger.warn(`Service Warning: Product ${ProductID} not found`);
          throw new Error("Khong tim thay san pham");
        }
        return new ProductDTO(result);
    },
    createProduct: async (dto) => {
        logger.info(`Service: Creating new product ${dto.ProductID}`);
        const created = await productRepository.createProduct(dto);
        return new ProductDTO(created);
    },

    updateProduct: async (id, dto) => {
        logger.info(`Service: Updating product ${id}`);

        const existing = await productRepository.getByProductId(id);
        if (!existing) {
            logger.warn(`Service Warning: Cannot update. Product ${id} not found`);
            throw new Error("Product not found");
        }

        const updated = await productRepository.updateProduct(id, dto);
        return new ProductDTO(updated);
    },

    deleteProduct: async (id) => {
        logger.info(`Service: Deleting product ${id}`);

        const existing = await productRepository.getByProductId(id);
        if (!existing) {
            logger.warn(`Service Warning: Cannot delete. Product ${id} not found`);
            throw new Error("Product not found");
        }

        await productRepository.deleteProduct(id);
        return { message: "Product deleted successfully" };
    },
};
