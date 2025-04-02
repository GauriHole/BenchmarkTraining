CREATE TABLE Clients (
    ClientID INT PRIMARY KEY,
    FullName VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    JoinDate DATE
);
CREATE TABLE Transactions (
    TransactionID INT PRIMARY KEY,
    ClientID INT,
    Amount DECIMAL(10,2),
    TransactionDate DATE,
    FOREIGN KEY (ClientID) REFERENCES Clients(ClientID) ON DELETE CASCADE
);
