INSERT INTO Employees (Name, Department, JobTitle, Age, Salary, HireDate)
VALUES
('Amit Sharma', 'HR', 'Manager', 35, 70000, '2012-05-20'),
('Neha Patil', 'Finance', 'Analyst', 28, 60000, '2018-07-15'),
('Rohan Kumar', 'IT', 'Developer', 30, 55000, '2020-02-10'),
('Priya Singh', 'HR', 'Executive', 25, 45000, '2022-08-01'),
('Vikas Kapoor', 'Finance', 'Manager', 38, 80000, '2010-12-05');

INSERT INTO Products (ProductName, Category, Price)
VALUES
('Laptop', 'Electronics', 50000.00),
('Mobile', 'Electronics', 20000.00),
('Washing Machine', 'Home Appliances', 15000.00),
('Air Conditioner', 'Home Appliances', 30000.00),
('Headphones', 'Accessories', 1500.00);

INSERT INTO Customers (Name, Age, City, TotalSpent)
VALUES
('Rahul Verma', 32, 'Mumbai', 8000.00),
('Pooja Mehta', 29, 'Delhi', 4500.00),
('Kunal Shah', 35, 'Pune', 3000.00),
('Anita Nair', 40, 'Bangalore', 6000.00),
('Sameer Joshi', 28, 'Hyderabad', 2500.00);

INSERT INTO Orders (CustomerID, ProductID, Amount, OrderDate)
VALUES
(1, 1, 1500.00, '2025-03-10'),
(2, 2, 2000.00, '2025-03-12'),
(1, 3, 750.00, '2025-03-15'),
(3, 1, 3000.00, '2025-03-18'),
(2, 4, 500.00, '2025-03-20');

INSERT INTO Library (BookID,Title, Author, CopiesAvailable)
VALUES
(201,'The Alchemist', 'Paulo Coelho', 8);
INSERT INTO Library (BookID,Title, Author, CopiesAvailable)
VALUES
('Atomic Habits', 'James Clear', 5),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 12),
('Think Like a Monk', 'Jay Shetty', 4),
('Ikigai', 'Francesc Miralles', 10);

INSERT INTO Borrowings (MemberID, BookID, BorrowDate, ReturnDate)
VALUES
(1, 201, '2025-02-15', '2025-03-01'),
(2, 202, '2025-03-05', '2025-03-15'),
(1, 203, '2025-02-28', '2025-03-12'),
(3, 204, '2025-03-08', '2025-03-20'),
(2, 205, '2025-03-10', '2025-03-22');

