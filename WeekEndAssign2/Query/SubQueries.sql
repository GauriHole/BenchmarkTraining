SELECT U.name AS employee_name, A.balance AS salary
FROM Accounts A
JOIN User U ON A.user_id = U.user_id
WHERE A.balance > (SELECT AVG(balance) FROM Accounts);

SELECT P.name AS product_name, COUNT(O.order_id) AS order_count
FROM Product P
JOIN Orders O ON P.product_id = O.order_id
GROUP BY P.name
HAVING COUNT(O.order_id) > 10;

SELECT U.name
FROM User U
WHERE U.user_id NOT IN (
    SELECT C.user_id
    FROM Customer C
    JOIN Orders O ON C.customer_id = O.customer_id
);
