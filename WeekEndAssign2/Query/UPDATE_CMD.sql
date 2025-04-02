alter table student add name varchar(25);
UPDATE Student SET name = 'Rahul Sharma' WHERE student_id = 1;
UPDATE Student SET name = 'Priya Mehta' WHERE student_id = 2;
UPDATE Student SET name = 'Amit Kumar' WHERE student_id = 3;
UPDATE Student SET name = 'Sneha Patil' WHERE student_id = 4;
UPDATE Student SET name = 'Vikas Singh' WHERE student_id = 5;
UPDATE Student SET name = 'Anjali Nair' WHERE student_id = 6;
UPDATE Student SET name = 'Rohan Joshi' WHERE student_id = 7;
UPDATE Student SET name = 'Neha Gupta' WHERE student_id = 8;
UPDATE Student SET name = 'Pooja Deshmukh' WHERE student_id = 9;
UPDATE Student SET name = 'Kunal Kapoor' WHERE student_id = 10;
UPDATE Student SET name = 'Amit Trivedi' WHERE student_id = 11;
UPDATE Student SET name = 'Neha Sharma' WHERE student_id = 12;
UPDATE Student SET name = 'Karan Mehta' WHERE student_id = 13;
UPDATE Student SET name = 'Sanya Kapoor' WHERE student_id = 14;
UPDATE Student SET name = 'Vikram Singh' WHERE student_id = 15;
UPDATE Student SET name = 'APJ Abdul Kalam' WHERE student_id = 16;
UPDATE Student SET name = 'Deepika Padukone' WHERE student_id = 17;
UPDATE Student SET name = 'Kangana Ranaut' WHERE student_id = 18;
UPDATE Student SET name = 'Narendra Modi' WHERE student_id = 19;
UPDATE Student SET name = 'Sachin Tendulkar' WHERE student_id = 20;

-- Set status as 'Completed' for some appointments
UPDATE Appointment
SET status = 'Completed'
WHERE appointment_id IN (1, 5, 9, 14, 20);

-- Set status as 'Scheduled' for future appointments
UPDATE Appointment
SET status = 'Scheduled'
WHERE appointment_id IN (2, 6, 10, 12, 16);

-- Set status as 'Pending' for waiting appointments
UPDATE Appointment
SET status = 'Pending'
WHERE appointment_id IN (3, 7, 13, 17);

-- Set status as 'Cancelled' for specific appointments
UPDATE Appointment
SET status = 'Cancelled'
WHERE appointment_id IN (4, 8, 11, 15, 18);
