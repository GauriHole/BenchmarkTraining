select count(EmployeeID) from employees;
select sum(salary) as Total_salary from employees;
select avg(price) as Avg_Price from products;
select max(age) as EMP_WITH_MAX_AGE from employees;
select count(orderId) as Total_Orders from orders;
select department,count(employeeID) as Num_EMP from employees group by Department;
select department,avg(Salary) as Avg_Sal from employees group by department;
select category,count(productid) as Total_Product from products group by category;
select customerid,sum(amount) as Total_Revenue from orders group by CustomerID;
select jobtitle,count(employeeid) as Num_Emp from employees group by JobTitle;


select department,Name from employees where count(empolyeeid)>5 group by Department;
SELECT Department, COUNT(*) AS EmployeeCount FROM Employees GROUP BY
Department HAVING COUNT(*) > 5;