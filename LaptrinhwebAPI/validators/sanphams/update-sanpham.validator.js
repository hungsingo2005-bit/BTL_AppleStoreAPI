import { z } from "zod";

export const updateSanPhamSchema = z.object({
  ten: z.string({ required_error: "Ten is required" }).max(255),
  gia: z.number().int().positive(),
  mausac: z.string({ required_error: "MauSac is required" }).max(255),
  dungluong: z.string({ required_error: "DungLuong is required" }).max(255),
  soluong: z.number().int().positive(),
  danhmuc_id: z.number({ required_error: "MaDanhMuc is required" }),
  hinh_anh: z.string({ required_error: "HinhAnh is required" }).max(255),
});

export function validateUpdateSanPham(data) {
  return updateSanPhamSchema.parse(data);
}
