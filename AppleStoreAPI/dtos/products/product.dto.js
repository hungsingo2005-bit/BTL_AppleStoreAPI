// export class UserDTO {
//   constructor({ id, name, email, phone }) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.phone = phone || null;
//   }
// }

export class ProductDTO {
  constructor({ ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName }) {
    this.ProductID = ProductID;
    this.ProductName = ProductName;
    this.Price = Price;
    this.Quantity = Quantity;
    this.Color = Color;
    this.Storage = Storage;
    this.CategoryName = CategoryName;
  }
}