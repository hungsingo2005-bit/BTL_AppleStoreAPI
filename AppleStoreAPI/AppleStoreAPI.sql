CREATE DATABASE AppleStore;
USE AppleStore;

CREATE TABLE Categories (
    CategoryName VARCHAR(100) PRIMARY KEY,
    CategoryID INT
);
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(150),
    Price VARCHAR(30),
    Quantity INT,
    Color VARCHAR(30),
    Storage VARCHAR(30),
    CategoryName VARCHAR(100),
    FOREIGN KEY (CategoryName) REFERENCES Categories(CategoryName)
);
CREATE TABLE Invoices (
    InvoiceID INT PRIMARY KEY,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    TotalAmount INT
);
CREATE TABLE InvoiceDetails (
    InvoiceID INT,
    ProductName varchar(100),
    Quantity INT NOT NULL,
    UnitPrice INT NOT NULL,
    SubTotal INT NOT NULL,
    ProductID INT,
    FOREIGN KEY (InvoiceID) REFERENCES Invoices(InvoiceID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

INSERT INTO Categories (CategoryName, CategoryID) VALUES
('iPhone',1),
('iPad',2),
('MacBook',3),
('Apple Watch',4),
('AirPods',5),
('Accessories',6);

INSERT INTO Products (ProductID, ProductName, Price, Quantity, Color, Storage, CategoryName) VALUES
(1, 'iPhone 12 Pro Max', '12.000.000đ', 10, 'Gold', '128GB', 'iPhone'),
(2, 'iPhone 14 Plus', '14.000.000đ', 15, 'Purple', '128GB', 'iPhone'),
(3, 'iPhone 14 Pro Max', '18.000.000đ', 20, 'Purple', '1TB', 'iPhone'),
(4, 'iPad Pro M5 11 inch', '35.599.000đ', 6, 'Space Black', '256GB', 'iPad'),
(5, 'iPad Air M3 11 inch', '20.889.000đ', 8, 'Space Gray', '64GB', 'iPad'),
(6, 'iPad A16', '14.017.000đ', 8, 'Blue', '64GB', 'iPad'),
(7, 'MacBook Pro M4 13 inch', '26.508.000đ', 4, 'Sky Blue', '512GB', 'MacBook'),
(8, 'MacBook Air M4 15 inch', '31.417.000đ', 7, 'Sky Blue', '256GB', 'MacBook'),
(9, 'MacBook Pro M5 14 inch', '41.999.000đ', 4, 'Space Black', '512GB', 'MacBook'),
(10, 'Apple Watch Series 11', '14.499.000đ', 12, 'Rose Gold Aluminum', NULL, 'Apple Watch'),
(11, 'Apple Watch SE 3', '8.499.000đ', 12, 'Deep Blue Night Aluminum', NULL, 'Apple Watch'),
(12, 'Apple Watch Ultra 3', '23.999.000đ', 12, 'Natural Titanium', NULL, 'Apple Watch'),
(13, 'AirPods Pro 3', '6.799.000đ', 20, 'White', NULL, 'AirPods'),
(14, 'AirPods 4', '4.999.000đ', 50, 'White', NULL, 'AirPods'),
(15, 'AirPods Max', '14.999.000đ', 40, 'Deep Blue Night', NULL, 'AirPods'),
(16, 'day deo cheo', '1.668.000đ', 20, 'Sienna Brown', NULL, 'Accessories'),
(17, 'op lung Silicon MagSafe', '1.403.000đ', 50, 'Smoky purple', NULL, 'Accessories'),
(18, 'bo sac MagSafe 1m', '1.177.000đ', 40, 'White', NULL, 'Accessories');

SELECT * FROM Categories;
SELECT * FROM Products;
SELECT * FROM Products JOIN Categories ON Products.CategoryName = Categories.CategoryName WHERE Categories.CategoryName = 'iPhone';
drop table Categories;
drop table Products;
drop table InvoiceDetails;
drop table Invoices;
delete from Products;
delete from Categories;
drop database AppleStore;
SET SQL_SAFE_UPDATES = 0;