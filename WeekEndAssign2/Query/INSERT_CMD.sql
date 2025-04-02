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
