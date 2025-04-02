INSERT INTO Student (student_id, user_id, major, email) VALUES
(1, 1, 'Computer Science', 'rahul.cs@gmail.com'),
(2, 2, 'Mechanical Engineering', 'priya.me@gmail.com'),
(3, 3, 'Electrical Engineering', 'amit.ee@gmail.com'),
(4, 4, 'Civil Engineering', 'sneha.ce@gmail.com'),
(5, 5, 'Information Technology', 'vikas.it@gmail.com'),
(6, 6, 'Electronics', 'anjali.ece@gmail.com'),
(7, 7, 'Biotechnology', 'rohan.bt@gmail.com'),
(8, 8, 'Artificial Intelligence', 'neha.ai@gmail.com'),
(9, 9, 'Data Science', 'pooja.ds@gmail.com'),
(10, 10, 'Management', 'kunal.mgmt@gmail.com');
INSERT INTO Student (student_id, user_id, major, email) VALUES
(11, 11, 'Computer Science', 'amitabh.cs@example.com'),
(12, 12, 'Biotechnology', 'lata.bt@example.com'),
(13, 13, 'Mechanical Engineering', 'virat.me@example.com'),
(14, 14, 'Electrical Engineering', 'sundar.ee@example.com'),
(15, 15, 'Civil Engineering', 'mukesh.ce@example.com'),
(16, 16, 'Information Technology', 'apj.it@example.com'),
(17, 17, 'Electronics', 'deepika.el@example.com'),
(18, 18, 'Pharmacy', 'kangana.ph@example.com'),
(19, 19, 'Management', 'narendra.mg@example.com'),
(20, 20, 'Law', 'sachin.lw@example.com');

INSERT INTO Courses (course_id, title, department, year) VALUES
(1, 'DBMS', 'Computer Science', 2025),
(2, 'Thermodynamics', 'Mechanical Engineering', 2025),
(3, 'Power Systems', 'Electrical Engineering', 2025),
(4, 'Structural Analysis', 'Civil Engineering', 2025),
(5, 'Web Development', 'Information Technology', 2025),
(6, 'Digital Electronics', 'Electronics', 2025),
(7, 'Genetics', 'Biotechnology', 2025),
(8, 'Machine Learning', 'Artificial Intelligence', 2025),
(9, 'Data Visualization', 'Data Science', 2025),
(10, 'Project Management', 'Management', 2025);
INSERT INTO Courses (course_id, title, department, year) VALUES
(11, 'Data Structures', 'CS', 2023),
(12, 'Genetics', 'BT', 2023),
(13, 'Thermodynamics', 'ME', 2023),
(14, 'Power Systems', 'EE', 2023),
(15, 'Structural Analysis', 'CE', 2023),
(16, 'Network Security', 'IT', 2023),
(17, 'Embedded Systems', 'EL', 2023),
(18, 'Pharmacology', 'PH', 2023),
(19, 'Business Analytics', 'MG', 2023),
(20, 'Constitutional Law', 'LW', 2023);

INSERT INTO Enrollments (enrollment_id, student_id, course_id, enrollment_date) VALUES
(1, 1, 1, '2025-01-15'),
(2, 2, 2, '2025-01-18'),
(3, 3, 3, '2025-01-20'),
(4, 4, 4, '2025-01-25'),
(5, 5, 5, '2025-01-28'),
(6, 6, 6, '2025-02-01'),
(7, 7, 7, '2025-02-05'),
(8, 8, 8, '2025-02-10'),
(9, 9, 9, '2025-02-12'),
(10, 10, 10, '2025-02-15');
INSERT INTO Enrollments (enrollment_id, student_id, course_id, enrollment_date) VALUES
(11, 11, 11, '2025-01-05'),
(12, 12, 12, '2025-01-06'),
(13, 13, 13, '2025-01-07'),
(14, 14, 14, '2025-01-08'),
(15, 15, 15, '2025-01-09'),
(16, 16, 16, '2025-01-10'),
(17, 17, 17, '2025-01-11'),
(18, 18, 18, '2025-01-12'),
(19, 19, 19, '2025-01-13'),
(20, 20, 20, '2025-01-14');

INSERT INTO Professors (professor_id, user_id, department, specialization) VALUES
(1, 1, 'Computer Science', 'DBMS'),
(2, null, 'Mechanical Engineering', 'Thermodynamics'),
(3, 3, 'Electrical Engineering', 'Power Systems'),
(4, null, 'Civil Engineering', 'Structural Analysis'),
(5, 5, 'Information Technology', 'Web Development'),
(6, 6, 'Electronics', 'Digital Circuits'),
(7, null, 'Biotechnology', 'Genetics'),
(8, null, 'AI & ML', 'Machine Learning'),
(9, 2, 'Data Science', 'Data Analytics'),
(10, 10, 'Management', 'Project Management');
INSERT INTO Professors (professor_id, user_id, department, specialization) VALUES
(11, null, 'Computer Science', 'AI & Machine Learning'),
(12, 12, 'Mechanical Engineering', 'Robotics'),
(13, null, 'Electrical Engineering', 'Power Systems'),
(14, null, 'Information Technology', 'Cyber Security'),
(15, 15, 'Civil Engineering', 'Structural Design'),
(16, 16, 'Electronics', 'VLSI Design'),
(17, null, 'Management', 'Business Analytics'),
(18, 18, 'Law', 'Corporate Law'),
(19, null, 'Architecture', 'Urban Planning'),
(20, 20, 'Pharmacy', 'Pharmaceutical Sciences');

INSERT INTO Exams (exam_id, course_id, max_score, duration) VALUES
(1, 1, 100, '02:00:00'),
(2, 2, 100, '02:30:00'),
(3, 3, 100, '02:00:00'),
(4, 4, 100, '03:00:00'),
(5, 5, 100, '02:00:00'),
(6, 6, 100, '02:00:00'),
(7, 7, 100, '01:30:00'),
(8, 8, 100, '02:30:00'),
(9, 9, 100, '02:00:00'),
(10, 10, 100, '01:45:00');
INSERT INTO Exams (exam_id, course_id, max_score, duration) VALUES
(11, 11, 100, '02:00:00'),
(12, 12, 100, '02:30:00'),
(13, 13, 100, '01:45:00'),
(14, 14, 100, '02:15:00'),
(15, 15, 100, '02:00:00'),
(16, 16, 100, '03:00:00'),
(17, 17, 100, '01:30:00'),
(18, 18, 100, '02:00:00'),
(19, 19, 100, '02:45:00'),
(20, 20, 100, '01:45:00');

INSERT INTO ExamResult (result_id, student_id, exam_id, score) VALUES
(1, 1, 1, 92),
(2, 2, 2, 85),
(3, 3, 3, 88),
(4, 4, 4, 76),
(5, 5, 5, 90),
(6, 6, 6, 82),
(7, 7, 7, 70),
(8, 8, 8, 95),
(9, 9, 9, 89),
(10, 10, 10, 80);
INSERT INTO ExamResult (result_id, student_id, exam_id, score) VALUES
(11, 11, 11, 85),
(12, 12, 12, 90),
(13, 13, 13, 78),
(14, 14, 14, 88),
(15, 15, 15, 92),
(16, 16, 16, 81),
(17, 17, 17, 87),
(18, 18, 18, 84),
(19, 19, 19, 89),
(20, 20, 20, 91);

