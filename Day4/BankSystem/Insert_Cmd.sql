--  Accounts table
INSERT INTO AccInfo (AccntID, AccntHolder, Balance) VALUES
(1, 'Ankita', 25000.50),
(2, 'Priya', 15000.75),
(3, 'Rajendra', 50000.00),
(4, 'Neha', 32000.25),
(5, 'Gauri', 47000.90);

-- Transactions table
INSERT INTO TransMang  VALUES
(1, 1, -5000.00, '2025-03-13 10:15:00'),  
(2, 2, 10000.00, '2025-03-12 12:30:00'),  
(3, 3, -7500.50, '2025-03-11 09:45:00'), 
(4, 4, 5000.75, '2025-03-10 14:20:00'), 
(5, 5, -12000.00, '2025-03-09 16:05:00'); 
