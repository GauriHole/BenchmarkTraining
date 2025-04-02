/* Student Table */
create table Student (rollno int(5), name varchar(20),dept varchar(10), mobile varchar(12));
select * from Student;
ALTER TABLE Student ADD PRIMARY KEY (rollno);

/* Department Table */
create table Department (deptid int(5),dname varchar(10),location varchar(10));
ALTER TABLE Department ADD PRIMARY KEY (deptid);

/* Institute Table */
create table Institute(instId int(10), deptid int(5),primary key(instID ), FOREIGN KEY (deptid) REFERENCES Department(deptid));
ALTER TABLE Institute ADD rollno int(5);
ALTER TABLE Institute ADD FOREIGN KEY (rollno) REFERENCES Student(rollno);

/* Insert Query Usages */
insert into Student values(1,"Gauri","CSE","9878675467");
insert into Department values(111,"CSE","1st Floor");

insert into Institute(instId) values(65235619);
/* output of Institute table :  65235619 |	NULL | NULL
try to insert : INSERT INTO Institute(instId, deptid, rollno) VALUES (65235619, 111, 1);
Error: INSERT INTO Institute(instId, deptid, rollno) VALUES (65235619, 111, 1)	Error Code: 1062. Duplicate entry '65235619' for key 'institute.PRIMARY'*/
truncate table Institute;
INSERT INTO Institute(instId, deptid, rollno) VALUES (65235619, 111, 1);

/* Select Query */
select * from Student;
select * from Department;
select * from Institute;