INSERT INTO User (user_id, name, email) VALUES
(1, 'Rahul Sharma', 'rahul.sharma@gmail.com'),
(2, 'Priya Mehta', 'priya.mehta@yahoo.com'),
(3, 'Amit Kumar', 'amit.kumar@hotmail.com'),
(4, 'Sneha Patil', 'sneha.patil@gmail.com'),
(5, 'Vikas Singh', 'vikas.singh@yahoo.com'),
(6, 'Anjali Nair', 'anjali.nair@gmail.com'),
(7, 'Rohan Joshi', 'rohan.joshi@hotmail.com'),
(8, 'Neha Gupta', 'neha.gupta@gmail.com'),
(9, 'Pooja Deshmukh', 'pooja.deshmukh@gmail.com'),
(10, 'Kunal Kapoor', 'kunal.kapoor@gmail.com');
INSERT INTO User (user_id, name, email) VALUES
(11, 'Amit Trivedi', 'amit.trivedi@example.com'),
(12, 'Neha Sharma', 'neha.sharma@example.com'),
(13, 'Karan Mehta', 'karan.mehta@example.com'),
(14, 'Sanya Kapoor', 'sanya.kapoor@example.com'),
(15, 'Vikram Singh', 'vikram.singh@example.com'),
(16, 'APJ Abdul Kalam', 'apj.kalam@example.com'),
(17, 'Deepika Padukone', 'deepika.padukone@example.com'),
(18, 'Kangana Ranaut', 'kangana.ranaut@example.com'),
(19, 'Narendra Modi', 'narendra.modi@example.com'),
(20, 'Sachin Tendulkar', 'sachin.tendulkar@example.com');

INSERT INTO Subscriber (subscriber_id, user_id, subscription_type) VALUES
(1, 1, 'Premium'),
(2, 2, 'Basic'),
(3, 3, 'Premium'),
(4, 4, 'Free'),
(5, 5, 'Basic'),
(6, 6, 'Premium'),
(7, 7, 'Basic'),
(8, 8, 'Free'),
(9, 9, 'Premium'),
(10, 10, 'Basic');
INSERT INTO Subscriber (subscriber_id, user_id, subscription_type) VALUES
(11, 11, 'Premium'),
(12, 12, 'Free'),
(13, 13, 'Family'),
(14, 14, 'Premium'),
(15, 15, 'Free'),
(16, 16, 'Student'),
(17, 17, 'Premium'),
(18, 18, 'Family'),
(19, 19, 'Free'),
(20, 20, 'Premium');

INSERT INTO Subscription (subscription_id, subscriber_id, plan_type, payment_method) VALUES
(1, 1, 'Annual', 'Credit Card'),
(2, 2, 'Monthly', 'UPI'),
(3, 3, 'Annual', 'Debit Card'),
(4, 4, 'Monthly', 'Net Banking'),
(5, 5, 'Annual', 'UPI'),
(6, 6, 'Quarterly', 'Credit Card'),
(7, 7, 'Monthly', 'Wallet'),
(8, 8, 'Free', 'N/A'),
(9, 9, 'Annual', 'Debit Card'),
(10, 10, 'Monthly', 'UPI');
INSERT INTO Subscription (subscription_id, subscriber_id, plan_type, payment_method) VALUES
(11, 11, 'Annual', 'Credit Card'),
(12, 12, 'Monthly', 'UPI'),
(13, 13, 'Family', 'Net Banking'),
(14, 14, 'Annual', 'Debit Card'),
(15, 15, 'Monthly', 'Cash on Delivery'),
(16, 16, 'Student', 'UPI'),
(17, 17, 'Annual', 'Credit Card'),
(18, 18, 'Family', 'Net Banking'),
(19, 19, 'Monthly', 'Debit Card'),
(20, 20, 'Annual', 'UPI');

INSERT INTO Playlist (playlist_id, subscriber_id, playlist_name, created_on) VALUES
(1, 1, 'Bollywood Classics', '2025-01-15'),
(2, 2, 'Workout Hits', '2025-02-05'),
(3, 3, 'Romantic Melodies', '2025-03-01'),
(4, 4, 'Top 90s Hits', '2025-01-20'),
(5, 5, 'Sufi Vibes', '2025-03-12'),
(6, 6, 'Bollywood Party', '2025-02-22'),
(7, 7, 'Lofi Nights', '2025-03-18'),
(8, 8, 'Retro Rewind', '2025-02-28'),
(9, 9, 'Arijit Singh Hits', '2025-03-05'),
(10, 10, 'Classical Bliss', '2025-03-10');
INSERT INTO Playlist (playlist_id, subscriber_id, playlist_name, created_on) VALUES
(11, 11, 'Bollywood Classics', '2025-02-01'),
(12, 12, 'Workout Mix', '2025-02-02'),
(13, 13, 'Romantic Songs', '2025-02-03'),
(14, 14, 'Top Hits 2025', '2025-02-04'),
(15, 15, 'Lofi Beats', '2025-02-05'),
(16, 16, 'Party Hits', '2025-02-06'),
(17, 17, '90s Retro', '2025-02-07'),
(18, 18, 'Devotional Songs', '2025-02-08'),
(19, 19, 'Indie Pop', '2025-02-09'),
(20, 20, 'Punjabi Beats', '2025-02-10');

INSERT INTO Songs (song_id, title, artist, release_date) VALUES
(1, 'Tum Hi Ho', 'Arijit Singh', '2013-04-11'),
(2, 'Channa Mereya', 'Arijit Singh', '2016-07-15'),
(3, 'Kabira', 'Tochi Raina', '2013-06-15'),
(4, 'Dil Dhadakne Do', 'Farhan Akhtar', '2015-05-05'),
(5, 'Raabta', 'Arijit Singh', '2012-10-12'),
(6, 'Phir Bhi Tumko Chaahunga', 'Arijit Singh', '2017-05-19'),
(7, 'Tera Ban Jaunga', 'Akhil Sachdeva', '2019-06-21'),
(8, 'Lag Ja Gale', 'Lata Mangeshkar', '1964-01-01'),
(9, 'Tujh Mein Rab Dikhta Hai', 'Roop Kumar Rathod', '2008-12-12'),
(10, 'Maahi Ve', 'Sukhwinder Singh', '2003-04-10');
INSERT INTO Songs (song_id, title, artist, release_date) VALUES
(11, 'Tujh Mein Rab Dikhta Hai', 'Shreya Ghoshal', '2008-12-12'),
(12, 'Channa Mereya', 'Arijit Singh', '2016-07-14'),
(13, 'Tum Se Hi', 'Mohit Chauhan', '2007-09-21'),
(14, 'Dil Dhadakne Do', 'Farhan Akhtar', '2015-06-05'),
(15, 'Kal Ho Naa Ho', 'Sonu Nigam', '2003-11-28'),
(16, 'Ae Dil Hai Mushkil', 'Arijit Singh', '2016-10-28'),
(17, 'Raabta', 'Arijit Singh', '2012-06-22'),
(18, 'Mann Mera', 'Gajendra Verma', '2011-01-01'),
(19, 'Sun Saathiya', 'Priya Saraiya', '2015-06-19'),
(20, 'Zaalima', 'Arijit Singh', '2017-01-25');

INSERT INTO Playlist_Songs (playlist_id, song_id) VALUES
(1, 1), (1, 2), (1, 3),
(2, 4), (2, 5),
(3, 6), (3, 7),
(4, 8), (4, 9),
(5, 10),
(6, 1), (6, 3),
(7, 4), (7, 5), (7, 6),
(8, 8), (8, 10),
(9, 2), (9, 6), (9, 7),
(10, 9), (10, 10);
INSERT INTO Playlist_Songs (playlist_id, song_id) VALUES
(11, 11), (11, 12),
(12, 13), (12, 14),
(13, 15), (13, 16),
(14, 17), (14, 18),
(15, 19), (15, 20),
(16, 11), (16, 15),
(17, 12), (17, 18),
(18, 13), (18, 20),
(19, 14), (19, 17),
(20, 16), (20, 19);
