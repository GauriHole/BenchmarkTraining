/*  AuthorDetails Table */
INSERT INTO AuthorDetails (AuthorID, AuthorName, Country) VALUES
(1, "R.K. Narayan", "India"),
(2, "Chetan Bhagat", "India"),
(3, "Amish Tripathi", "India"),
(4, "Ruskin Bond", "India"),
(5, "Arundhati Roy", "India");

/*  BookInfo Table */
INSERT INTO BookInfo (BookID, Title, AuthorID) VALUES
(101, "Malgudi Days", 1),
(102, "Five Point Someone", 2),
(103, "The Immortals of Meluha", 3),
(104, "The Room on the Roof", 4),
(105, "The God of Small Things", 5);

/*  BorrowerInfo Table */
INSERT INTO BorrowerInfo (BorrowerID, BorrowerName, Email, Phone, BookID) VALUES
(201, "Gauri", "gauri@gmail.com", "9876543210", 101),
(202, "Rahul", "rahul@gmail.com", "8765432109", 102),
(203, "Priya", "priya@gmail.com", "7654321098", 103),
(204, "Nikita", "nikita@gmail.com", "6543210987", 104),
(205, "Neha", "neha@gmail.com", "5432109876", 105);
