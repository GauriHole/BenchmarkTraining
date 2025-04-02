SELECT u.name, u.email, s.name AS subscription
FROM Users u
JOIN Subscriptions s ON u.subscription_id = s.subscription_id;


SELECT 
    p.name AS playlist_name, 
    s.title AS song_title, 
    a.name AS artist_name
FROM Playlists p
JOIN Playlist_Songs ps ON p.playlist_id = ps.playlist_id
JOIN Songs s ON ps.song_id = s.song_id
JOIN Artists a ON s.artist_id = a.artist_id
WHERE p.playlist_id = 101;  -- Change this ID to filter by a different playlist


SELECT p.name AS playlist_name, COUNT(ps.song_id) AS total_songs
FROM Playlists p  JOIN Playlist_Songs ps ON p.playlist_id = ps.playlist_id
GROUP BY p.name;

SELECT p.name AS playlist_name, COUNT(ps.song_id) AS total_songs
FROM Playlists p JOIN Playlist_Songs ps ON p.playlist_id = ps.playlist_id
GROUP BY p.playlist_id ORDER BY total_songs DESC;

