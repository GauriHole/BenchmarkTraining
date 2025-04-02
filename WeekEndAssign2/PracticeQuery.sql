select distinct c.customer_id as CustomerId, u.name as CustomerName, o.order_id from Customer c
join Orders o on c.customer_id = o.customer_id
join user u on c.user_id = u.user_id;

select count(e.student_id) as StudentId, c.title as CourseName from Enrollments e
join Courses c on e.course_id = c.course_id where c.title="Thermodynamics";

select sum(total_amount) as Total_Revenue from orders;

SELECT department, AVG(salary) AS Avg_Salary FROM Employee GROUP BY department;

select o.order_id as OrderId,u.name as Cust_Name, p.name as Product, p.price as Price,
o.status as Status from customer c 
inner join user u on u.user_id = c.user_id
inner join orders o on c.customer_id = o.customer_id
inner join orderdetails od on o.order_id = od.order_id
inner join product p on od.product_id = p.product_id order by o.order_id asc;

select p.patient_id,p_user.name as Patient_Name, d.doctor_id,d_user.name as Doctor_Name from Appointment a
left join Patient p on a.patient_id = p.patient_id
left join Doctor d on a.doctor_id = d.doctor_id
left join user d_user ON d.user_id = d_user.user_id
LEFT JOIN user p_user ON p.user_id = p_user.user_id;
 
select p.subscriber_id as SubscriberId ,p.playlist_name as PlaylistName, s.title as Song_Name
from playlist_songs ps
right join playlist p on ps.playlist_id = p.playlist_id
right join songs s on ps.song_id = s.song_id order by p.subscriber_id asc;

select u.name as EmployeeName, a.balance as Salary from Accounts a
join User u on a.user_id = u.user_id where a.balance > (select avg(balance) from Accounts);

select sb.subscriber_id as SubscriberID , u.name as SubscriberName, s.title as SongName from playlist_songs ps
join songs s on ps.song_id = s.song_id
join playlist p on ps.playlist_id = p.playlist_id
join subscriber sb on p.subscriber_id = sb.subscriber_id
join user u on sb.user_id = u.user_id;

SELECT u.name, sub.plan_type
FROM Subscriber s
JOIN User u ON s.user_id = u.user_id
JOIN Subscription sub ON s.subscriber_id = sub.subscription_id;
