import { pool } from "../config/database.js";
import { logger } from "../config/logger.js";

export const sanphamRepository = {
  getAll: async () => {
    logger.info("Repository: Fetching all sanphams");
    try {
      const db = await pool;
      const [rows] = await db.query(`SELECT   sanpham.id,
                                              sanpham.ten,
                                              sanpham.gia,
                                              sanpham.mausac,
                                              sanpham.dungluong,
                                              sanpham.soluong,
                                              sanpham.hinh_anh,
                                              danhmuc.ten_danhmuc
                                              FROM sanpham JOIN danhmuc ON sanpham.danhmuc_id = danhmuc.id;`);
      return rows;
    } catch (err) {
      logger.error("Repository Error: getAll failed", err);
      throw err;
    }
  },
  laySanPhamTheoId: async (id) => {
    logger.info(`Repository: Đang tải lên sản phẩm ID ${id}`);
    try {
      const database = await pool;
      const [result] = await database.query(`SELECT   sanpham.id,
                                              sanpham.ten,
                                              sanpham.gia,
                                              sanpham.mausac,
                                              sanpham.dungluong,
                                              sanpham.soluong,
                                              sanpham.hinh_anh,
                                              danhmuc.ten_danhmuc
                                              FROM sanpham JOIN danhmuc ON sanpham.danhmuc_id = danhmuc.id WHERE sanpham.id = ?`, [id]);
      return result[0];
    } catch (error) {
      logger.error(`Repository Error: getByProductId failed for ID ${id}`, error);
      throw error;
    }
  },
  taoSanPham: async ({ id, ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh }) => {
    logger.info(`Repository: Creating sanpham ${id}`);
    try {
    const database = await pool;
    await database.query(
      "INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [id, ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh]
    );
    return { id, ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh };
    } catch (error) {
      logger.error("Repository Error: create failed", error);
      throw error;
    }
  },
  updateSanPham: async (id, { ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh }) => {
    logger.info(`Repository: Updating sanpham ${id}`);
    try {
    const db = await pool;
    await db.query(
      "UPDATE sanpham SET ten = ?, gia = ?, soluong = ?, mausac = ?, dungluong = ?, danhmuc_id = ?, hinh_anh = ? WHERE id = ?",
      [ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh, id]
    );
    return { id, ten, gia, soluong, mausac, dungluong, danhmuc_id, hinh_anh };
    } catch (err) {
      logger.error(`Repository Error: update failed for ID ${id}`, err);
      throw err;
    }
  },
  deleteSanPham: async (id) => {
    logger.info(`Repository: Deleting sanphams ${id}`);
    try {
      const db = await pool;
      await db.query("DELETE FROM sanpham WHERE sanpham.id = ?", [id]);
      return true;
    } catch (err) {
      logger.error(`Repository Error: delete failed for ID ${id}`, err);
      throw err;
    }
  },
};
