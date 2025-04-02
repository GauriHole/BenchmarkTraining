CREATE TABLE User (
    user_id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

/* 🏥 Healthcare Module */
CREATE TABLE Patient (
    patient_id INT PRIMARY KEY,
    user_id INT,
    blood_type VARCHAR(10),
    allergies TEXT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Doctor (
    doctor_id INT PRIMARY KEY,
    user_id INT,
    specialty VARCHAR(100),
    hospital VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Appointment (
    appointment_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
);
CREATE TABLE Prescriptions (
    prescription_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    dosage TEXT,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id)
);

/* 🛒 E-Commerce Module */
CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    custname VARCHAR(100),
    location VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10,2),
    stock_qnty INT
);
CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    payment_id INT,
    status VARCHAR(50),
    total_amount DECIMAL(12,2),
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);
CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    order_id INT,
    payment_method VARCHAR(50),
    payment_date DATE,
    amount DECIMAL(12,2),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);
CREATE TABLE OrderDetails (
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE
);


/* 🎓 Education Module */
CREATE TABLE Student (
    student_id INT PRIMARY KEY,
    user_id INT,
    major VARCHAR(100),
    email VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    title VARCHAR(100),
    department VARCHAR(100),
    year INT
);
CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
CREATE TABLE Professors (
    professor_id INT PRIMARY KEY,
    user_id INT,
    department VARCHAR(100),
    specialization VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Exams (
    exam_id INT PRIMARY KEY,
    course_id INT,
    max_score INT,
    duration TIME,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);
CREATE TABLE ExamResult (
    result_id INT PRIMARY KEY,
    student_id INT,
    exam_id INT,
    score INT,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (exam_id) REFERENCES Exams(exam_id)
);

/* 🏦 Banking Module */
CREATE TABLE Accounts (
    account_id INT PRIMARY KEY,
    user_id INT,
    branch_id INT,
    account_type VARCHAR(50),
    balance DECIMAL(15,2),
    FOREIGN KEY (branch_id) REFERENCES Branch(branch_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Transactions (
    transaction_id INT PRIMARY KEY,
    account_id INT,
    amount DECIMAL(15,2),
    transaction_date DATE,
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);
CREATE TABLE Loan (
    loan_id INT PRIMARY KEY,
    account_id INT,
    amount DECIMAL(15,2),
    interest_rate DECIMAL(5,2),
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);
CREATE TABLE Branch (
    branch_id INT PRIMARY KEY,
    branch_name VARCHAR(100),
    location VARCHAR(100),
    contact_number VARCHAR(15)
);

/* 🎵 Entertainment / Music Streaming Module */
CREATE TABLE Subscriber (
    subscriber_id INT PRIMARY KEY,
    user_id INT,
    subscription_type VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
CREATE TABLE Subscription (
    subscription_id INT PRIMARY KEY,
    subscriber_id INT,
    plan_type VARCHAR(50),
    payment_method VARCHAR(50),
    FOREIGN KEY (subscriber_id) REFERENCES Subscriber(subscriber_id)
);
CREATE TABLE Playlist (
    playlist_id INT PRIMARY KEY,
    subscriber_id INT,
    playlist_name VARCHAR(100),
    created_on DATE,
    FOREIGN KEY (subscriber_id) REFERENCES Subscriber(subscriber_id)
);
CREATE TABLE Songs (
    song_id INT PRIMARY KEY,
    title VARCHAR(100),
    artist VARCHAR(100),
    release_date DATE
);
CREATE TABLE Playlist_Songs (
    playlist_id INT,
    song_id INT,
    PRIMARY KEY (playlist_id, song_id),
    FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id),
    FOREIGN KEY (song_id) REFERENCES Songs(song_id)
);
