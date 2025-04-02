CREATE TABLE AuthorDetails (
    AuthorID INT PRIMARY KEY,
    AuthorName VARCHAR(100),
    Country VARCHAR(50)
);

CREATE TABLE BookInfo (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255),
    AuthorID INT,
    FOREIGN KEY (AuthorID) REFERENCES AuthorDetails(AuthorID)
);

CREATE TABLE BorrowerInfo  (
    BorrowerID INT PRIMARY KEY,
    BorrowerName VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(15),
    BookID INT,
    FOREIGN KEY (BookID) REFERENCES BookInfo(BookID)
);
