CREATE TABLE AccInfo (
    AccntID INT PRIMARY KEY,
    AccntHolder VARCHAR(20),
    Balance DECIMAL(15,2) CHECK (Balance >= 0)
);

CREATE TABLE TransMang (
    TransID INT PRIMARY KEY,
    AccntID INT,
    TotalAmt DECIMAL(15,2),
    TransDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (AccntID) REFERENCES AccInfo(AccntID),
    CHECK (TotalAmt <> 0)
);
