// export class CreateUserDTO {
//   constructor({ id, name, email, phone }) {
//     this.id = id;
//     this.name = name;
//     this.email = email;
//     this.phone = phone || null;
//   }
// }

export class CreateProductDTO {
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
