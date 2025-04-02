create table Student (rollno int(5), name varchar(20),dept varchar(10), mobile varchar(12));
ALTER TABLE Student ADD PRIMARY KEY (rollno);

create table Department (deptid int(5),dname varchar(10),location varchar(10));
ALTER TABLE Department ADD PRIMARY KEY (deptid);

create table Institute(instId int(10), deptid int(5),primary key(instID ), FOREIGN KEY (deptid) REFERENCES Department(deptid));
ALTER TABLE Institute ADD rollno int(5);
ALTER TABLE Institute ADD FOREIGN KEY (rollno) REFERENCES Student(rollno);