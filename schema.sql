-- Drop Database If It already exists --
DROP DATABASE burgers_db;
-- Create the database burgers_db and specified it for use.
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL;
PRIMARY KEY (id),
date TIMESTAMP
);
