import { z } from "zod";

export const createProductSchema = z.object({
  ProductID: z.number(),
  ProductName: z.string(),
  Price: z.string(),
  Quantity: z.number(),
  Color: z.string(),
  Storage: z.string(),
  CategoryName: z.string(),
});

export function validateCreateProduct(data) {
  return createProductSchema.parse(data);
}
