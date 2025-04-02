SELECT SUM(total_amount) AS total_revenue
FROM Orders;

SELECT P.department, AVG(A.balance) AS avg_salary
FROM Professors P
JOIN Accounts A ON P.user_id = A.user_id
GROUP BY P.department;

SELECT U.name AS employee_name, A.balance AS salary
FROM Accounts A
JOIN User U ON A.user_id = U.user_id
ORDER BY A.balance DESC LIMIT 3;
