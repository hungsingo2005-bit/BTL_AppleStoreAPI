import { z } from "zod";

export const updateProductSchema = z.object({
  ProductName: z.string(),
  Price: z.string(),
  Quantity: z.number(),
  Color: z.string(),
  Storage: z.string(),
  CategoryName: z.string(),
});

export function validateUpdateProduct(data) {
  return updateProductSchema.parse(data);
}
