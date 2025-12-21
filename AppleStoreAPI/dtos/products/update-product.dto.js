// export class UpdateUserDTO {
//   constructor({ name, email, phone }) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone || null;
//   }
// }

export class UpdateProductDTO {
  constructor({ ProductName, Price, Quantity, Color, Storage, CategoryName }) {
    this.ProductName = ProductName;
    this.Price = Price;
    this.Quantity = Quantity;
    this.Color = Color;
    this.Storage = Storage;
    this.CategoryName = CategoryName;
  }
}
