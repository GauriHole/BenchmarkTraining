/* To Update all Artist Country as "India" Use Below Queries */
SET SQL_SAFE_UPDATES = 0;   /* Turn OFF Safe UPDATE Mode  */
UPDATE Artists SET country = 'India';
UPDATE subscriptions SET duration = 1;
SET SQL_SAFE_UPDATES = 1; /* By DeFault UPDATE Mode is Safe */

UPDATE Songs
SET release_date = CASE 
    WHEN song_id = 201 THEN '2013-04-05'
    WHEN song_id = 202 THEN '2016-09-30'
    WHEN song_id = 203 THEN '2015-11-27'
    WHEN song_id = 204 THEN '2003-11-28'
    WHEN song_id = 205 THEN '2019-06-14'
    WHEN song_id = 216 THEN '2011-02-11'
    WHEN song_id = 217 THEN '2015-07-17'
    WHEN song_id = 218 THEN '2016-03-18'
    WHEN song_id = 219 THEN '2015-04-17'
    WHEN song_id = 220 THEN '2012-11-16'
    WHEN song_id = 221 THEN '2018-01-12'
    WHEN song_id = 222 THEN '2021-02-14'
    WHEN song_id = 223 THEN '2010-06-22'
    WHEN song_id = 224 THEN '2014-10-02'
    WHEN song_id = 225 THEN '2017-05-05'
END
WHERE release_date IS NULL;
