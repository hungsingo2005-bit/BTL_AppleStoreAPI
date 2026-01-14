CREATE DATABASE AppleStore;
USE AppleStore;

CREATE TABLE Users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name NVARCHAR(100),
	email VARCHAR(100),
	password VARCHAR(255),
	phone VARCHAR(20),
	role VARCHAR(50)
);

CREATE TABLE danhmuc (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten_danhmuc VARCHAR(50) NOT NULL
);
CREATE TABLE sanpham (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ten VARCHAR(100) NOT NULL,
    gia INT NOT NULL,
    mausac VARCHAR(50),
    dungluong VARCHAR(50),
    soluong INT,
    danhmuc_id INT,
    FOREIGN KEY (danhmuc_id) REFERENCES danhmuc(id)
);
CREATE TABLE hoadon (
	id INT AUTO_INCREMENT PRIMARY KEY,
    ngaylap DATETIME DEFAULT CURRENT_TIMESTAMP,
    tongtien INT,
    trangthai VARCHAR(50)
);
CREATE TABLE chitiethoadon (
	id INT AUTO_INCREMENT PRIMARY KEY,
    hoadon_id INT,
    sanpham_id VARCHAR(100) NOT NULL,
    soluong INT,
    dongia INT,
    FOREIGN KEY (hoadon_id) REFERENCES hoa(id),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(id)
);

INSERT INTO danhmuc (ten_danhmuc) VALUES
(1, 'iPhone'	 ),
(2, 'iPad'		 ),
(3, 'MacBook'	 ),
(4, 'Apple Watch'),
(5, 'AirPods'	 ),
(6, 'Accessories');

INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
(1, 'iPhone 12 Pro Max', 12000000, 10, 'Gold', '128GB', 1),
(2, 'iPhone 14 Plus', 14000000, 15, 'Purple', '128GB', 1),
(3, 'iPhone 14 Pro Max', 18000000, 20, 'Purple', '1TB', 1);
INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
(4, 'iPad Pro M5 11 inch', 35599000, 6, 'Space Black', '256GB', 2),
(5, 'iPad Air M3 11 inch', 20889000, 8, 'Space Gray', '64GB', 2),
(6, 'iPad A16', 14017000, 8, 'Blue', '64GB', 2);
INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
(7, 'MacBook Pro M4 13 inch', 26508000, 4, 'Sky Blue', '512GB', 3),
(8, 'MacBook Air M4 15 inch', 31417000, 7, 'Sky Blue', '256GB', 3),
(9, 'MacBook Pro M5 14 inch', 41999000, 4, 'Space Black', '512GB', 3);
INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
(10, 'Apple Watch Series 11', 14499000, 12, 'Rose Gold Aluminum', NULL, 4),
(11, 'Apple Watch SE 3', 8499000, 12, 'Deep Blue Night Aluminum', NULL, 4),
(12, 'Apple Watch Ultra 3', 23999000, 12, 'Natural Titanium', NULL, 4);
INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
(13, 'AirPods Pro 3', 6799000, 20, 'White', NULL, 5),
(14, 'AirPods 4', 4999000, 50, 'White', NULL, 5),
(15, 'AirPods Max', 14999000, 40, 'Deep Blue Night', NULL, 5);
INSERT INTO sanpham (id, ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
(16, 'Dây đeo chéo', 1668000, 20, 'Sienna Brown', NULL, 6),
(17, 'Ốp lưng Silicon MagSafe', 1403000, 50, 'Smoky Purple', NULL, 6),
(18, 'Bộ sạc MagSafe 1m', 1177000, 40, 'White', NULL, 6);


SELECT * FROM danhmuc;
SELECT * FROM sanpham;
SELECT  sanpham.id,
		sanpham.ten,
        sanpham.gia,
        sanpham.mausac,
        sanpham.dungluong,
        sanpham.soluong,
        danhmuc.ten_danhmuc FROM sanpham JOIN danhmuc ON sanpham.danhmuc_id = danhmuc.id;
SELECT  sanpham.id,
		sanpham.ten,
        sanpham.gia,
        sanpham.mausac,
        sanpham.dungluong,
        sanpham.soluong,
        danhmuc.ten_danhmuc FROM sanpham JOIN danhmuc
        ON sanpham.danhmuc_id = danhmuc.id WHERE danhmuc.ten_danhmuc = "iPhone";
Select * from hoadon;
drop table danhmuc;
drop table sanpham;
drop table hoadon;
drop table chitiethoadon;
delete from Products;
delete from Categories;
drop database AppleStore;
SET SQL_SAFE_UPDATES = 0;