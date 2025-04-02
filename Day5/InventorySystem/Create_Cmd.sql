CREATE TABLE ProductDetails (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    Category VARCHAR(50),
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT NOT NULL
);
CREATE TABLE ProdTrans (
    TransactionID INT PRIMARY KEY AUTO_INCREMENT,
    ProductID INT,
    QuantitySold INT NOT NULL,
    TransactionDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ProductID) REFERENCES ProductDetails(ProductID) ON DELETE CASCADE
);
