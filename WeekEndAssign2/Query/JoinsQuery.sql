SELECT C.custname, O.order_id, O.total_amount, O.status
FROM Customer C
INNER JOIN Orders O ON C.customer_id = O.customer_id;

SELECT D.doctor_id, U.name AS doctor_name, P.patient_id, U2.name AS patient_name
FROM Doctor D
LEFT JOIN Patient P ON D.doctor_id = P.user_id
LEFT JOIN User U ON D.user_id = U.user_id
LEFT JOIN User U2 ON P.user_id = U2.user_id;

SELECT S.title AS song_title, U.name AS user_name
FROM Songs S
RIGHT JOIN Playlist_Songs PS ON S.song_id = PS.song_id
RIGHT JOIN Playlist P ON PS.playlist_id = P.playlist_id
RIGHT JOIN Subscriber SB ON P.subscriber_id = SB.subscriber_id
RIGHT JOIN User U ON SB.user_id = U.user_id;
