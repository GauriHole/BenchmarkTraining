/*  Insert Sample Records */
insert into Student values(1,"Gauri","CSE","9878675467");
insert into Department values(111,"CSE","1st Floor");
insert into Institute(instId) values(65235619);
/* output of Institute table :  65235619 |	NULL | NULL
try to insert : INSERT INTO Institute(instId, deptid, rollno) VALUES (65235619, 111, 1);
Error: INSERT INTO Institute(instId, deptid, rollno) VALUES (65235619, 111, 1)	
Error Code: 1062. Duplicate entry '65235619' for key 'institute.PRIMARY' */

truncate table Institute;
INSERT INTO Institute(instId, deptid, rollno) VALUES (65235619, 111, 1);

/*  Student Table */
INSERT INTO Student (rollno, name, dept, mobile) VALUES
(2, "Amit", "ECE", "9876543210"),
(3, "Riya", "MECH", "9765432109"),
(4, "Soham", "CSE", "9854321987"),
(5, "Neha", "IT", "9845123678"),
(6, "Raj", "CIVIL", "9934567890"),
(7, "Priya", "EEE", "9812345678"),
(8, "Kunal", "CSE", "9767890123"),
(9, "Shruti", "ECE", "9901234567"),
(10, "Manoj", "IT", "9898765432");

/*  Department Table */
INSERT INTO Department (deptid, dname, location) VALUES
(101,"CSE","1st Fllor"),
(102, "ECE", "2nd Floor"),
(103, "MECH", "3rd Floor"),
(104, "IT", "4th Floor"),
(105, "CIVIL", "5th Floor"),
(106, "EEE", "6th Floor"),
(107, "AERO", "7th Floor"),
(108, "BIO", "8th Floor"),
(109, "CHEM", "9th Floor"),
(110, "PHY", "10th Floor");

/* Institute Table  */
INSERT INTO Institute (instId, deptid, rollno) VALUES
(10002, 102, 2),
(10003, 103, 3),
(10004, 101, 4),
(10005, 104, 5),
(10006, 105, 6),
(10007, 106, 7),
(10008, 101, 8),
(10009, 102, 9),
(10010, 104, 10);
