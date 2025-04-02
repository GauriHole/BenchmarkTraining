SELECT DISTINCT C.custname, C.location, C.customer_id
FROM Customer C
JOIN Orders O ON C.customer_id = O.customer_id;

SELECT S.name AS student_name, C.title AS course_title
FROM Student S
JOIN Enrollments E ON S.student_id = E.student_id
JOIN Courses C ON E.course_id = C.course_id
WHERE C.title = 'Data Structures';

SELECT P.professor_id, U.name AS professor_name, P.department
FROM Professors P
JOIN User U ON P.user_id = U.user_id
WHERE P.department = 'Information Technology';

SELECT cust.user_id as CustomerId,  u.name as CustomerName from Customer cust
JOIN User u on u.user_id=cust.user_id;