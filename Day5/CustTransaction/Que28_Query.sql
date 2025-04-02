/*
DELETE FROM Clients
 WHERE ClientID NOT IN (
     SELECT DISTINCT ClientID FROM Transactions
     WHERE TransactionDate >= DATE_SUB(CURDATE(), INTERVAL 2 YEAR)
 )	Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE 
 that uses a KEY column. 
 To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.	0.000 sec
*/

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Clients
WHERE ClientID NOT IN (
    SELECT DISTINCT ClientID FROM Transactions
    WHERE TransactionDate >= DATE_SUB(CURDATE(), INTERVAL 2 YEAR)
);
SET SQL_SAFE_UPDATES = 1;
