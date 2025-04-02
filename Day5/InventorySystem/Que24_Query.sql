SET AUTOCOMMIT = 0;

START TRANSACTION;

-- Insert transaction Selling 3 packs of Amul Butter
INSERT INTO ProdTrans (ProductID, QuantitySold) VALUES (1, 3);
INSERT INTO ProdTrans (ProductID, QuantitySold) VALUES (2, 5);
INSERT INTO ProdTrans (ProductID, QuantitySold) VALUES (3, 2);

-- Reduce stock 
UPDATE ProductDetails SET StockQuantity = StockQuantity - 3 WHERE ProductID = 1;
UPDATE ProductDetails SET StockQuantity = StockQuantity - 5 WHERE ProductID = 2;

COMMIT;
RollBack;