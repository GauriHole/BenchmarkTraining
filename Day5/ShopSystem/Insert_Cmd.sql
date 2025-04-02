INSERT INTO Customers VALUES (1, 'Amit Sharma', 'amit@example.com', '12 MG Road, Mumbai'),
(2, 'Priya Iyer', 'priya@example.com', '34 Brigade Road, Bangalore');

INSERT INTO Products VALUES (101, 'Wireless Headphones', 99.99, 50),
(102, 'Smartwatch', 199.99, 30);

INSERT INTO Orders VALUES (1001, 1, '2025-02-20', 299.98),
(1002, 2, '2025-03-01', 99.99);

INSERT INTO OrderDetails VALUES (5001, 1001, 101, 1),(5002, 1001, 102, 1),(5003, 1002, 101, 1);
