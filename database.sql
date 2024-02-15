-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE fs_react_shopping (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(80) NOT NULL,
	"quantity" decimal(4, 2) NOT NULL,
    "unit" varchar(20)
);

INSERT INTO fs_react_shopping ("name", "quantity", "unit")
VALUES ('Apples', 3, 'lbs'),
('Bread', 1, 'loaf'),
('Milk', 1, 'gallon'),
('Sliced Almonds', 2, 'cups'),
('Bananas', 1, 'bunch') ;