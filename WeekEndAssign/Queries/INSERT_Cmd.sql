-- Insert data into Users Table
INSERT INTO Users (user_id, name, email, subscription_id) VALUES
(1, 'Rahul Sharma', 'rahul.sharma@email.com', 1),
(2, 'Priya Verma', 'priya.verma@email.com', 2),
(3, 'Amit Singh', 'amit.singh@email.com', 1),
(4, 'Neha Mehta', 'neha.mehta@email.com', 2),
(5, 'Ravi Kumar', 'ravi.kumar@email.com', 1),
(6, 'Ananya Pandey', 'ananya.pandey@email.com', 1),
(7, 'Vikram Batra', 'vikram.batra@email.com', 2),
(8, 'Kiran Joshi', 'kiran.joshi@email.com', 1),
(9, 'Suresh Raina', 'suresh.raina@email.com', 2),
(10, 'Meera Kapoor', 'meera.kapoor@email.com', 1),
(11, 'Deepak Choudhary', 'deepak.choudhary@email.com', 1),
(12, 'Sanya Malhotra', 'sanya.malhotra@email.com', 2),
(13, 'Rohan Joshi', 'rohan.joshi@email.com', 1),
(14, 'Sneha Nair', 'sneha.nair@email.com', 2),
(15, 'Vikas Gupta', 'vikas.gupta@email.com', 1),
(16, 'Harshita Reddy', 'harshita.reddy@email.com', 1),
(17, 'Kabir Khan', 'kabir.khan@email.com', 2),
(18, 'Rohini Iyer', 'rohini.iyer@email.com', 1),
(19, 'Siddharth Das', 'siddharth.das@email.com', 2),
(20, 'Ankita Patil', 'ankita.patil@email.com', 1),
(21, 'Manoj Tiwari', 'manoj.tiwari@email.com', 2),
(22, 'Pooja Hegde', 'pooja.hegde@email.com', 1),
(23, 'Vikrant Massey', 'vikrant.massey@email.com', 1),
(24, 'Ramesh Nair', 'ramesh.nair@email.com', 2),
(25, 'Anjali Chauhan', 'anjali.chauhan@email.com', 1);
INSERT INTO Users (name, email, subscription_id) VALUES
('Amit Patil', 'amit.patil@example.com',  2),
('Sneha Joshi', 'sneha.joshi@example.com', 3),
('Rahul Deshmukh', 'rahul.deshmukh@example.com',  1),
('Neha Kulkarni', 'neha.kulkarni@example.com',  5),
('Vishal More', 'vishal.more@example.com',  4),
('Pooja Shinde', 'pooja.shinde@example.com',  6),
('Rohan Jadhav', 'rohan.jadhav@example.com',  7),
('Meera Pawar', 'meera.pawar@example.com',  8),
('Shubham Gaikwad', 'shubham.gaikwad@example.com', 9),
('Komal Bhosale', 'komal.bhosale@example.com',  10);
INSERT INTO Users (name, email, subscription_id) VALUES
('Arjun Reddy', 'arjun.reddy@example.com', 2),
('Keerthi Suresh', 'keerthi.suresh@example.com', 3),
('Vijay Thalapathy', 'vijay.t@example.com', 4),
('Nayanthara Pillai', 'nayan.p@example.com', 5),
('Ram Charan', 'ram.charan@example.com', 6),
('Samantha Ruth', 'samantha.r@example.com', 7),
('Allu Arjun', 'allu.arjun@example.com', 8),
('Rashmika Mandanna', 'rashmika.m@example.com', 9),
('Surya Sivakumar', 'surya.sivakumar@example.com', 10),
('Anushka Shetty', 'anushka.shetty@example.com', 1);
INSERT INTO Users (name, email, subscription_id) VALUES
('Chris Evans', 'chris.evans@example.com', 2),
('Emma Watson', 'emma.watson@example.com', 3),
('Robert Downey Jr.', 'robert.dj@example.com', 4),
('Scarlett Johansson', 'scarlett.j@example.com', 5),
('Tom Holland', 'tom.holland@example.com', 6),
('Zendaya', 'zendaya@example.com', 7),
('Dwayne Johnson', 'dwayne.johnson@example.com', 8),
('Gal Gadot', 'gal.gadot@example.com', 9),
('Ryan Reynolds', 'ryan.reynolds@example.com', 10),
('Anne Hathaway', 'anne.hathaway@example.com', 1);


-- Insert data into Subscriptions Table
INSERT INTO Subscriptions (subscription_id, name, price) VALUES
(1, 'Premium', 149.99),
(2, 'Free', 0.00),
(3, 'Gold', 299.99),
(4, 'Student Plan', 99.99);
INSERT INTO Subscriptions (name, price, duration) VALUES
('Basic', 99.00, 30),
('Platinum', 499.00, 90),
('Student Plan', 49.00, 30),
('Family Plan', 399.00, 90),
('Annual Plan', 999.00, 365),
('Trial', 0.00, 7),
('Corporate Plan', 1999.00, 365);


-- Insert data into Playlists Table
INSERT INTO Playlists (playlist_id, user_id, name) VALUES
(101, 1, 'Bollywood Retro'),
(102, 2, 'Romantic Melodies'),
(103, 3, 'Party Hits'),
(104, 4, 'Lofi Bollywood'),
(105, 5, 'Workout Motivation'),
(106, 6, '90s Bollywood'),
(107, 7, 'Latest Bollywood'),
(108, 8, 'Bollywood Sad Songs'),
(109, 9, 'Indian Classical'),
(110, 10, 'Bhangra Beats'),
(111, 11, 'Evergreen Hits'),
(112, 12, 'Indie Bollywood'),
(113, 13, 'Rainy Day Melodies'),
(114, 14, 'Bollywood Road Trip'),
(115, 15, 'Festival Special'),
(116, 16, 'Punjabi Beats'),
(117, 17, 'South Sensation'),
(118, 18, 'Marathi Melodies'),
(119, 19, 'Evergreen Classics'),
(120, 20, 'Indie Vibes'),
(121, 21, 'Desi Chartbusters'),
(122, 22, 'Tollywood Hits'),
(123, 23, 'Bhojpuri Party'),
(124, 24, 'Carnatic Bliss'),
(125, 25, 'Fusion Grooves');
INSERT INTO Playlists (user_id, name) VALUES
(1, 'Marathi Top Hits'),
(2, 'Ajay-Atul Special'),
(3, 'Romantic Marathi Songs'),
(4, 'Evergreen Marathi'),
(5, 'Shankar Mahadevan Hits'),
(6, 'Folk Fusion'),
(7, 'Workout Beats'),
(8, 'Classical Vibes'),
(9, 'Bollywood vs Marathi'),
(10, 'Festival Special');
INSERT INTO Playlists (user_id, name) VALUES
(11, 'Tollywood Chartbusters'),
(12, 'Kollywood Hits'),
(13, 'Tamil Melodies'),
(14, 'Telugu Party Mix'),
(15, 'South Indian Romance'),
(16, 'Anirudh Special'),
(17, 'DSP Party Anthems'),
(18, 'Evergreen SPB Hits'),
(19, 'South Folk Fusion'),
(20, 'South Classical Vibes');
INSERT INTO Playlists (user_id, name) VALUES
(11, 'Hollywood Top Hits'),
(12, 'Romantic English Songs'),
(13, 'Pop Classics'),
(14, 'Workout Anthems'),
(15, 'Chill Vibes'),
(16, 'Hollywood Road Trip'),
(17, 'Throwback Hits'),
(18, 'R&B & Soul Classics'),
(19, 'Billboard Chartbusters'),
(20, 'Party Night');


-- Insert data into Songs Table
INSERT INTO Songs (song_id, title, artist_id, album_id) VALUES
(201, 'Tum Hi Ho', 1, 1),
(202, 'Channa Mereya', 2, 2),
(203, 'Agar Tum Saath Ho', 3, 3),
(204, 'Kal Ho Naa Ho', 4, 4),
(205, 'Tera Ban Jaunga', 5, 5),
(206, 'Raataan Lambiyan', 6, 6),
(207, 'Kesariya', 7, 7),
(208, 'Satranga', 8, 8),
(209, 'Phir Bhi Tumko Chaahunga', 9, 9),
(210, 'Zaalima', 10, 10),
(211, 'Dil Dhadakne Do', 11, 11),
(212, 'Tera Hone Laga Hoon', 12, 12),
(213, 'Aashayein', 13, 13),
(214, 'Ghungroo', 14, 14),
(215, 'Makhna', 15, 15),
(216, 'Laung Da Lashkara', 16, 16),
(217, 'Rowdy Baby', 17, 17),
(218, 'Jhingat', 18, 18),
(219, 'Munbe Vaa', 19, 19),
(220, 'Kolaveri Di', 20, 20),
(221, 'Dil Chori', 21, 21),
(222, 'Vaathi Coming', 22, 22),
(223, 'Lollipop Lagelu', 23, 23),
(224, 'Mann Kunto Maula', 24, 24),
(225, 'Rangabati', 25, 25);
INSERT INTO Songs (title, artist_id, album_id, release_date) VALUES
('Zingaat', 1, 1, '2016-05-05'),
('Sairat Zaala Ji', 1, 1, '2016-05-05'),
('Apsara Aali', 1, 2, '2010-01-01'),
('Khel Mandala', 1, 2, '2010-01-01'),
('Morya Morya', 2, 3, '2009-12-10'),
('Jai Jai Maharashtra Maza', 2, 3, '2009-12-10'),
('Radha Hi Bawari', 3, 4, '2006-08-15'),
('Disad Disad', 3, 4, '2006-08-15'),
('Shivba Raja', 5, 7, '2015-06-10'),
('Lai Bhaari', 7, 9, '2014-12-12');
INSERT INTO Songs (title, artist_id, album_id, release_date) VALUES
('Vaathi Coming', 1, 1, '2021-01-13'),
('Oo Antava', 2, 2, '2021-12-17'),
('Aalaporaan Thamizhan', 1, 9, '2017-10-18'),
('Butta Bomma', 4, 4, '2020-01-26'),
('Malare', 5, 5, '2015-09-15'),
('Baahubali Theme Song', 6, 6, '2015-07-10'),
('Inthandham', 7, 7, '2022-08-05'),
('O Sathi Re', 3, 8, '2005-10-14'),
('Selfie Pulla', 9, 10, '2014-10-25'),
('Dhevathai Pol Oruthi', 10, 3, '2012-11-13');
INSERT INTO Songs (title, artist_id, album_id, release_date) VALUES
('Shape of You', 1, 1, '2017-01-06'),
('Blank Space', 2, 2, '2014-10-27'),
('Blinding Lights', 3, 3, '2020-03-20'),
('Bad Guy', 4, 4, '2021-07-30'),
('Hello', 5, 5, '2015-10-23'),
('Just the Way You Are', 6, 6, '2010-07-20'),
('Peaches', 7, 7, '2021-03-19'),
('7 Rings', 8, 8, '2020-10-30'),
('Senorita', 9, 9, '2020-06-21'),
('Levitating', 10, 10, '2020-03-27');


-- Insert data into Artists Table
INSERT INTO Artists (artist_id, name) VALUES
(1, 'Arijit Singh'),
(2, 'Armaan Malik'),
(3, 'Shreya Ghoshal'),
(4, 'Sonu Nigam'),
(5, 'Neha Kakkar'),
(6, 'Jubin Nautiyal'),
(7, 'Pritam'),
(8, 'Amit Trivedi'),
(9, 'KK'),
(10, 'Udit Narayan'),
(11, 'Mika Singh'),
(12, 'Badshah'),
(13, 'Sunidhi Chauhan'),
(14, 'Mohit Chauhan'),
(15, 'Alka Yagnik'),
(16, 'Diljit Dosanjh'),
(17, 'Anirudh Ravichander'),
(18, 'Ajay-Atul'),
(19, 'Sid Sriram'),
(20, 'Dhanush'),
(21, 'Yo Yo Honey Singh'),
(22, 'Vijay Antony'),
(23, 'Pawan Singh'),
(24, 'Rekha Bhardwaj'),
(25, 'Jubin Nautiyal');
INSERT INTO Artists (name, country) VALUES
('Ajay-Atul', 'India'),
('Avadhoot Gupte', 'India'),
('Swapnil Bandodkar', 'India'),
('Vaishali Samant', 'India'),
('Shankar Mahadevan', 'India'),
('Adarsh Shinde', 'India'),
('Urmila Dhangar', 'India'),
('Sonu Nigam', 'India'),
('Shreya Ghoshal', 'India'),
('Hariharan', 'India');
INSERT INTO Artists (name, country) VALUES
('Anirudh Ravichander', 'India'),
('Devi Sri Prasad', 'India'),
('Yuvan Shankar Raja', 'India'),
('Sid Sriram', 'India'),
('Shreya Ghoshal', 'India'),
('S. P. Balasubrahmanyam', 'India'),
('K. S. Chithra', 'India'),
('Hariharan', 'India'),
('Vijay Yesudas', 'India'),
('Armaan Malik', 'India');
INSERT INTO Artists (name, country) VALUES
('Ed Sheeran', 'United Kingdom'),
('Taylor Swift', 'United States'),
('The Weeknd', 'Canada'),
('Billie Eilish', 'United States'),
('Adele', 'United Kingdom'),
('Bruno Mars', 'United States'),
('Justin Bieber', 'Canada'),
('Ariana Grande', 'United States'),
('Shawn Mendes', 'Canada'),
('Dua Lipa', 'United Kingdom');


-- Insert data into Albums Table
INSERT INTO Albums (album_id, title) VALUES
(1, 'Aashiqui 2'),
(2, 'Ae Dil Hai Mushkil'),
(3, 'Tamasha'),
(4, 'Kal Ho Naa Ho'),
(5, 'Kabir Singh'),
(6, 'Shershaah'),
(7, 'Brahmastra'),
(8, 'Animal'),
(9, 'Half Girlfriend'),
(10, 'Raees'),
(11, 'Zindagi Na Milegi Dobara'),
(12, 'Ajab Prem Ki Ghazab Kahani'),
(13, 'Iqbal'),
(14, 'War'),
(15, 'Drive'),
(16, 'Patiala House'),
(17, 'Maari'),
(18, 'Sairat'),
(19, 'OK Kanmani'),
(20, '3'),
(21, 'Sonu Ke Titu Ki Sweety'),
(22, 'Master'),
(23, 'Lollipop'),
(24, 'Haider'),
(25, 'Rangabati');
INSERT INTO Albums (title, artist_id, release_year) VALUES
('Sairat', 1, 2016),
('Natarang', 1, 2010),
('Zenda', 2, 2009),
('Yanda Kartavya Aahe', 3, 2006),
('Mee Shivajiraje Bhosale Boltoy', 2, 2009),
('Duniyadari', 4, 2013),
('Katyar Kaljat Ghusali', 5, 2015),
('Dagdi Chawl', 6, 2015),
('Lai Bhaari', 7, 2014),
('Fandry', 8, 2013);
INSERT INTO Albums (title, artist_id, release_year) VALUES
('Master', 1, 2021),
('Pushpa: The Rise', 2, 2021),
('Thuppakki', 3, 2012),
('Ala Vaikunthapurramuloo', 2, 2020),
('Premam', 4, 2015),
('Baahubali: The Beginning', 6, 2015),
('Sita Ramam', 5, 2022),
('Ghajini', 3, 2005),
('Mersal', 1, 2017),
('Jilla', 9, 2014);
INSERT INTO Albums (title, artist_id, release_year) VALUES
('Divide', 1, 2017),
('1989', 2, 2014),
('After Hours', 3, 2020),
('Happier Than Ever', 4, 2021),
('25', 5, 2015),
('Doo-Wops & Hooligans', 6, 2010),
('Justice', 7, 2021),
('Positions', 8, 2020),
('Wonder', 9, 2020),
('Future Nostalgia', 10, 2020);



-- Insert data into Playlist_Songs with correct playlist_id and song_id references
INSERT INTO Playlist_Songs (playlist_id, song_id) VALUES
(101, 201), -- Bollywood Retro: Tum Hi Ho
(101, 202), -- Bollywood Retro: Channa Mereya
(102, 203), -- Romantic Melodies: Agar Tum Saath Ho
(102, 204), -- Romantic Melodies: Kal Ho Naa Ho
(103, 205), -- Party Hits: Tera Ban Jaunga
(103, 220), -- Party Hits: Kolaveri Di
(104, 216), -- Lofi Bollywood: Laung Da Lashkara
(104, 218), -- Lofi Bollywood: Jhingat
(105, 219), -- Workout Motivation: Munbe Vaa
(105, 221), -- Workout Motivation: Dil Chori
(116, 217), -- Punjabi Beats: Rowdy Baby
(116, 224), -- Punjabi Beats: Mann Kunto Maula
(117, 218), -- South Sensation: Jhingat
(117, 222), -- South Sensation: Vaathi Coming
(118, 225), -- Marathi Melodies: Rangabati
(118, 223), -- Marathi Melodies: Lollipop Lagelu
(119, 204), -- Evergreen Classics: Kal Ho Naa Ho
(119, 202), -- Evergreen Classics: Channa Mereya
(120, 203), -- Indie Vibes: Agar Tum Saath Ho
(120, 225), -- Indie Vibes: Rangabati
(121, 220), -- Desi Chartbusters: Kolaveri Di
(121, 223), -- Desi Chartbusters: Lollipop Lagelu
(122, 217), -- Tollywood Hits: Rowdy Baby
(122, 222), -- Tollywood Hits: Vaathi Coming
(123, 223), -- Bhojpuri Party: Lollipop Lagelu
(123, 224), -- Bhojpuri Party: Mann Kunto Maula
(124, 225), -- Carnatic Bliss: Rangabati
(124, 219), -- Carnatic Bliss: Munbe Vaa
(125, 205), -- Fusion Grooves: Tera Ban Jaunga
(125, 221); -- Fusion Grooves: Dil Chori
INSERT INTO Playlist_Songs (playlist_id, song_id) VALUES
(126, 226),   -- Marathi Top Hits
(127, 226),   -- Ajay-Atul Special
(128, 228),   -- Romantic Marathi Songs
(129, 227),   -- Evergreen Marathi
(130, 230),   -- Shankar Mahadevan Hits
(131, 232),   -- Folk Fusion
(132, 235),   -- Workout Beats
(133, 227),   -- Classical Vibes
(134, 229),   -- Bollywood vs Marathi
(135, 230);   -- Festival Special
INSERT INTO Playlist_Songs (playlist_id, song_id) VALUES
 (136, 237), -- Tollywood Chartbusters
 (137, 239), -- Kollywood Hits
 (138, 241), -- Tamil Melodies
 (139, 243), -- Telugu Party Mix
 (140, 245), -- South Indian Romance
 (141, 238), -- Anirudh Special
 (142, 242), -- DSP Party Anthems
 (143, 241), -- Evergreen SPB Hits
 (144, 245), -- South Folk Fusion
 (145, 244); -- South Classical Vibes
INSERT INTO Playlist_Songs (playlist_id, song_id) VALUES
(146, 245), -- Hollywood Top Hits: Shape of You
(146, 246), -- Hollywood Top Hits: Blank Space
(151, 247), -- Romantic English Songs: Blinding Lights
(153, 250), -- Romantic English Songs: Bad Guy
(154, 255), -- Pop Classics: Hello
(152, 248), -- Pop Classics: Just the Way You Are
(149, 249), -- Workout Anthems: Peaches
(150, 250), -- Workout Anthems: 7 Rings
(148, 252), -- Chill Vibes: Senorita
(147, 251); -- Chill Vibes: Levitating
