import { sanphamService } from "../services/sanpham.service.js";
import { logger } from "../config/logger.js";
import { CreateSanPhamDTO } from "../dtos/sanphams/create-sanpham.dto.js";
import { UpdateSanPhamDTO } from "../dtos/sanphams/update-sanpham.dto.js";
import { validateCreateSanPham } from "../validators/sanphams/create-sanpham.validator.js";
import { validateUpdateSanPham } from "../validators/sanphams/update-sanpham.validator.js";

export const sanphamController = {
  getAllsanphams: async (req, res) => {
    try {
      logger.info("Controller: GET /sanphams");
      const sanphams = await sanphamService.getAllsanphams();
      res.json(sanphams);
    } catch (err) {
      logger.error("Controller Error: getAllsanphams failed", err);
      res.status(500).json({ message: err.message });
    }
  },
  laySanPhamTheoId: async (request, response) => {
    const id = +request.params.id;
    logger.info(`Controller: Đã lấy sản phẩm ${id}`);
    try {
      const result = await sanphamService.laySanPhamTheoId(id);
      response.json(result);
    } catch (error) {
      logger.error(`Controller Error: laySanPhamTheoId failed (${id})`, error);
      response.status(404).json({ message: error.message });
    }
  },
  taoSanPham: async (req, res) => {
    try {
      logger.info("Controller: POST /sanphams");
      // VALIDATE INPUT
      const validData = validateCreateSanPham(req.body);
      // CREATE DTO
      const dto = new CreateSanPhamDTO(validData);
      const result = await sanphamService.taoSanPham(dto);
      res.status(201).json(result);
    } catch (err) {
      logger.error("Controller Error: create failed", err);
      res.status(400).json({ message: err.message });
    }
  },
  updateSanPham: async (req, res) => {
    const id = +req.params.id;
    logger.info(`Controller: PUT /sanphams/${id}`);

    try {
      // VALIDATE INPUT
      const validData = validateUpdateSanPham(req.body);
      // UPDATE DTO
      const dto = new UpdateSanPhamDTO(validData);
      const result = await sanphamService.updateSanPham(id, dto);
      res.json(result);
    } catch (err) {
      logger.error(`Controller Error: update failed (${id})`, err);
      res.status(400).json({ message: err.message });
    }
  },
  deleteSanPham: async (req, res) => {
    const id = +req.params.id;
    logger.info(`Controller: DELETE /sanphams/${id}`);
    try {
      const result = await sanphamService.deleteSanPham(id);
      res.json(result);
    } catch (err) {
      logger.error(`Controller Error: delete failed (${id})`, err);
      res.status(404).json({ message: err.message });
    }
  },
};
