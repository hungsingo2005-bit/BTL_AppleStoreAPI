import { pool } from "../config/database.js";
import { logger } from "../config/logger.js";

export const productRepository = {
    getAllProducts: async () => {
        logger.info("Repository: Đang tải lên tất cả sản phẩm");
        try {
          const database = await pool;
          const [result] = await database.query("SELECT * FROM Products");
          return result;
        } catch (error) {
          logger.error("Repository Error: tải sản phẩm thất bại", error);
          throw error;
        }
    },
    getByProductId: async (productId) => {
        logger.info(`Repository: Đang tải lên sản phẩm ID ${productId}`);
        try {
            const database = await pool;
            const [result] = await database.query("SELECT * FROM Products WHERE ProductID = ?", [productId]);
            return result[0];
        } catch (error) {
            logger.error(`Repository Error: getByProductId failed for ID ${productId}`, error);
            throw error;
        }
    },
    createProduct: async ({ ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName }) => {
        logger.info(`Repository: Creating product ${ProductID}`);
        try {
        const database = await pool;
        await database.query(
            "INSERT INTO Products (ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName]
        );
        return { ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName };
        } catch (error) {
        logger.error("Repository Error: create failed", error);
        throw error;
        }
    },
    updateProduct: async (ProductID, { ProductName, Price, Quantity, Color, Storage, CategoryName }) => {
        logger.info(`Repository: Updating product ${ProductID}`);
        try {
        const db = await pool;
        await db.query(
            "UPDATE Products SET ProductName = ?, Price = ?, Quantity = ?, Color = ?, Storage = ?, CategoryName = ? WHERE ProductID = ?",
            [ProductName, Price, Quantity, Color, Storage, CategoryName, ProductID]
        );
        return { ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName };
        } catch (err) {
        logger.error(`Repository Error: update failed for ID ${ProductID}`, err);
        throw err;
        }
    },
    deleteProduct: async (id) => {
        logger.info(`Repository: Deleting product ${id}`);
        try {
        const db = await pool;
        await db.query("DELETE FROM Products WHERE ProductID = ?", [id]);
        return true;
        } catch (err) {
        logger.error(`Repository Error: delete failed for ID ${id}`, err);
        throw err;
        }
    },
    timkiemtheoten: async (tukhoa) => {
        
    }
};
