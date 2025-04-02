CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    subscription_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subscription_id) REFERENCES Subscriptions(subscription_id)
);

CREATE TABLE Subscriptions (
    subscription_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    price DECIMAL(10,2)
);

CREATE TABLE Artists (
    artist_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    country VARCHAR(50)
);

CREATE TABLE Albums (
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    artist_id INT,
    release_year INT,
    FOREIGN KEY (artist_id) REFERENCES Artists(artist_id)
);

CREATE TABLE Songs (
    song_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    artist_id INT,
    album_id INT,
    release_date DATE,
    FOREIGN KEY (artist_id) REFERENCES Artists(artist_id),
    FOREIGN KEY (album_id) REFERENCES Albums(album_id)
);

CREATE TABLE Playlists (
    playlist_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Playlist_Songs (
    playlist_id INT,
    song_id INT,
    PRIMARY KEY (playlist_id, song_id),
    FOREIGN KEY (playlist_id) REFERENCES Playlists(playlist_id),
    FOREIGN KEY (song_id) REFERENCES Songs(song_id)
);

