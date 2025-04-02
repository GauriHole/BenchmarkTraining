INSERT INTO Branch (branch_id, branch_name, location, contact_number) VALUES
(1, 'SBI', 'Mumbai', '022-1234567'),
(2, 'HDFC', 'Delhi', '011-9876543'),
(3, 'ICICI', 'Pune', '020-5678901'),
(4, 'Axis Bank', 'Bangalore', '080-2345678'),
(5, 'Kotak Bank', 'Chennai', '044-8765432'),
(6, 'Yes Bank', 'Hyderabad', '040-1239876'),
(7, 'BOB', 'Kolkata', '033-4567890'),
(8, 'PNB', 'Lucknow', '0522-8765432'),
(9, 'Union Bank', 'Jaipur', '0141-1234567'),
(10, 'Canara Bank', 'Ahmedabad', '079-2345678');
INSERT INTO Branch (branch_id, branch_name, location, contact_number) VALUES
(11, 'SBI Marine Drive', 'Mumbai', '9876543210'),
(12, 'ICICI Banjara Hills', 'Hyderabad', '9876543211'),
(13, 'HDFC MG Road', 'Bangalore', '9876543212'),
(14, 'Axis Connaught Place', 'Delhi', '9876543213'),
(15, 'PNB Park Street', 'Kolkata', '9876543214'),
(16, 'Kotak Koregaon Park', 'Pune', '9876543215'),
(17, 'Canara Anna Nagar', 'Chennai', '9876543216'),
(18, 'IDBI C G Road', 'Ahmedabad', '9876543217'),
(19, 'BOI MI Road', 'Jaipur', '9876543218'),
(20, 'UCO Ernakulam', 'Kochi', '9876543219');

INSERT INTO Accounts (account_id, user_id, branch_id, account_type, balance) VALUES
(1, 1, 1, 'Savings', 100000.00),
(2, 2, 2, 'Current', 150000.00),
(3, 3, 3, 'Savings', 80000.00),
(4, 4, 4, 'Current', 200000.00),
(5, 5, 5, 'Savings', 120000.00),
(6, 6, 6, 'Current', 95000.00),
(7, 7, 7, 'Savings', 110000.00),
(8, 8, 8, 'Current', 130000.00),
(9, 9, 9, 'Savings', 140000.00),
(10, 10, 10, 'Current', 175000.00);
INSERT INTO Accounts (account_id, user_id, branch_id, account_type, balance) VALUES
(11, 11, 11, 'Savings', 125000.00),
(12, 12, 12, 'Current', 205000.50),
(13, 13, 13, 'Savings', 150000.00),
(14, 14, 14, 'Current', 230000.75),
(15, 15, 15, 'Savings', 180000.00),
(16, 16, 16, 'Fixed Deposit', 350000.00),
(17, 17, 17, 'Savings', 90000.25),
(18, 18, 18, 'Current', 250000.00),
(19, 19, 19, 'Savings', 175000.00),
(20, 20, 20, 'Fixed Deposit', 275000.00);

INSERT INTO Transactions (transaction_id, account_id, amount, transaction_date) VALUES
(1, 1, 5000.00, '2025-01-10'),
(2, 2, 7000.00, '2025-01-12'),
(3, 3, 10000.00, '2025-01-15'),
(4, 4, 2000.00, '2025-01-18'),
(5, 5, 3000.00, '2025-01-20'),
(6, 6, 6000.00, '2025-01-22'),
(7, 7, 4000.00, '2025-01-25'),
(8, 8, 8000.00, '2025-01-28'),
(9, 9, 9000.00, '2025-02-01'),
(10, 10, 1500.00, '2025-02-05');
INSERT INTO Transactions (transaction_id, account_id, amount, transaction_date) VALUES
(11, 11, 5000.00, '2025-03-01'),
(12, 12, 15000.00, '2025-03-02'),
(13, 13, 10000.00, '2025-03-03'),
(14, 14, 20000.00, '2025-03-04'),
(15, 15, 7500.00, '2025-03-05'),
(16, 16, 50000.00, '2025-03-06'),
(17, 17, 2500.00, '2025-03-07'),
(18, 18, 15000.00, '2025-03-08'),
(19, 19, 10000.00, '2025-03-09'),
(20, 20, 12000.00, '2025-03-10');

INSERT INTO Loan (loan_id, account_id, amount, interest_rate) VALUES
(1, 1, 200000.00, 7.5),
(2, 2, 150000.00, 8.0),
(3, 3, 100000.00, 7.2),
(4, 4, 250000.00, 8.5),
(5, 5, 180000.00, 7.8),
(6, 6, 300000.00, 8.1),
(7, 7, 120000.00, 7.0),
(8, 8, 220000.00, 7.4),
(9, 9, 175000.00, 7.9),
(10, 10, 270000.00, 8.3);
INSERT INTO Loan (loan_id, account_id, amount, interest_rate) VALUES
(11, 11, 200000.00, 7.50),
(12, 12, 500000.00, 8.00),
(13, 13, 300000.00, 6.75),
(14, 14, 450000.00, 7.25),
(15, 15, 250000.00, 7.00),
(16, 16, 600000.00, 8.50),
(17, 17, 150000.00, 6.50),
(18, 18, 500000.00, 8.25),
(19, 19, 300000.00, 7.00),
(20, 20, 400000.00, 7.75);

