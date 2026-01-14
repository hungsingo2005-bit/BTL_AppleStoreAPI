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
    sanpham_id INT,
    soluong INT,
    gia INT,
    FOREIGN KEY (hoadon_id) REFERENCES hoadon(id),
    FOREIGN KEY (sanpham_id) REFERENCES sanpham(id)
);

INSERT INTO danhmuc (ten_danhmuc) VALUES
('iPhone'	 ),
('iPad'		 ),
('MacBook'	 ),
('Apple Watch'),
('AirPods'	 ),
('Accessories');

INSERT INTO sanpham (ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
('iPhone 12 Pro Max', 12000000, 10, 'Gold', '128GB', 1),
('iPhone 14 Plus', 14000000, 15, 'Purple', '128GB', 1),
('iPhone 14 Pro Max', 18000000, 20, 'Purple', '1TB', 1);
INSERT INTO sanpham (ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
('iPad Pro M5 11 inch', 35599000, 6, 'Space Black', '256GB', 2),
('iPad Air M3 11 inch', 20889000, 8, 'Space Gray', '64GB', 2),
('iPad A16', 14017000, 8, 'Blue', '64GB', 2);
INSERT INTO sanpham (ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
('MacBook Pro M4 13 inch', 26508000, 4, 'Sky Blue', '512GB', 3),
('MacBook Air M4 15 inch', 31417000, 7, 'Sky Blue', '256GB', 3),
('MacBook Pro M5 14 inch', 41999000, 4, 'Space Black', '512GB', 3);
INSERT INTO sanpham (ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
('Apple Watch Series 11', 14499000, 12, 'Rose Gold Aluminum', NULL, 4),
('Apple Watch SE 3', 8499000, 12, 'Deep Blue Night Aluminum', NULL, 4),
('Apple Watch Ultra 3', 23999000, 12, 'Natural Titanium', NULL, 4);
INSERT INTO sanpham (ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
('AirPods Pro 3', 6799000, 20, 'White', NULL, 5),
('AirPods 4', 4999000, 50, 'White', NULL, 5),
('AirPods Max', 14999000, 40, 'Deep Blue Night', NULL, 5);
INSERT INTO sanpham (ten, gia, soluong, mausac, dungluong, danhmuc_id) VALUES
('Dây đeo chéo', 1668000, 20, 'Sienna Brown', NULL, 6),
('Ốp lưng Silicon MagSafe', 1403000, 50, 'Smoky Purple', NULL, 6),
('Bộ sạc MagSafe 1m', 1177000, 40, 'White', NULL, 6);

ALTER TABLE sanpham
ADD COLUMN hinh_anh VARCHAR(255);

UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone12promax.png' WHERE sanpham.ten = 'iPhone 12 Pro Max';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone13pro.png' WHERE sanpham.ten = 'iPhone 13 Pro';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone13promax.png' WHERE sanpham.ten = 'iPhone 13 Pro Max';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone14plus.png' WHERE ten = 'iPhone 14 Plus';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone14promax.png' WHERE ten = 'iPhone 14 Pro Max';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone15promax.png' WHERE sanpham.ten = 'iPhone 15 Pro Max';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/iphone16promax.png' WHERE sanpham.ten = 'iPhone 16 Pro Max';

UPDATE sanpham SET hinh_anh = 'imagesMySQL/ipadair.png' WHERE ten = 'iPad Air M3 11 inch';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/ipadpro.png' WHERE ten = 'iPad Pro M5 11 inch';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/ipada16.png' WHERE ten = 'iPad A16';

UPDATE sanpham SET hinh_anh = 'imagesMySQL/macbookpro13.png' WHERE ten = 'MacBook Pro M4 13 inch';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/macbookair15.png' WHERE ten = 'MacBook Air M4 15 inch';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/macbookpro14.png' WHERE ten = 'MacBook Pro M5 14 inch';

UPDATE sanpham SET hinh_anh = 'imagesMySQL/applewatch11.png' WHERE ten = 'Apple Watch Series 11';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/applewatchse3.png' WHERE ten = 'Apple Watch SE 3';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/applewatchultra3.png' WHERE ten = 'Apple Watch Ultra 3';

UPDATE sanpham SET hinh_anh = 'imagesMySQL/airpodspro3.png' WHERE ten = 'AirPods Pro 3';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/airpods4.png' WHERE ten = 'AirPods 4';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/airpodsmax.png' WHERE ten = 'AirPods Max';

UPDATE sanpham SET hinh_anh = 'imagesMySQL/daydeo.png' WHERE ten = 'Dây đeo chéo';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/oplung.png' WHERE ten = 'Ốp lưng Silicon MagSafe';
UPDATE sanpham SET hinh_anh = 'imagesMySQL/bosac.png' WHERE ten = 'Bộ sạc MagSafe 1m';


SELECT * FROM danhmuc;
SELECT  sanpham.id,
		sanpham.ten,
        sanpham.gia,
        sanpham.mausac,
        sanpham.dungluong,
        sanpham.soluong,
        danhmuc.ten_danhmuc FROM sanpham JOIN danhmuc
        ON sanpham.danhmuc_id = danhmuc.id WHERE danhmuc.id = 3;
SELECT  sanpham.id,
		sanpham.ten,
        sanpham.gia,
        sanpham.mausac,
        sanpham.dungluong,
        sanpham.soluong,
        danhmuc.ten_danhmuc FROM sanpham JOIN danhmuc
        ON sanpham.danhmuc_id = danhmuc.id WHERE sanpham.ten = "iPhone 12 Pro Max";
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
        ON sanpham.danhmuc_id = danhmuc.id WHERE sanpham.id = 22;
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
delete from sanpham;
delete from Categories;
drop database AppleStore;
SET SQL_SAFE_UPDATES = 0;

select * from Users;