import { sanphamRepository } from "../repositories/sanpham.repository.js";
import { SanPhamDTO } from "../dtos/sanphams/sanpham.dto.js";
import { logger } from "../config/logger.js";

export const sanphamService = {
  getAllsanphams: async () => {
    logger.info("Service: Getting all sanphams");
    const sanphams = await sanphamRepository.getAll();
    return sanphams.map((u) => new SanPhamDTO(u));
  },
  laySanPhamTheoId: async (id) => {
    logger.info(`Service: Đang lấy sản phẩm ID ${id}`);
    const result = await sanphamRepository.laySanPhamTheoId(id);

    if (!result) {
      logger.warn(`Service Warning: Product ${id} not found`);
      throw new Error("Khong tim thay san pham");
    }
    return new SanPhamDTO(result);
  },
  taoSanPham: async (dto) => {
    logger.info(`Service: Creating new product ${dto.id}`);
    const created = await sanphamRepository.taoSanPham(dto);
    return new SanPhamDTO(created);
  },
  updateSanPham: async (id, dto) => {
    logger.info(`Service: Updating sanpham ${id}`);
    const existing = await sanphamRepository.laySanPhamTheoId(id);
    if (!existing) {
      logger.warn(`Service Warning: Cannot update. SanPham ${id} not found`);
      throw new Error("SanPham not found");
    }
    const updated = await sanphamRepository.updateSanPham(id, dto);
    return new SanPhamDTO(updated);
  },
  deleteSanPham: async (id) => {
    logger.info(`Service: Deleting sanpham ${id}`);
    const existing = await sanphamRepository.laySanPhamTheoId(id);
    if (!existing) {
      logger.warn(`Service Warning: Cannot delete. SanPham ${id} not found`);
      throw new Error("Khong tim thay san pham");
    }
    await sanphamRepository.deleteSanPham(id);
    return { message: "SanPham deleted successfully" };
  },
};
