CREATE DATABASE electricity_db;

use electricity_db;

CREATE TABLE Consumer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Billing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    consumer_id INT NOT NULL,
    units INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    billing_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (consumer_id) REFERENCES Consumer(id)
);
