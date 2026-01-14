import { danhmucRepository } from "../../repositories/danhmucs/danhmuc.repository.js";
import { DanhMucDTO } from "../../dtos/danhmucs/danhmuc.dto.js";
import { logger } from "../../config/logger.js";

export const danhmucService = {
  getAllDanhmucs: async () => {
    logger.info("Service: Getting all danhmucs");
    const danhmucs = await danhmucRepository.getAll();
    return danhmucs.map((u) => new DanhMucDTO(u));
  },
  layDanhMucTheoId: async (id) => {
    logger.info(`Service: Đang lấy danh mục ID ${id}`);
    const result = await danhmucRepository.layDanhMucTheoId(id);

    if (result.length === 0) {
      logger.warn(`Service Warning: Danh mục ${id} not found`);
      throw new Error("Khong tim thay danh muc so " + id);
    }
    return result; // ✅ trả mảng
  },
  layDanhMucTheoTen: async (name) => {
    logger.info(`Service: Đang lấy danh mục tên ${name}`);
    const result = await danhmucRepository.layDanhMucTheoTen(name);

    if (result.length === 0) {
      logger.warn(`Service Warning: Danh mục ${name} not found`);
      throw new Error("Khong tim thay danh muc so " + name);
    }
    return result; // ✅ trả mảng
  },
}