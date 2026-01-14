import { pool } from "../../config/database.js";
import { logger } from "../../config/logger.js";

export const danhmucRepository = {
  getAll: async () => {
    logger.info("Repository: Fetching all danhmucs");
    try {
      const db = await pool;
      const [rows] = await db.query(`SELECT danhmuc.id, danhmuc.ten_danhmuc FROM danhmuc;`);
      return rows;
    } catch (err) {
      logger.error("Repository Error: getAll failed", err);
      throw err;
    }
  },
  layDanhMucTheoId: async (id) => {
    logger.info(`Repository: Đang tải lên danh mục ID ${id}`);
    try {
      const database = await pool;
      const [result] = await database.query(`SELECT   sanpham.id,
                                                      sanpham.ten,
                                                      sanpham.gia,
                                                      sanpham.mausac,
                                                      sanpham.dungluong,
                                                      sanpham.soluong,
                                                      danhmuc.ten_danhmuc FROM sanpham JOIN danhmuc
                                                      ON sanpham.danhmuc_id = danhmuc.id WHERE danhmuc.id = ?`, [id]);
      return result;
    } catch (error) {
      logger.error(`Repository Error: getByDanhMucId failed for ID ${id}`, error);
      throw error;
    }
  },
  layDanhMucTheoTen: async (name) => {
    logger.info(`Repository: Đang tải lên danh mục tên ${name}`);
    try {
      const database = await pool;
      const [result] = await database.query(`SELECT   sanpham.id,
                                                      sanpham.ten,
                                                      sanpham.gia,
                                                      sanpham.mausac,
                                                      sanpham.dungluong,
                                                      sanpham.soluong,
                                                      danhmuc.ten_danhmuc FROM sanpham JOIN danhmuc
                                                      ON sanpham.danhmuc_id = danhmuc.id WHERE sanpham.ten = ?`, [name]);
      return result;
    } catch (error) {
      logger.error(`Repository Error: getByDanhMucId failed for ID ${name}`, error);
      throw error;
    }
  },
}