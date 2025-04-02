SELECT COUNT(*) AS EmployeeCount FROM Employees;

SELECT SUM(Salary) AS TotalSalary FROM Employees;

SELECT AVG(Price) AS AveragePrice FROM Products;

SELECT MAX(Age) AS MaxAge FROM Employees;

SELECT COUNT(*) AS OrderCount FROM Orders;

SELECT Department, COUNT(*) AS EmployeeCount FROM Employees GROUP BY Department;

SELECT Department, AVG(Salary) AS AvgSalary FROM Employees GROUP BY Department;

SELECT Category, COUNT(*) AS ProductCount FROM Products GROUP BY Category;

SELECT CustomerID, SUM(Amount) AS TotalRevenue FROM Orders GROUP BY CustomerID;

SELECT JobTitle, COUNT(*) AS EmployeeCount FROM Employees GROUP BY JobTitle;

SELECT Department, COUNT(*) AS EmployeeCount FROM Employees GROUP BY Department HAVING COUNT(*) > 5;

SELECT Category, SUM(Price) AS TotalPrice FROM Products GROUP BY Category HAVING SUM(Price) > 10000;

SELECT JobTitle, AVG(Salary) AS AvgSalary FROM Employees GROUP BY JobTitle HAVING AVG(Salary) > 60000;

SELECT CustomerID, SUM(Amount) AS TotalSpent FROM Orders GROUP BY CustomerID HAVING SUM(Amount) > 5000;

SELECT Category, COUNT(*) AS ProductCount FROM Products GROUP BY Category HAVING COUNT(*) > 10;

SELECT Price FROM Products ORDER BY Price DESC LIMIT 3;

SELECT MIN(Salary) AS MinSalary, MAX(Salary) AS MaxSalary, AVG(Salary) AS AvgSalary FROM Employees;

SELECT CustomerID, COUNT(*) AS OrderCount FROM Orders GROUP BY CustomerID HAVING COUNT(*) > 3;

SELECT MemberID, COUNT(BookID) AS TotalBorrowed FROM Borrowings GROUP BY MemberID;

SELECT MIN(Age) AS Youngest, MAX(Age) AS Oldest FROM Customers;

SELECT Category, MAX(Price) AS MostExpensive FROM Products GROUP BY Category;

SELECT EmployeeID, Name, Salary FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);

SELECT O.CustomerID, C.Name FROM Orders O JOIN Customers C ON O.CustomerID = C.CustomerID JOIN Products P ON 
O.ProductID = P.ProductID GROUP BY O.CustomerID, C.Name HAVING COUNT(DISTINCT P.Category) = ( SELECT COUNT(DISTINCT Category) FROM Products);

SELECT Department, SUM(Salary) AS TotalSalary FROM Employees GROUP BY Department ORDER BY TotalSalary DESC LIMIT 1;

SELECT E.EmployeeID, E.Name, E.Salary, E.Department FROM Employees E WHERE E.Salary > (SELECT AVG(Salary) FROM Employees WHERE Department = E.Department );

SELECT ProductID, SUM(Amount) AS TotalRevenue FROM Orders GROUP BY ProductID HAVING SUM(Amount) > 50000;

SELECT EmployeeID, Name, HireDate FROM Employees WHERE DATEDIFF(CURDATE(), HireDate) > 3650;

SELECT BookID, Title, CopiesAvailable FROM Library WHERE CopiesAvailable > 5;

SELECT CustomerID, COUNT(*) AS OrderCount FROM Orders GROUP BY CustomerID ORDER BY OrderCount DESC LIMIT 1;

SELECT Department, COUNT(*) AS EmployeeCount FROM Employees GROUP BY Department HAVING COUNT(*) < (
SELECT AVG(DepartmentCount) FROM ( SELECT COUNT(*) AS DepartmentCount FROM Employees GROUP BY Department) AS AvgDept);

