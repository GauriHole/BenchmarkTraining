SELECT * FROM AuthorDetails;
SELECT * FROM BookInfo;
SELECT * FROM BorrowerInfo;

/*   Join Operation  */
SELECT B.BookID, B.Title, A.AuthorName, A.Country 
FROM BookInfo B
INNER JOIN AuthorDetails A ON B.AuthorID = A.AuthorID;
