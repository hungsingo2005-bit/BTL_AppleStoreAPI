import { danhmucService } from "../../services/danhmucs/danhmuc.service.js";
import { logger } from "../../config/logger.js";

export const danhmucController = {
  getAllDanhmucs: async (req, res) => {
    try {
      logger.info("Controller: GET /danhmucs");
      const danhmucs = await danhmucService.getAllDanhmucs();
      res.json(danhmucs);
    } catch (err) {
      logger.error("Controller Error: getAllDanhmucs failed", err);
      res.status(500).json({ message: err.message });
    }
  },
  layDanhMucTheoId: async (request, response) => {
    const id = +request.params.id;
    logger.info(`Controller: Đã lấy danh mục ${id}`);
    try {
      const result = await danhmucService.layDanhMucTheoId(id);
      response.json(result);
    } catch (error) {
      logger.error(`Controller Error: layDanhMucTheoId failed (${id})`, error);
      response.status(404).json({ message: error.message });
    }
  },
  layDanhMucTheoTen: async (request, response) => {
    const name = request.params.name;
    logger.info(`Controller: Đã lấy danh mục tên ${name}`);
    try {
      const result = await danhmucService.layDanhMucTheoTen(name);
      response.json(result);
    } catch (error) {
      logger.error(`Controller Error: layDanhMucTheoTen failed (${name})`, error);
      response.status(404).json({ message: error.message });
    }
  },
}   