--  Customers table
INSERT INTO CustomerInfo (CustID, CustName, Email) VALUES
(1, 'Sneha', 'sneha@example.com'),
(2, 'Priyanka', 'priyanka@example.com'),
(3, 'Anita', 'anita@example.com'),
(4, 'Neelu', 'neelu@example.com'),
(5, 'Pooja', 'pooja@example.com');

--  Products table 
INSERT INTO ProdDetails (ProdID, ProdName, Price) VALUES
(1, 'Silk Saree', 2999.99),
(2, 'Gold-Plated Earrings', 1499.50),
(3, 'Handbag (Leather)', 3499.00),
(4, 'Makeup Kit (Premium)', 2499.75),
(5, 'Perfume (Floral Scent)', 1999.90);

--  Orders table
INSERT INTO OrderInfo (OrderID, CustID, OrderDate) VALUES
(1, 1, '2025-03-10 11:00:00'),
(2, 2, '2025-03-11 14:30:00'),
(3, 3, '2025-03-12 09:45:00'),
(4, 4, '2025-03-13 16:20:00'),
(5, 5, '2025-03-14 18:10:00');
