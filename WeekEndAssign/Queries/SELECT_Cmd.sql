SELECT * FROM Artists;
SELECT * FROM Albums;
SELECT * FROM Songs;
SELECT * FROM Playlists;
SELECT * FROM Users;
SELECT * FROM Subscriptions;
show tables;
/* ALTER Query */
ALTER TABLE Artists DROP COLUMN debut_year;
ALTER TABLE songs DROP COLUMN genre;

select p.name as name , count(ps.song_id) as total_songs from playlists p join playlist_songs ps 
on p.playlist_id = ps.playlist_id group by p.playlist_id;