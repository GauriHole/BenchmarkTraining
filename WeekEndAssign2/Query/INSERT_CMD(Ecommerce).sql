INSERT INTO Customer (customer_id, custname, location, user_id) VALUES
(1, 'Rajesh Kumar', 'Mumbai', 1),
(2, 'Priya Sharma', 'Delhi', 2),
(3, 'Amit Patel', 'Ahmedabad', 3),
(4, 'Sneha Nair', 'Bangalore', 4),
(5, 'Vikas Verma', 'Chennai', 5),
(6, 'Anjali Singh', 'Pune', 6),
(7, 'Rohan Gupta', 'Hyderabad', 7),
(8, 'Neha Choudhary', 'Kolkata', 8),
(9, 'Pooja Iyer', 'Lucknow', 9),
(10, 'Kunal Joshi', 'Jaipur', 10);
INSERT INTO Customer (customer_id, custname, location, user_id) VALUES
(11, 'Rajesh Sharma', 'Mumbai', 11),
(12, 'Priya Iyer', 'Chennai', 12),
(13, 'Aman Gupta', 'Delhi', 13),
(14, 'Neha Singh', 'Pune', 14),
(15, 'Alok Verma', 'Kolkata', 15),
(16, 'Kiran Rao', 'Hyderabad', 16),
(17, 'Arjun Mehta', 'Bangalore', 17),
(18, 'Pooja Desai', 'Ahmedabad', 18),
(19, 'Vikas Kumar', 'Jaipur', 19),
(20, 'Sneha Nair', 'Kochi', 20);

INSERT INTO Product (product_id, name, price, stock_qnty) VALUES
(1, 'Wireless Headphones', 2999.00, 50),
(2, 'Smartwatch', 4999.00, 30),
(3, 'Bluetooth Speaker', 1999.00, 100),
(4, 'Power Bank', 1499.00, 80),
(5, 'Fitness Band', 2499.00, 60),
(6, 'Mobile Charger', 699.00, 200),
(7, 'Laptop Stand', 799.00, 120),
(8, 'USB Cable', 399.00, 150),
(9, 'Memory Card', 599.00, 90),
(10, 'Wireless Mouse', 899.00, 70);
INSERT INTO Product (product_id, name, price, stock_qnty) VALUES
(11, 'Smartphone', 19999.00, 50),
(12, 'Bluetooth Earbuds', 2999.00, 100),
(13, 'Laptop', 49999.00, 30),
(14, 'Smartwatch', 9999.00, 40),
(15, 'Tablet', 14999.00, 35),
(16, 'Wireless Mouse', 999.00, 200),
(17, 'Power Bank', 1999.00, 70),
(18, 'External HDD', 3999.00, 60),
(19, 'Fitness Tracker', 2999.00, 80),
(20, 'Speaker', 2499.00, 90);

INSERT INTO Payments (payment_id, order_id, payment_method, payment_date, amount) VALUES
(101, 1, 'Credit Card', '2025-01-10', 4999.00),
(102, 2, 'UPI', '2025-01-12', 2999.00),
(103, 3, 'Debit Card', '2025-01-15', 1499.00),
(104, 4, 'Net Banking', '2025-01-18', 799.00),
(105, 5, 'UPI', '2025-01-20', 2499.00),
(106, 6, 'Wallet', '2025-01-25', 399.00),
(107, 7, 'Credit Card', '2025-01-28', 1999.00),
(108, 8, 'UPI', '2025-02-01', 899.00),
(109, 9, 'Debit Card', '2025-02-05', 699.00),
(110, 10, 'Net Banking', '2025-02-10', 599.00);
INSERT INTO Payments (payment_id, order_id, payment_method, payment_date, amount) VALUES
(11, 11, 'Credit Card', '2025-03-01', 39998.00),
(12, 12, 'UPI', '2025-03-02', 2999.00),
(13, 13, 'Net Banking', '2025-03-03', 9999.00),
(14, 14, 'Debit Card', '2025-03-04', 14999.00),
(15, 15, 'Cash on Delivery', '2025-03-05', 999.00),
(16, 16, 'Credit Card', '2025-03-06', 1999.00),
(17, 17, 'UPI', '2025-03-07', 3999.00),
(18, 18, 'Net Banking', '2025-03-08', 2999.00),
(19, 19, 'Debit Card', '2025-03-09', 2499.00),
(20, 20, 'UPI', '2025-03-10', 19999.00);

INSERT INTO Orders (order_id, customer_id, payment_id, status, total_amount) VALUES
(1, 1, 101, 'Completed', 4999.00),
(2, 2, 102, 'Pending', 2999.00),
(3, 3, 103, 'Shipped', 1499.00),
(4, 4, 104, 'Completed', 799.00),
(5, 5, 105, 'Pending', 2499.00),
(6, 6, 106, 'Shipped', 399.00),
(7, 7, 107, 'Completed', 1999.00),
(8, 8, 108, 'Pending', 899.00),
(9, 9, 109, 'Completed', 699.00),
(10, 10, 110, 'Shipped', 599.00);
INSERT INTO Orders (order_id, customer_id, payment_id, status, total_amount) VALUES
(11, 11, 11, 'Completed', 39998.00),
(12, 12, 12, 'Pending', 2999.00),
(13, 13, 13, 'Completed', 9999.00),
(14, 14, 14, 'Completed', 14999.00),
(15, 15, 15, 'Cancelled', 999.00),
(16, 16, 16, 'Completed', 1999.00),
(17, 17, 17, 'Pending', 3999.00),
(18, 18, 18, 'Completed', 2999.00),
(19, 19, 19, 'Shipped', 2499.00),
(20, 20, 20, 'Completed', 19999.00);

INSERT INTO OrderDetails (order_id, product_id, quantity, price) VALUES
(1, 2, 1, 4999.00),         -- Smartwatch for Order 1
(1, 6, 1, 699.00),          -- Mobile Charger for Order 1
(2, 3, 2, 1999.00),         -- Bluetooth Speaker for Order 2
(3, 4, 1, 1499.00),         -- Power Bank for Order 3
(4, 7, 1, 799.00),          -- Laptop Stand for Order 4
(5, 5, 2, 2499.00),         -- Fitness Band for Order 5
(6, 8, 3, 399.00),          -- USB Cable for Order 6
(7, 9, 1, 599.00),          -- Memory Card for Order 7
(8, 10, 1, 899.00),         -- Wireless Mouse for Order 8
(9, 6, 2, 699.00),          -- Mobile Charger for Order 9
(10, 1, 1, 2999.00),        -- Wireless Headphones for Order 10
(11, 13, 1, 49999.00),      -- Laptop for Order 11
(12, 12, 2, 2999.00),       -- Bluetooth Earbuds for Order 12
(13, 14, 1, 9999.00),       -- Smartwatch for Order 13
(14, 15, 1, 14999.00),      -- Tablet for Order 14
(15, 16, 1, 999.00),        -- Wireless Mouse for Order 15
(16, 17, 2, 1999.00),       -- Power Bank for Order 16
(17, 18, 1, 3999.00),       -- External HDD for Order 17
(18, 19, 1, 2999.00),       -- Fitness Tracker for Order 18
(19, 20, 1, 2499.00);       -- Speaker for Order 19
